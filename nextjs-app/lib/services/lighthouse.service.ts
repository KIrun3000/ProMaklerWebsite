import lighthouse from "lighthouse";
import * as chromeLauncher from "chrome-launcher";
import puppeteer from "puppeteer-core";

export interface LighthouseResult {
  url: string;
  scores: {
    performance: number;
    accessibility: number;
    bestPractices: number;
    seo: number;
  };
  metrics: {
    firstContentfulPaint: number;
    speedIndex: number;
    largestContentfulPaint: number;
    timeToInteractive: number;
    totalBlockingTime: number;
    cumulativeLayoutShift: number;
  };
  opportunities: Array<{
    title: string;
    description: string;
    savings: string;
  }>;
  diagnostics: Array<{
    title: string;
    description: string;
  }>;
  screenshot?: string; // Base64
  timestamp: string;
}

export class LighthouseService {
  private async launchChrome() {
    const chrome = await chromeLauncher.launch({
      chromeFlags: [
        "--headless",
        "--disable-gpu",
        "--no-sandbox",
        "--disable-dev-shm-usage",
      ],
    });
    return chrome;
  }

  async runAudit(url: string): Promise<LighthouseResult> {
    let chrome;
    try {
      // Validate URL
      const parsedUrl = new URL(url);
      if (!["http:", "https:"].includes(parsedUrl.protocol)) {
        throw new Error("Invalid URL protocol");
      }

      // Launch Chrome
      chrome = await this.launchChrome();

      // Run Lighthouse
      const runnerResult = await lighthouse(url, {
        logLevel: "error",
        output: "json",
        onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
        port: chrome.port,
      });

      if (!runnerResult) {
        throw new Error("Lighthouse returned no results");
      }

      const lhr = runnerResult.lhr;

      // Extract scores
      const scores = {
        performance: Math.round((lhr.categories.performance?.score ?? 0) * 100),
        accessibility: Math.round(
          (lhr.categories.accessibility?.score ?? 0) * 100
        ),
        bestPractices: Math.round(
          (lhr.categories["best-practices"]?.score ?? 0) * 100
        ),
        seo: Math.round((lhr.categories.seo?.score ?? 0) * 100),
      };

      // Extract metrics
      const metrics = {
        firstContentfulPaint:
          lhr.audits["first-contentful-paint"]?.numericValue ?? 0,
        speedIndex: lhr.audits["speed-index"]?.numericValue ?? 0,
        largestContentfulPaint:
          lhr.audits["largest-contentful-paint"]?.numericValue ?? 0,
        timeToInteractive: lhr.audits["interactive"]?.numericValue ?? 0,
        totalBlockingTime:
          lhr.audits["total-blocking-time"]?.numericValue ?? 0,
        cumulativeLayoutShift:
          lhr.audits["cumulative-layout-shift"]?.numericValue ?? 0,
      };

      // Extract top opportunities
      const opportunities = Object.values(lhr.audits)
        .filter(
          (audit) =>
            audit.details?.type === "opportunity" &&
            audit.score !== null &&
            audit.score < 1
        )
        .sort((a, b) => {
          const aValue = a.details?.overallSavingsMs ?? 0;
          const bValue = b.details?.overallSavingsMs ?? 0;
          return bValue - aValue;
        })
        .slice(0, 5)
        .map((audit) => ({
          title: audit.title,
          description: audit.description,
          savings: this.formatSavings(audit.details?.overallSavingsMs ?? 0),
        }));

      // Extract diagnostics
      const diagnostics = Object.values(lhr.audits)
        .filter(
          (audit) =>
            audit.score !== null &&
            audit.score < 1 &&
            audit.details?.type !== "opportunity"
        )
        .slice(0, 5)
        .map((audit) => ({
          title: audit.title,
          description: audit.description,
        }));

      // Take screenshot
      const screenshot = await this.takeScreenshot(url, chrome.port);

      return {
        url,
        scores,
        metrics,
        opportunities,
        diagnostics,
        screenshot,
        timestamp: new Date().toISOString(),
      };
    } catch (error) {
      console.error("Lighthouse audit error:", error);
      throw error;
    } finally {
      if (chrome) {
        await chrome.kill();
      }
    }
  }

  private async takeScreenshot(
    url: string,
    chromePort: number
  ): Promise<string> {
    let browser;
    try {
      browser = await puppeteer.connect({
        browserURL: `http://localhost:${chromePort}`,
      });

      const page = await browser.newPage();
      await page.setViewport({ width: 1920, height: 1080 });
      await page.goto(url, { waitUntil: "networkidle2", timeout: 30000 });

      const screenshotBuffer = await page.screenshot({
        type: "jpeg",
        quality: 85,
        fullPage: false,
      });

      await page.close();

      return screenshotBuffer.toString("base64");
    } catch (error) {
      console.error("Screenshot error:", error);
      return "";
    } finally {
      if (browser) {
        await browser.disconnect();
      }
    }
  }

  private formatSavings(ms: number): string {
    if (ms < 1000) {
      return `${Math.round(ms)} ms`;
    }
    return `${(ms / 1000).toFixed(1)} s`;
  }

  generateSummary(result: LighthouseResult): string {
    const avgScore = Math.round(
      (result.scores.performance +
        result.scores.accessibility +
        result.scores.bestPractices +
        result.scores.seo) /
        4
    );

    let rating = "schlecht";
    if (avgScore >= 90) rating = "hervorragend";
    else if (avgScore >= 75) rating = "gut";
    else if (avgScore >= 50) rating = "mittelmäßig";

    return `Ihre Website hat einen Durchschnittswert von ${avgScore}/100 (${rating}). 
Performance: ${result.scores.performance}/100
Accessibility: ${result.scores.accessibility}/100
Best Practices: ${result.scores.bestPractices}/100
SEO: ${result.scores.seo}/100

Die größten Verbesserungspotenziale:
${result.opportunities.slice(0, 3).map((o, i) => `${i + 1}. ${o.title} (Einsparung: ${o.savings})`).join("\n")}`;
  }
}

export const lighthouseService = new LighthouseService();

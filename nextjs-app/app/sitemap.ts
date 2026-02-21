import { MetadataRoute } from "next";
import { caseStudies } from "@/data/caseStudies";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://makler-websites.immo";

  // Static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/referenzen`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/preise`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/team`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/impressum`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/agb`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/agrar`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },
  ];

  // Dynamic case study pages
  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((cs) => ({
    url: `${baseUrl}/referenzen/${cs.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...caseStudyRoutes];
}

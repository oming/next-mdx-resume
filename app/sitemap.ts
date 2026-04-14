import type { MetadataRoute } from "next";

import { BASE_URL } from "@/lib/constants";

const lastUpdated = process.env.NEXT_PUBLIC_LAST_UPDATED;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [
    {
      url: `${BASE_URL}`,
      lastModified: lastUpdated || new Date().toISOString().split("T")[0],
    },
  ];

  return [...routes];
}

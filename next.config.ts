import type { NextConfig } from "next";

import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";
import createMDX from "@next/mdx";
import { execSync } from "child_process";

const getLastCommitTime = () => {
  try {
    return execSync("git log -1 --format=%cd --date=iso").toString().trim();
  } catch (error) {
    console.error("Error getting last commit time:", error);
    return "";
  }
};

const nextConfig: NextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below

  images: {
    remotePatterns: [{ hostname: "*" }],
  },
  env: {
    NEXT_PUBLIC_LAST_UPDATED: getLastCommitTime(),
  },
};

if (process.env.NODE_ENV === "development") {
  await setupDevPlatform();
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);

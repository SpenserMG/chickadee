import type { NextConfig } from "next";

// Set by the GitHub Pages workflow so local dev/build/start are unaffected.
const isGithubPagesBuild = process.env.GITHUB_PAGES === "true";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  ...(isGithubPagesBuild && {
    output: "export",
    images: { unoptimized: true },
    basePath: repoName ? `/${repoName}` : undefined,
    assetPrefix: repoName ? `/${repoName}/` : undefined,
  }),
};

export default nextConfig;

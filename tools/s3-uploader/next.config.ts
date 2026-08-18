import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This tool has its own package-lock.json inside the parent Nuxt repo's
  // worktree, which otherwise makes Next.js's workspace-root inference
  // ambiguous (it finds both lockfiles and warns).
  turbopack: {
    root: path.join(import.meta.dirname),
  },
};

export default nextConfig;

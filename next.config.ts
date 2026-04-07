import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  typescript: {
    ignoreBuildErrors: true,
  },images: {
    domains: ["rmcnjxvjosmglbobgfyh.supabase.co"],
  },
};

export default nextConfig;

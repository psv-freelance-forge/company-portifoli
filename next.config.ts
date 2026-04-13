import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' 'wasm-unsafe-eval' https://psvfreelanceforge.in; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://psvfreelanceforge.in; connect-src 'self' wss://psvfreelanceforge.in https://psvfreelanceforge.in;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;


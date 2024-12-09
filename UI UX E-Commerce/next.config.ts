import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    // Handle static assets like fonts or images
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf|svg|png|jpg|jpeg|gif|webp)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 8192, // Files larger than this will be served as separate files
        },
      },
    });

    // Important to ensure Next.js properly handles font files on the server
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      };
    }

    return config;
  },
};

export default nextConfig;




// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

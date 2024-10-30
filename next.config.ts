import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
<<<<<<< HEAD
    experimental: {
        turbo: {
            rules: {
                '*.html': ['raw-loader'],
            },
        },
    },
    webpack: (config: any, { isServer }: { isServer: boolean }) => {
        if (!isServer) {
            config.resolve.fallback = {
                ...config.resolve.fallback,
                'aws-sdk': false,
                'mock-aws-s3': false,
                'nock': false,
                'fs': false,
                'net': false,
                'tls': false,
            };
        }
        return config;
    },
}
=======
  images: {
    unoptimized: true,
  },
  /* other config options here */
};
>>>>>>> 38b58474e0dfc7d688fad4ff1fff13d9423ebe95

export default nextConfig

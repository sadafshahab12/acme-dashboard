import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
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

export default nextConfig

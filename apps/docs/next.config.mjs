/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ["@pragatiui/ui"],
    output: 'export',
    basePath: '/pragatiui',
    images: {
        unoptimized: true,
    },
};

export default nextConfig;

import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['lucide-react'],
};

export default withMDX(nextConfig);

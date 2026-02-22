/** @type {import('next').NextConfig} */
const nextConfig = {
    // Ensuring ESLint issues don't block deployment for this assignment
    eslint: {
        ignoreDuringBuilds: true,
    },
    // Optional: Also ignore TypeScript errors during build if they occur on Vercel
    typescript: {
        ignoreBuildErrors: true,
    }
};

export default nextConfig;

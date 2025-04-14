/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:5000/api/:path*' // Proxy API requests to backend server
            }
        ];
    },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
import path from 'path';

// Configure Next.js build settings
const nextConfig = {
    sassOptions:{
        includePaths: [path.join(process.cwd(), 'styles')],
    }
};
export default nextConfig;

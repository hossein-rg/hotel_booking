/** @type {import('next').NextConfig} */
import path from 'path';

// Configure Next.js build settings
const nextConfig = {
    sassOptions:{
        includePaths: [path.join(process.cwd(), 'styles')],
    },
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'shjpzdwxolhcwnrxdxgo.supabase.co',
            port: '',
            pathname: '/storage/v1/object/public/cabin-images/**',
          },
        ],
      },

};
export default nextConfig;

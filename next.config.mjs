/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Option A: simple allow‑list for your exact host
    domains: ['iz6nfzsevxdwxfxk.public.blob.vercel-storage.com'],

    // — or, if you ever need wildcards/subpaths, use remotePatterns:
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'iz6nfzsevxdwxfxk.public.blob.vercel-storage.com',
    //     port: '',
    //     pathname: '/**',
    //   },
    // ],
  },
};

export default nextConfig;

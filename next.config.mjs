import { withDoxaWatch } from '@doxa-innovations/watch/next';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**.r2.cloudflarestorage.com' },
      { protocol: 'https', hostname: '**.r2.dev' },
      { protocol: 'https', hostname: 'cdn.simpleicons.org' },
    ],
  },
};

// Doxa Watch: source maps for stack traces (browser maps are moved out of the public folder by
// `doxa-watch postbuild`) and the collector kept out of the server bundle.
export default withDoxaWatch(nextConfig);

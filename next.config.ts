import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    dangerouslyAllowSVG: true, 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/lxizaxi/**',
        // port: '', // portが指定されていなければ省略可能
        // pathname: '/lxizaxi/**', // より具体的にしたい場合は指定。汎用的にするなら '/**'
      },
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org',
        port: '',
        pathname: '/**',
        // port: '',
        // pathname: '/**', // このドメイン下の全てのパスを許可
      },
      // 必要に応じて他のドメインも追加できます
      // {
      //   protocol: 'https',
      //   hostname: 'picsum.photos', // 例: 背景画像で使用している場合
      // },
    ],
  },
};

export default nextConfig;

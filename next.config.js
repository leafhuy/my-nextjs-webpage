/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // bắt buộc để xuất tĩnh
  images: {
    unoptimized: true // để không cần tối ưu hóa ảnh server-side
  }
}

module.exports = nextConfig;

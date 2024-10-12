/** @type {import('next').NextConfig} */
const nextConfig = {
  // async redirects() {
  //   return [
  //     {
  //       source: '/admin',             // Đường dẫn yêu cầu từ phía người dùng
  //       destination: '/admin/auth',
  //       permanent: true,    // Đường dẫn thực tế đến API bên ngoài
  //     },
  //     {
  //       source: '/',            // Đường dẫn yêu cầu từ phía người dùng
  //       destination: '/admin/dashboard',    
  //       permanent: true,     // Đường dẫn nội bộ của ứng dụng
  //     },
  //     {
  //       source: '/qllh',             // Đường dẫn yêu cầu từ phía người dùng
  //       destination: '/admin/dashboard/class-room', 
  //       permanent: true,   // Đường dẫn thực tế đến API bên ngoài
  //     },
  //     {
  //       source: '/qlsv',            // Đường dẫn yêu cầu từ phía người dùng
  //       destination: '/admin/dashboard/alumunus', 
  //       permanent: true,        // Đường dẫn nội bộ của ứng dụng
  //     },

  //   ];
  // },
  async rewrites() {
    return [
      
      {
        source: '/san-pham',            // Đường dẫn yêu cầu từ phía người dùng
        destination: '/user/products', 
             // Đường dẫn nội bộ của ứng dụng
      },
      {
        source: '/san-pham/:id',            // Đường dẫn yêu cầu từ phía người dùng
        destination: '/user/products/:id', 
             // Đường dẫn nội bộ của ứng dụng
      },
    ];
  },
    // exportPathMap() {
    //     return {
    //       '/admin': { page: '/admin/auth' },
    //       '/': { page: '/admin/dashboard' },
    //       '/qlsv': { page: '/admin/dashboard/alumunus' },
    //       '/qllh': { page: '/admin/dashboard/class-room' },
    //       '/qlgv': { page: '/admin/dashboard/teachers' },
    //       // Thêm các đường dẫn khác tại đây
    //     };
    //   },
      
};

export default nextConfig;

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
      },
      {
        protocol: "https",
        hostname: "drive.google.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
      },{
        protocol: 'https',
        hostname: 'bayshore.nyc3.digitaloceanspaces.com',
        // hostname: "**",
      },  
      {
        protocol: 'https',
        hostname: 'bayshore.nyc3.cdn.digitaloceanspaces.com',
        port: '',
      },
    ],
  },
  skipTrailingSlashRedirect: true,
};

module.exports = nextConfig;

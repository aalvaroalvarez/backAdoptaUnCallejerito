const config = {
  dbConfig: {
    dbName: process.env.DB_NAME,
    dbPassword: process.env.DB_PASSWORD,
    dbUri: process.env.DB_URI
  },
  cloudinaryConfig: {
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  },
};

module.exports = config;

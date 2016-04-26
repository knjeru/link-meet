var config = {};

config.mongoURI = {
  test: 'mongodb://localhost/link-meat',
  development: 'mongodb://localhost/link-meat',
  production: process.env.MONGODB_URI
};


module.exports = config;

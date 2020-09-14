const config = {
  Server: "localhost",
  port: process.env.port || 3000,
  dbHost: "localhost",
  dbPort: 27017,
  database: "incident",
};

module.exports = config;

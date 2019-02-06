const env = process.env;
const config = {
  db: {
    host: env.DB_HOST || "127.0.0.1",
    username: env.DB_USER || "root",
    password: env.DB_PASSWORD || "hipages",
    database: env.DB_NAME || "hipages",
    dialect: "mysql"
  }
};

module.exports = config;

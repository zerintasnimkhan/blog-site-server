require("dotenv").config();

const config = {
  PORT: process.env.PORT || '3005',
  MONGOOSE_URI: process.env.MONGOOSE_URI,
}

module.exports = config;
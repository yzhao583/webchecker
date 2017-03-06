// demo.js

module.exports = {
  mongodb: {
    user:     process.env.MONGOLAB_USERNAME,
    password: process.env.MONGOLAB_PASSWORD,
    database: process.env.MONGOLAB_DATABASE,
    server:   process.env.MONGOLAB_SERVER
  },
  monitor: {
        apiUrl: process.env.UPTIME_API_URL  
  },
  verbose: false
}
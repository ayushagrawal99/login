const env = process.env.NODE_ENV || "development";

var config = {
    development: {
        env: env,
        port: process.env.PORT || 3000,
        database: {
            username: "root",
            password: "Ayush@12345",
            dbName: "loginTask",
            host: "localhost",
            port: "1433",
            dialect: "mysql",
            pool : {
                max : 5,
                min : 0,
                acquire : 30000,
                idle : 10000,
            }
        },
    },
};

module.exports = config[env];
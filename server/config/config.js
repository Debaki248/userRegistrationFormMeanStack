var env = process.env.NODE_ENV || 'development';//check enviroment
console.log("node Environment = ",env);
var config = require('./config.json');
var envConfig = config[env];
Object.keys(envConfig).forEach(key => process.env[key] = envConfig[key]);//add env config values to process.env

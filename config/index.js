var configValues = require("./config.json");

module.exports = {
    getMongoConnectionString: function(){
        return configValues.mongoConnectionString;
    }
}
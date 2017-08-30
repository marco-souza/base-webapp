/**
 * Return a configuration based on NODE_ENV variable [development, production]
 */
module.exports = (process.env.NODE_ENV === "development") ?
    require("./webpack/dev.config") :
    require("./webpack/prod.config")
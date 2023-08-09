// @input Asset.RemoteServiceModule remoteServiceModule

// Import module
const Module = require("./AccuWeather (no user location) API Module");
const ApiModule = new Module.ApiModule(script.remoteServiceModule);

// Access functions defined in ApiModule like this:
//ApiModule.(function name)
global.weather = ApiModule;
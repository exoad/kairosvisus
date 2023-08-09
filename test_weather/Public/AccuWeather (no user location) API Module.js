/* // NOTE: This file contains code for accessing an external API encapsulated as a JS module. You should not modify this file.
 * // Instead, you should modify the "AccuWeather (no user location) API" script and access the functions through the imported class wrapper.
*/

/*
 * @param {RemoteApiResponse} response A raw API response from an AccuWeather (no user location) API
 * @param {function} cb A callback to call with error and result data once the response has been parsed and error checked
 *
*/

function handleAPIResponse(response, cb) {
    if (response.statusCode !== 1) {
        var errorMessage = getErrorMessage(response);
        print(errorMessage);
        cb(true, errorMessage);
    } else {
        try {
            var parsedBody = JSON.parse(response.body);
        } catch (e) {
            var errorMessage = "ERROR: Failed to parse response";
            print(errorMessage);
            if (cb) {
                cb(true, errorMessage);
            }
            return;
        }
        if (cb) {
            cb(false, parsedBody);
        }
    }
}

function getErrorMessage(unparsedResponse) {
    var bugText = " - Please report this as a bug.";
    var errorMessage = "API Call Error - " + getErrorCodeMessage() + ": " + unparsedResponse.body;
    return errorMessage;

    // https://docs.snap.com/api/lens-studio/Classes/ScriptObjects/#RemoteApiResponse--statusCode
    function getErrorCodeMessage() {
        switch(unparsedResponse.statusCode) {
            case 0: return "Unknown Status Code"+bugText;
            case 1: return "Success";
            case 2: return "Redirected";
            case 3: return "Bad Request";
            case 4: return "Access Denied";
            case 5: return "Api Call Not Found";
            case 6: return "Timeout";
            case 7: return "Request Too Large";
            case 8: return "Server Processing Error";
            case 9: return "Request cancelled by caller";
            case 10: return "Internal: Framework Error";
        }
    }
}

function ApiModule(remoteServiceModule) {
    this.remoteServiceModule = remoteServiceModule;
}

function setParameter(paramKey, paramValue, parameters, isOptional) {
    if (paramValue != null) {
        parameters[paramKey] = paramValue;
    } else if (paramValue == null && !isOptional) {
        throw (paramKey + " is a required parameter. Please input a valid value.");
    }
}

ApiModule.prototype.daily_forecast = function(lat, lng, days, cb) {
    var req = global.RemoteApiRequest.create();
    req.endpoint = "daily_forecast";
    var parameters = {};
    setParameter("lat", lat, parameters, false);
    setParameter("lng", lng, parameters, false);
    setParameter("days", days, parameters, true);
    req.parameters = parameters;
    this.remoteServiceModule.performApiRequest(req, function(response) {
        if(cb) {
            handleAPIResponse(response, cb);
        }
    });
};
ApiModule.prototype.hourly_forecast = function(lat, lng, hours, cb) {
    var req = global.RemoteApiRequest.create();
    req.endpoint = "hourly_forecast";
    var parameters = {};
    setParameter("lat", lat, parameters, false);
    setParameter("lng", lng, parameters, false);
    setParameter("hours", hours, parameters, true);
    req.parameters = parameters;
    this.remoteServiceModule.performApiRequest(req, function(response) {
        if(cb) {
            handleAPIResponse(response, cb);
        }
    });
};
ApiModule.prototype.current_condition_and_forecast = function(lat, lng, hourly_forecast_hours, daily_forecast_days, cb) {
    var req = global.RemoteApiRequest.create();
    req.endpoint = "current_condition_and_forecast";
    var parameters = {};
    setParameter("lat", lat, parameters, false);
    setParameter("lng", lng, parameters, false);
    setParameter("hourly_forecast_hours", hourly_forecast_hours, parameters, true);
    setParameter("daily_forecast_days", daily_forecast_days, parameters, true);
    req.parameters = parameters;
    this.remoteServiceModule.performApiRequest(req, function(response) {
        if(cb) {
            handleAPIResponse(response, cb);
        }
    });
};
ApiModule.prototype.current_condition = function(lat, lng, cb) {
    var req = global.RemoteApiRequest.create();
    req.endpoint = "current_condition";
    var parameters = {};
    setParameter("lat", lat, parameters, false);
    setParameter("lng", lng, parameters, false);
    req.parameters = parameters;
    this.remoteServiceModule.performApiRequest(req, function(response) {
        if(cb) {
            handleAPIResponse(response, cb);
        }
    });
};

module.exports.ApiModule = ApiModule;

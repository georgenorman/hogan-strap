/*!
 ~
 ~ HoganStrap - Config Module
 ~
 */


/**
 * Common configuration info.
 */
var hsConfgModule = (function() {
  "use strict";

  var configData = null;

  return {
    /**
     * Return the value of the config entry, or null if not found.
     */
    getString: function(key) {
        // initialize data (which would normally be read from a config file).
        if (configData === null) {
          configData = {
            // base URL (e.g., "http://localhost:63342/hogan-strap", "http://localhost:8080", "http://www.thruzero.com/hogan-strap")
            "baseUrl": "http://localhost:63342/hogan-strap"
          };
        }

        return configData[key];
    }
  }

}());

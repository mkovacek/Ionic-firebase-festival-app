cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.ionic.keyboard/www/keyboard.js",
        "id": "com.ionic.keyboard.keyboard",
        "clobbers": [
            "cordova.plugins.Keyboard"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device/www/device.js",
        "id": "org.apache.cordova.device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.splashscreen/www/splashscreen.js",
        "id": "org.apache.cordova.splashscreen.SplashScreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.network-information/www/network.js",
        "id": "org.apache.cordova.network-information.network",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.network-information/www/Connection.js",
        "id": "org.apache.cordova.network-information.Connection",
        "clobbers": [
            "Connection"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.globalization/www/GlobalizationError.js",
        "id": "org.apache.cordova.globalization.GlobalizationError",
        "clobbers": [
            "window.GlobalizationError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.globalization/www/globalization.js",
        "id": "org.apache.cordova.globalization.globalization",
        "clobbers": [
            "navigator.globalization"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.ionic.keyboard": "1.0.3",
    "org.apache.cordova.device": "0.2.12",
    "org.apache.cordova.splashscreen": "0.3.4",
    "org.apache.cordova.network-information": "0.2.13",
    "org.apache.cordova.globalization": "0.3.4-dev",
    "org.apache.cordova.geolocation": "0.3.12-dev"
}
// BOTTOM OF METADATA
});
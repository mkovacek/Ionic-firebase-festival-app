// Karma configuration
// Generated on Fri Feb 13 2015 17:35:20 GMT+0100 (Central European Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
	  'www/lib/angular/angular.js',
      'www/lib/angular-ui-router/release/angular-ui-router.js',
      'test/lib/angular/angular-mocks.js',
      'www/lib/ionic/js/ionic.js',
      'www/lib/ionic/js/ionic-angular.js',
      'www/js/app.js',
      'www/lib/ngstorage/ngStorage.js',
      'www/lib/bower-angular-translate-2.5.2/angular-translate.js',
      'www/lib/Firebase/firebase.js',
      'www/lib/Firebase/angularfire.min.js',
      'www/lib/angular-google-maps/dist/angular-google-maps.js',

      'www/components/events/events-controller.js',
      'www/components/events/events-details-controller.js',
      'www/components/contact/contact-controller.js',
      'www/components/localStorage/localStorge-service.js',
      'www/components/data/data-service.js',
      'www/components/localization/localization-service.js',
      'www/components/renaissance/renaissance-controller.js',
      'www/components/sponsors/sponsors-controller.js',
      'www/components/webService/firebase-service.js',
      'www/components/map/mapGeolocation-services.js',
      'www/components/map/map-controller.js',


      'test/unit/controllers/contactCtrlSpec.js',
      'test/unit/services/dataServiceSpec.js',
      'test/unit/controllers/eventsCtrlSpec.js',
      'test/unit/controllers/eventsDetailsCtrlSpec.js',
      'test/unit/services/localizationServiceSpec.js',
      'test/unit/services/localStorageServiceSpec.js',
      'test/unit/controllers/renaissanceCtrlSpec.js',
      'test/unit/controllers/sponsorsCtrlSpec.js',
      'test/unit/services/firebaseServiceSpec.js',
      'test/unit/controllers/mapCtrlSpec.js',
      'test/unit/services/mapGeolocationServiceSpec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};


angular.module('localization.services',['localStorage.services','pascalprecht.translate'])

    /**
     * @name LocalizationService
     * @desc Service for localization
     */
    .factory('LocalizationService',['$q','$translate','LocalStorageService',
        function($q,$translate,LocalStorageService) {
            return {

                /**
                 * @name getLanguage
                 * @desc Looking for smartphone language set in settings
                 * @returns {string} language that is used on smartphone
                 */
                getLanguage: function () {
                    var q = $q.defer();
                    if (typeof navigator.globalization !== "undefined") {
                        navigator.globalization.getPreferredLanguage(function (language)
                        {
                            $translate.use((language.value).split("-")[0]).then(function (data)
                            {
                                q.resolve(data);
                            }, function (error) {
                                q.reject(error);
                            });
                        });
                    }
                    return q.promise;
                },

                /**
                 * @name setLanguage
                 * @param {string} lang - language value
                 * @desc save smartphone language into localStorage
                 */
                setLanguage: function (lang) {
                    switch (lang) {
                        case "hr":
                            LocalStorageService.setLanguage(lang);
                            break;
                        default :
                            LocalStorageService.setLanguage("en");
                    }
                }
            }
        }
    ]);
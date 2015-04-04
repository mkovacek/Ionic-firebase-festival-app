angular.module('localStorage.services', ['ngStorage'])

    /**
     * @name LocalStorageService
     * @desc Service for saving data to local storage
     */
    .factory('LocalStorageService',['$localStorage',
        function($localStorage) {
            return {

                /**
                 * @name setData
                 * @desc Saving 'true' - representing that data it's in localStorage
                 * @param {string} value - true
                 */
                setData:function(value){
                    $localStorage.data=value;
                },

                /**
                 * @name getData
                 * @desc Looking if data is in localStorage
                 * @returns {string} true/false
                 */
                getData:function(){
                    return $localStorage.data;
                },

                /**
                 * @name setContacts
                 * @desc Saving contacts data to localStorage
                 * @param {Object[]|json} value - contacts data in json object
                 */
                setContacts: function(value){
                    $localStorage.contacts=value;
                },

                /**
                 * @name getContacts
                 * @desc Return contacts data from localStorage
                 * @returns {string|list}
                 */
                getContacts:function(){
                    return $localStorage.contacts;
                },

                /**
                 * @name setRenaissance
                 * @desc Saving renaissance data to localStorage
                 * @param {Object[]|json} value - renaissance data in json object
                 */
                setRenaissance: function(value){
                    $localStorage.renaissance=value;
                },

                /**
                 * @name getRenaissance
                 * @desc Return renaissance data from localStorage
                 * @returns {string|list}
                 */
                getRenaissance:function(){
                    return $localStorage.renaissance;
                },

                /**
                 * @name setEvents
                 * @desc Saving events data to localStorage
                 * @param {Object[]|json} value - events data in json object
                 */
                setEvents: function(value){
                    $localStorage.events=value;
                },

                /**
                 * @name getEvents
                 * @desc Return events data from localStorage
                 * @returns {string|list}
                 */
                getEvents:function(){
                    return $localStorage.events;
                },

                /**
                 * @name setSponsors
                 * @desc Saving sponsors data to localStorage
                 * @param {Object[]|json} value - sponsors data in json object
                 */
                setSponsors: function(value){
                    $localStorage.sponsors=value;
                },

                /**
                 * @name getSponsors
                 * @desc Return sponsors data from localStorage
                 * @returns {string|list}
                 */
                getSponsors:function(){
                    return $localStorage.sponsors;
                },

                /**
                 * @name setMapMarkers
                 * @desc Saving map data to localStorage
                 * @param {Object[]|json} value - map data in json object
                 */
                setMapMarkers: function(value){
                    $localStorage.mapMarkers=value;
                },

                /**
                 * @name getMapMarkers
                 * @desc Return map data from localStorage
                 * @returns {string|list}
                 */
                getMapMarkers:function(){
                    return $localStorage.mapMarkers;
                },

                /**
                 * @name setUserLocation
                 * @desc Saving user location to localStorage
                 * @param {string} value - user location (long,lat)
                 */
                setUserLocation: function(value){
                    $localStorage.userLocation=value;
                },

                /**
                 * @name getUserLocation
                 * @desc Return user location from localStorage
                 * @returns {string}
                 */
                getUserLocation:function(){
                    return $localStorage.userLocation;
                },

                //Saving smartphone language to localStorage
                /**
                 * @name setLanguage
                 * @desc Saving smartphone language to localStorage
                 * @param {string} value - language value
                 */
                setLanguage:function(value){
                    $localStorage.language=value;
                },

                /**
                 * @name getLanguage
                 * @desc Return smartphone language from localStorage
                 * @returns {string}
                 */
                getLanguage:function(){
                    return $localStorage.language;
                },


                setMenu:function(value){
                    $localStorage.menu=value;
                },

                /**
                 * @name getLanguage
                 * @desc Return smartphone language from localStorage
                 * @returns {string}
                 */
                getMenu:function(){
                    return $localStorage.menu;
                }
            }
        }
    ]);
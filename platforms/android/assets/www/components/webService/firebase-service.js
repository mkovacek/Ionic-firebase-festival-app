angular.module('firebase.services', ['firebase'])

    /**
     * @name FirebaseService
     * @desc Service for communication with webservice
     */
    .factory('FirebaseService',['$q','$firebase',
            function($q,$firebase) {
                return {

                    /**
                     * @name getData
                     * @desc Fetch and synchronize data from web service
                     * @param {string} lang- language (hr,en..)
                     * @returns {Object[]|json}
                     */
                    getData: function(lang) {
                        var URL="https://renfest.firebaseio.com/"+lang;
                        var ref= new Firebase(URL);
                        var data = $firebase(ref).$asArray();
                        var q = $q.defer();
                        data.$loaded()
                            .then(
                                function(data){
                                    q.resolve(data);
                                },
                                function(error){
                                    q.reject(error);
                                });
                        return q.promise;
                    }
                }
            }
     ]);
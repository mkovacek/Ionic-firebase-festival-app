
angular.module('data.services', [])

    /**
     * @name DataService
     * @desc Service for data organization
     */
    .factory('DataService',function(){
            return {

                /**
                 * @name getData
                 * @desc Organizes data and push to list
                 * @param {string} retrievedData - data from local storage
                 * @returns {string|list}
                 */
                getData:function(retrievedData){
                    var data=[];
                    angular.forEach(retrievedData,function(value,key){
                        data.push(value);
                    });
                    return data;
                },

                /**
                 * @name getEventsData
                 * @desc Organizes events data for some date and push to list
                 * @param {string} retrievedData - data about events from local storage
                 * @param {string} day - specific day of events
                 * @returns {string|list}
                 */
                getEventsData:function(retrievedData,day){
                    var eventsData;
                    var data=[];
                    switch (day){
                        case "day1":
                            eventsData=retrievedData.day1;
                            break;
                        case "day2":
                            eventsData=retrievedData.day2;
                            break;
                        case "day3":
                            eventsData=retrievedData.day3;
                            break;
                    }
                    angular.forEach(eventsData,function(value,key){
                        data.push(value);
                    });
                    return data;
                },

                /**
                 * @name getEventsDetailsData
                 * @desc Organizes details about specific event and push to list
                 * @param {string} retrievedData - events details
                 * @returns {string|list}
                 */
                getEventsDetailsData:function(retrievedData){
                    var data=[];
                    angular.forEach(retrievedData,function(information,key){
                        angular.forEach(information,function(value,key){
                            data.push(value);
                        });
                    });
                    return data;
                }
            }
    });
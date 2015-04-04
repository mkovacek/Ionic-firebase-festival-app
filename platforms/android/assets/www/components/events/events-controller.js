
angular.module('events.controllers',['data.services','localStorage.services'])

    /**
     * @name EventsCtrl
     * @desc Application Controller for Events-day screen
     */
    .controller('EventsCtrl',['$scope','DataService','$stateParams','LocalStorageService',
        function ($scope,DataService,$stateParams,LocalStorageService) {

           /**
            * @name init
            * @desc Shows events data for specific day on screen
            */
           var init=function(){
                $scope.choice=LocalStorageService.getMenu();
                var eventsData=LocalStorageService.getEvents();
                $scope.day=$stateParams.day;
                $scope.events=DataService.getEventsData(eventsData,$stateParams.day);
           };

           init();
        }
    ]);



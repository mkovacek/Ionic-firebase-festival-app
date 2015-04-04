
angular.module('eventsDetails.controllers',['data.services'])

    /**
     * @name EventsDetailsCtrl
     * @desc Application Controller for  events-day-details screen
     */
    .controller('EventsDetailsCtrl',['$scope','$stateParams','DataService','LocalStorageService',
        function($scope,$stateParams,DataService,LocalStorageService) {

            /**
             * @name init
             * @desc Shows details about events for on screen
             */
            var init=function(){
                $scope.choice=LocalStorageService.getMenu();
                $scope.detail=[];
                $scope.description=$stateParams.description;
                $scope.img="http://goo.gl/"+$stateParams.img;
                $scope.img2="http://goo.gl/"+$stateParams.img2;
                $scope.time=$stateParams.time;
                $scope.title=$stateParams.title;
                var details=angular.fromJson($stateParams.details);
                $scope.detail=DataService.getEventsDetailsData(details);
            };

            init();
        }
    ]);
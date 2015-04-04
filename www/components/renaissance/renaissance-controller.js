
angular.module('renaissance.controllers', ['localStorage.services','data.services'])

    /**
     * @name RenaissanceCtrl
     * @desc Application Controller for renaissance screen
     */
    .controller('RenaissanceCtrl',['$scope','LocalStorageService','DataService','$state',
            function($scope,LocalStorageService,DataService,$state){


                //LocalStorageService.setMenu('null');
                /*var renaissanceData=LocalStorageService.getRenaissance();
                $scope.renaissance=DataService.getData(renaissanceData);*/

                /**
                 * @name init
                 * @desc Shows renaissance data on screen
                 */
                var init=function () {
                    var renaissanceData=LocalStorageService.getRenaissance();
                    $scope.renaissance=DataService.getData(renaissanceData);
                };
                init();

            }
        ]);
/**
 * Created by Matija on 18.2.2015..
 */

angular.module('menu.controllers', ['localStorage.services','data.services'])

/**
 * @name ContactCtrl
 * @desc Application Controller for Contact screen
 */
    .controller('MenuCtrl',['$scope','LocalStorageService',
        function($scope,LocalStorageService) {

            $scope.set=function(choice){
                LocalStorageService.setMenu(choice);
            };
        }
    ])

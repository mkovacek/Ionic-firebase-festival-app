
angular.module('contact.controllers', ['localStorage.services','data.services'])

    /**
     * @name ContactCtrl
     * @desc Application Controller for Contact screen
     */
    .controller('ContactCtrl',['$scope','LocalStorageService','DataService',
            function($scope,LocalStorageService,DataService) {

                /**
                 * @name init
                 * @desc Shows contact data on screen
                 */
                var init=function(){
                    var contactsData=LocalStorageService.getContacts();
                    $scope.contacts=DataService.getData(contactsData);
                };
                init();
            }
    ]);

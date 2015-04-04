
angular.module('sponsors.controllers',['data.services','localStorage.services'])

    /**
     * @name SponsorsCtrl
     * @desc Application Controller for sponsors screen
     */
    .controller('SponsorsCtrl',['$scope','DataService','LocalStorageService','$ionicModal',
        function ($scope,DataService,LocalStorageService,$ionicModal)
        {
            /**
             * @name init
             * @desc Shows sponsors data on screen
             */
            var init=function(){
                var sponsorsData=LocalStorageService.getSponsors();
                $scope.sponsors=DataService.getData(sponsorsData);
            };
            init();


            /**
             * @name init
             * @desc Shows sponsors details on modal
             */
            $ionicModal.fromTemplateUrl('sponsors-modal.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function(modal) {
                $scope.modal = modal
            });


            /**
             * @name openModal
             * @desc It's opening modal
             */
            $scope.openModal = function(decription,img) {

                $scope.details = {
                    description: decription,
                    img: img
                };

                $scope.modal.show()
            };

            /**
             * @name closeModal
             * @desc It's closing modal
             */
            $scope.closeModal = function() {
                $scope.modal.hide();
            };


        }
    ]);
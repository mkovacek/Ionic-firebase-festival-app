
angular.module('maps.controllers',['data.services','localStorage.services','uiGmapgoogle-maps','mapGeolocation.services','ui.router'])

    /**
     * @name MapCtrl
     * @desc Application Controller for map screen
     */
    .controller('MapCtrl',['$scope','DataService','LocalStorageService','MapGeolocationService','$state',
        function($scope,DataService, LocalStorageService, MapGeolocationService,$state) {

              var markersData=LocalStorageService.getMapMarkers();
              $scope.markers=DataService.getData(markersData);
              var userLocation=LocalStorageService.getUserLocation();

              if(userLocation.idKey!=undefined){
                  $scope.markers.push(userLocation);
                  $scope.map = {
                      center: {
                          latitude: userLocation.latitude,
                          longitude: userLocation.longitude
                      },
                      zoom: 16
                  };
                  var resetLocation= {
                      idKey:undefined,
                      latitude:undefined,
                      longitude:undefined,
                      icon: undefined,
                      title: undefined
                  };
                  LocalStorageService.setUserLocation(resetLocation);
              }else{
                  $scope.map = {
                      center: {
                          latitude: 46.1617581,
                          longitude: 16.8316687
                      },
                      zoom: 16
                  };
              }

             /**
              * @name init
              * @desc Shows map and markes with data on screen
              */
              var init=function ()
              {
                   $scope.options = {
                       scrollwheel: false
                   };

                   $scope.windowOptions = {
                       show: false
                   };

                   $scope.onClick = function() {
                       $scope.windowOptions.show = !$scope.windowOptions.show;
                   };

                   $scope.closeClick = function() {
                       $scope.windowOptions.show = false;
                   };
              };

              init();

              $scope.currentLocation=function() {
                MapGeolocationService.getLocation().then(function(response){
                    LocalStorageService.setUserLocation(response);
                    $state.go($state.current, {}, {reload: true});
                });
              };
        }
    ]);
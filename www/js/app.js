
angular.module('starter', ['ionic',
    'ui.router',
    'localStorage.services',
    'firebase.services',
    'data.services',
    'contact.controllers',
    'renaissance.controllers',
    'events.controllers',
    'eventsDetails.controllers',
    'localization.services',
    'pascalprecht.translate',
    'dcbImgFallback',
    'sponsors.controllers',
    'uiGmapgoogle-maps',
    'maps.controllers',
    'mapGeolocation.services',
    'menu.controllers'

    ])

    .run(function($ionicPlatform,$ionicPopup,FirebaseService,LocalStorageService,LocalizationService) {
        $ionicPlatform.ready(function() {
            //check if exist data in localStorage
            if(LocalStorageService.getMenu()==null){
                var menu="menu1";
                LocalStorageService.setMenu(menu);
            }

            if(LocalStorageService.getData()==null){
                //localization
                LocalizationService.getLanguage()
                    .then(function(data){
                        LocalizationService.setLanguage(data);
                    })
                    .then(function(){
                        //if not exist check internet connection
                        if(window.Connection) {
                            //fetch data
                            if(navigator.connection.type != Connection.NONE) {
                                FirebaseService.getData(LocalStorageService.getLanguage()).then(function(data){
                                    //save data
                                    LocalStorageService.setEvents(data.$getRecord('events'));
                                    LocalStorageService.setRenaissance(data.$getRecord('renaissance'));
                                    LocalStorageService.setContacts(data.$getRecord('contacts'));
                                    LocalStorageService.setSponsors(data.$getRecord('sponsors'));
                                    LocalStorageService.setMapMarkers(data.$getRecord('map'));
                                    LocalStorageService.setData('true');
                                });
                                //alert turn on internet
                            }else{
                                $ionicPopup.alert({
                                    title:"Internet",
                                    content:"{{'content'| translate}}"
                                }).then(function(res){
                                    if(res)
                                        navigator.app.exitApp();
                                });
                            }
                        }
                    })
            }
            //update data
            if(LocalStorageService.getData()!=null){
                LocalizationService.getLanguage()
                    .then(function(data){
                        LocalizationService.setLanguage(data);
                    })
                    .then(function(){
                        if(window.Connection) {
                            if(navigator.connection.type != Connection.NONE) {
                                FirebaseService.getData(LocalStorageService.getLanguage()).then(function(data){
                                    LocalStorageService.setEvents(data.$getRecord('events'));
                                    LocalStorageService.setRenaissance(data.$getRecord('renaissance'));
                                    LocalStorageService.setContacts(data.$getRecord('contacts'));
                                    LocalStorageService.setSponsors(data.$getRecord('sponsors'));
                                    LocalStorageService.setMapMarkers(data.$getRecord('map'));
                                    LocalStorageService.setData('true');
                                });
                            }
                        }
                    })
            }

            if(window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if(window.StatusBar) {
                StatusBar.styleDefault();
            }

        });
    })

    .config(function($stateProvider, $urlRouterProvider, $translateProvider) {



        $stateProvider
            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "components/menu/menu.html",
                controller: "MenuCtrl"
            })

            .state('app.home', {
                url: "/home",
                views: {
                    'menuContent' :{
                        templateUrl: "components/home/home.html"
                    }
                }
            })

            .state('app.renaissance', {
                url: "/renaissance",
                views: {
                    'menuContent' :{
                        templateUrl: "components/renaissance/renaissance.html",
                        controller: "RenaissanceCtrl"
                    }
                }
            })

            /*.state('app.renaissance2', {
                url: "/renaissance",
                views: {
                    'menuContent' :{
                        templateUrl: "components/renaissance/renaissance2.html",
                        controller: "RenaissanceCtrl"
                    }
                }
            })*/



            .state('app.events', {
                url: "/events",
                abstract:true,
                views: {
                    'menuContent' :{
                        templateUrl: "components/events/events.html"
                    }
                }
            })

            .state('app.events.day1', {
                url: "/day1/:day",
                views: {
                    'tab-day1' :{
                        templateUrl: "components/events/events-days.html",
                        controller: "EventsCtrl"
                    }
                }
            })


            .state('app.events.day1Details', {
                url: "/day1/:description/:details/:time/:title/:img/:img2",
                views: {
                    'tab-day1' :{
                        templateUrl: "components/events/events-days-details.html",
                        controller: "EventsDetailsCtrl"
                    }
                }
            })

            .state('app.events.day2', {
                url: "/day2/:day",
                views: {
                    'tab-day2' :{
                        templateUrl: "components/events/events-days.html",
                        controller: "EventsCtrl"
                    }
                }
            })

            .state('app.events.day2Details', {
                url: "/day2/:description/:details/:time/:title/:img/:img2",
                views: {
                    'tab-day2' :{
                        templateUrl: "components/events/events-days-details.html",
                        controller: "EventsDetailsCtrl"
                    }
                }
            })

            .state('app.events.day3', {
                url: "/day3/:day",
                views: {
                    'tab-day3' :{
                        templateUrl: "components/events/events-days.html",
                        controller: "EventsCtrl"
                    }
                }
            })

            .state('app.events.day3Details', {
                url: "/day3/:description/:details/:time/:title/:img/:img2",
                views: {
                    'tab-day3' :{
                        templateUrl: "components/events/events-days-details.html",
                        controller: "EventsDetailsCtrl"
                    }
                }
            })

            .state('app.map', {
                url: "/map",
                views: {
                    'menuContent' :{
                        templateUrl: "components/map/map.html",
                        controller: 'MapCtrl'
                    }
                }
            })

            .state('app.sponsors', {
                url: "/sponsors",
                views: {
                    'menuContent' :{
                        templateUrl: "components/sponsors/sponsors.html",
                        controller: 'SponsorsCtrl'
                    }
                }
            })


            .state('app.contact', {
                url: "/contact",
                views: {
                    'menuContent' :{
                        templateUrl: "components/contact/contact.html",
                        controller: 'ContactCtrl'
                    }
                }
            })

            .state('app.help', {
                url: "/help",
                views: {
                    'menuContent' :{
                        templateUrl: "components/help/help.html"
                    }
                }
            })



        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/home');

        //localization config
        $translateProvider.translations('en', {
            app_name: "Renaissance festival",
            l:"en",
            //menu
            menu_name:"Menu",
            menu_ren_fest: "Renaissance festival",
            menu_about_ren_fest:"About renaissance",
            menu_event:"Events",
            menu_map:"Map",
            menu_sponsors:"Sponsors",
            menu_contact:"Contacts",
            menu_help:"Help",

            //tabs
            day1:"Fri 28.8.",
            day2:"Sat 29.8.",
            day3:"Sun 30.8.",
            exit:"Exit",

            //internet connection popup alert
            title:"Enable internet",
            content:"For first usage please enable internet connection.",

            //event details
            timePlace:"Time and place",
            details:"Description"
        });

        $translateProvider.translations('hr', {
            app_name: "Renesansni festival",
            l:"hr",
            //menu
            menu_name:"Izbornik",
            menu_ren_fest: "Renesansni festival",
            menu_about_ren_fest:"O renesansi",
            menu_event:"Raspored programa",
            menu_map:"Gdje se nalazimo?",
            menu_sponsors:"Sponzori",
            menu_contact:"Kontakt",
            menu_help:"Pomoć",
            //tabs
            day1:"Pet 28.8.",
            day2:"Sub 29.8.",
            day3:"Ned 30.8.",
            exit:"Izlaz",


            //internet connection popup alert
            title:"Uključite internet",
            content:"Prilikom prvog korištenja molimo vas da uključite internet.",

            //event details
            timePlace:"Vrijeme i mjesto:",
            details:"Opis"

        });
        $translateProvider.preferredLanguage("en");
        $translateProvider.fallbackLanguage("en");
    })


// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'firebase', 'ui.utils.masks', 'ngAnimate', 'toaster'])

.value('GRACE_PERIOD', 3000)

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.itens', {
    url: '/itens',
    views: {
      'tab-itens': {
        templateUrl: 'templates/tab-itens.html',
        controller: 'ItensCtrl'
      }
    }
  })
  .state('tab.itens.item', {
    url: '/item',
    views: {
      'tab-itens@tab': {
        'templateUrl': 'templates/tab-item.html',
        'controller': 'ItemAddCtrl'
      }
    }
  })
  .state('tab.itens.item.edit', {
    url: '/:id',
    views: {
      'tab-itens@tab': {
        'templateUrl': 'templates/tab-item.html',
        'controller': 'ItemEditCtrl'
      }
    }
  });

  $urlRouterProvider.otherwise('/tab/itens');

});

(function() {
  function config($stateProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });
    $stateProvider
      .state('home', {
        url: '/',
        controller: 'HomeCtrl as home',
        templateUrl: '/templates/home.html'
      })
      .state('roomChat', {
        url: '/room/:roomId',
        controller: 'MessageCtrl as chat',
        templateUrl: '/templates/roomChat.html'
      });

  }
  angular
  .module('dragonSlayerChat', ['ui.router', 'firebase', 'ui.bootstrap', 'ngCookies'])
  .config(config);
})();

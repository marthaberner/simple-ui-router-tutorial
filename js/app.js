var app = angular.module("not-angry-angular", ['ui.router'])

app.config(function ($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/partials/home.html'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'partials/about.html',
      authenticate: true
    })
    .state('about.potter', {
      url: "/potter",
      templateUrl: 'partials/list.html',
      controller: function($scope) {
            $scope.list = ["Draco Malfoy", "Ernie Macmillan", "Irma Pince", "Rufus Scrimgeour "];
          },
      })
      .state('about.rings', {
        url: "/rings",
        templateUrl: 'partials/list.html',
        controller: function($scope) {
              $scope.list = ["Frodo Baggins", "Peregrin Took", "Sauron", "Gollum", "Aragorn"];
            }
        })
        .state('not-authenticated', {
          url: "/",
          template: "<h1>Oopsy! Your random number was less than 5. Try again!"
        })
})

app.run(function ($rootScope, $state, AuthService) {
  $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
    if (toState.authenticate && !AuthService.isAuthenticated()) {
      // user is NOT authenticated
      $state.transitionTo("not-authenticated");
      event.preventDefault();
    }

  })
})

var app = angular.module("not-angry-angular", ['ui.router'])

app.config(function ($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/partials/home.html'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'partials/about.html'
    })
    .state('about.potter', {
      url: "/potter",
      templateUrl: 'partials/list.html',
      controller: function($scope) {
            $scope.list = ["Draco Malfoy", "Ernie Macmillan", "Irma Pince", "Rufus Scrimgeour "];
          }
      })
})

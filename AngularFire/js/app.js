   // Initialize Firebase
var config = {
  apiKey: "AIzaSyActdxDK2afIKqXSeW5KXvzsRieCJYSjMc",
  authDomain: "iniciotg.firebaseapp.com",
  databaseURL: "https://iniciotg.firebaseio.com",
  storageBucket: "iniciotg.appspot.com",
  messagingSenderId: "833733951366"
};
firebase.initializeApp(config);

var app = angular.module('myApp', ['ngRoute', 'firebase']);

  app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    controller: 'LoginController',
    templateUrl: 'views/login.html'
  })
  .when('/menu', {
    templateUrl: 'views/menu.html'
  })
  .when('/list', {
    controller: 'ListController',
    templateUrl: 'views/list.html'
  })
  .when('/add', {
    controller: 'AddController',
    templateUrl: 'views/add.html'
  })
  .when('/edit/:id', {
    controller: 'EditController',
    templateUrl: 'views/edit.html'
  })
  .otherwise({
    redirectTo: '/'
  });
});

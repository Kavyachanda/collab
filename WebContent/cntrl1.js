var app = angular.module('myApp', ['ngRoute','regmyApp','blogapp']);

app.config(function($routeProvider) {
  $routeProvider

   .when('/register', {
    templateUrl : 'html/register.html',
    controller  : 'Registercontroller'
 })
 
  .when('/login', {
    templateUrl : 'html/login.html',
    controller  : 'Logincontroller'
 })
 
  .when('/blog', {
    templateUrl : 'html/blog.html',
    controller  : 'Blogcontroller'
 })
 
  .when('/forum', {
    templateUrl : 'html/forum.html',
    controller  : 'Forumcontroller'
 })


  .otherwise({redirectTo: '/'});
});





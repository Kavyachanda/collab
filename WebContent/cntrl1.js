
var app = angular.module('myApp', ['ngRoute','ngCookies','regmyApp','blogapp','forumApp','friendapp','jobApp','app1','chatApp','iforumApp','iblogApp']);

app.config(function($routeProvider,$locationProvider) {
  $routeProvider

   .when('/register', {
    templateUrl : 'html/register.html',
    controller  : 'Registercontroller'
 })
 
  .when('/login', {
    templateUrl : 'html/login.html',
    controller  : 'LoginController',
    controllerAs:'vm'
 })
 .when('/home', {
    templateUrl : 'home.html',
    controller  : 'LoginController',
    controllerAs:'vm'
 })
 
  .when('/blog', {
    templateUrl : 'html/blog.html',
    controller  : 'Blogcontroller'
 })
 
  .when('/forum', {
    templateUrl : 'html/forum.html',
    controller  : 'Forumcontroller'
 })
 
  .when('/job', {
    templateUrl : 'html/viewjob.html',
    controller  : 'Jobcontroller'
 })

 .when('/chat', {
    templateUrl : 'html/chat.html',
    controller  : 'Registercontroller'
 })
 
  .when('/Userprofile', {
    templateUrl : 'html/Userprofile.html',
    controller  : 'ChatController'
 })
 
 .when('/newrequests', {
	templateUrl: 'html/newrequests.html', 
	controller: 'myfrndscntrl'
})
		
.when('/myfriends', {
	templateUrl: 'html/myfriends.html', 
 	controller: 'myfrndscntrl'
})
	
.when('/individualforum', {
	templateUrl: 'html/IndividualForum.html', 
 	controller: 'commentcntrl'
})

.when('/individualblog', {
	templateUrl: 'html/IndividualBlog.html', 
 	controller: 'bcommentcntrl'
})
	
.when('/friend', {
    templateUrl : 'html/friend.html',
    controller  : 'Friendcontroller'
});


console.log("route");   
});
run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];
function run($rootScope, $location, $cookieStore, $http) {
    // keep user logged in after page refresh
    $rootScope.globals = $cookieStore.get('globals') || {};
  
    if ($rootScope.globals.currentUser) {
        $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
    }

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        // redirect to login page if not logged in and trying to access a restricted page
        var restrictedPage = $.inArray($location.path(), ['/login', '/register','/home','/jobs']) === -1;
        var loggedIn = $rootScope.globals.currentUser;
        if (restrictedPage && !loggedIn) {
            $location.path('/login');
        }
    });
}
/*
var app = angular.module("myApp", []);

app.controller('Registercontroller', function($scope) {
   $scope.submit = function(){
      $scope.username = " ";
      $scope.password = " ";
      $scope.Email = " ";
      $scope.phone = " ";
   }
   
});*/

var app = angular.module('regmyApp',[]);
app.controller('Registercontroller', [ '$scope', '$http', function($scope, $http) {
	var BASE_URL = 'http://localhost:8081/collabbackend';

	console.log("registering");
	$scope.submit = function() {
		
		console.log("done:");
	

		$scope.users = {	
			
			username : $scope.username,
			password:$scope.password,
			confirmpassword:$scope.confirmpassword,
			email: $scope.email,
			phone:$scope.phone,
			
		}
		$http({
			method : 'POST',
			url : BASE_URL + '/register',
			data : $scope.users
		}).success(function(data, status, headers, config) {
			$scope.username='';
			$scope.password='';
			$scope.confirmpassword='';
			$scope.email='';
			$scope.phone='';
			
		
		})
		$http({
			method : 'GET',
			url : BASE_URL + '/users',
			data : $scope.users
		}).success(function(data, status, headers, config) {
			$scope.username='';
			$scope.password='';
			$scope.confirmpassword='';
			$scope.email='';
			$scope.phone='';
			
		
		})
		
		
		.error(function(data,status,headers,config){
			alert("error");
		});
	};
}]);
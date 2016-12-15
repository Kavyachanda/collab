var app=angular.module('app1',[]);
app.controller('myfrndscntrl',['$scope','$http',function($scope,$http){
	console.log("my frind controller");
	var BASE_URL = 'http://localhost:8081/collabbackend';
	console.log("getting friends");
	$scope.getmyfriends=function(){
		$http({
			method : 'GET',
			url : BASE_URL+'/myfriends'
		}).success(function(data, status, headers, config) {
			$scope.myfriends=data;
			//alert(data); 
		}).error(function(data, status, headers, config) {
			alert("Error");
		});
	}
	$scope.getsnewrequests=function(){
		console.log("getting requests");
		$http({
			method : 'GET',
			url : BASE_URL+'/newrequests'
		}).success(function(data, status, headers, config) {
			$scope.newrequest=data;
			//alert(data); 
		}).error(function(data, status, headers, config) {
			alert("Error");
		});
	}
	console.log("my frind accepted");
	$scope.accept=function(fid){
		$http({
			method : 'POST',
			url : BASE_URL+'/acceptrequest/'+fid
			});
	}
	$scope.reject=function(fid){
		$http({
			method : 'POST',
			url : BASE_URL+'/rejectrequest/'+fid
		});
	}
}])
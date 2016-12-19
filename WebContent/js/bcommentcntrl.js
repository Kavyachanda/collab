console.log('app');
var app = angular.module('iblogApp',[]);
app.controller('bcommentcntrl', [ '$scope', '$http','$rootScope', function($scope, $http,$rootScope) {
	var BASE_URL = 'http://localhost:8081/collabbackend';
	$scope.iblog=$rootScope.individualblogs;
	console.log('individualblogs');
	$scope.submit=function(id){
		$scope.blogcomment={
				comment:$scope.comment
		}
		console.log('inside iblog');
		$http({
			
			method:'POST',
			url:BASE_URL+'/commentblog/'+id ,
			data:$scope.blogcomment
		}).success(function(data, status, headers, config) {
			$scope.comment='';
			console.log('blogcomments')
		})
	}
	$scope.getcomment=function(id){
		$http({
			method:'GET',
			url:BASE_URL+'/getblogcomment/'+id
		}).success(function(data,status,headers,config){
			$scope.comments=data;
		})
	}
	$scope.getuser=function(id){
		$http({
			method: 'GET',
			url: BASE_URL+'/oneuser/'+id
		}).success(function(data,status,headers,config){
			$scope.users=data;
		})
	}
}])
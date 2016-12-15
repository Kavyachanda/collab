console.log('app');
var app = angular.module('iforumApp',[]);
app.controller('commentcntrl', [ '$scope', '$http','$rootScope', function($scope, $http,$rootScope) {
	var BASE_URL = 'http://localhost:8081/collabbackend';
	$scope.iforum=$rootScope.individualforums;
	console.log('individualforums');
	$scope.submit=function(id){
		$scope.forumcomment={
				comment:$scope.comment
		}
		console.log('inside iforum');
		$http({
			
			method:'POST',
			url:BASE_URL+'/commentforum/'+id ,
			data:$scope.forumcomment
		}).success(function(data, status, headers, config) {
			$scope.comment='';
			console.log('forumcomments')
		})
	}
	$scope.getcomment=function(id){
		$http({
			method:'GET',
			url:BASE_URL+'/getforumcomment/'+id
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
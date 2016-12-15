
/*var app = angular.module("loginapp", []);

app.controller('Logincontroller', function($scope) {
  
      $scope.username = "kavya ";
      $scope.password = " kavya";
  
});



*/ 
//var app = angular.module('loginapp',[]);
    app.controller('LoginController', LoginController);

    LoginController.$inject = ['$location',  'AuthenticationService','$rootScope'];
    console.log("logincntrl");
 
    function LoginController($location, AuthenticationService,$rootScope) {
	 console.log("login controller")
        var vm = this;
 
        vm.login = login;
        vm.logout = logout;

       /* (function initController() {
        	console.log("reset")
            // reset login status
            AuthenticationService.ClearCredentials();
        })();*/
 
        function login() {
           
            console.log("login func")
             AuthenticationService.Login(vm.username, vm.password, function (response) {	 
                if (response.success) {
               console.log("setcred")
               $rootScope.username=vm.username;
              $rootScope.islogged=true;
                	AuthenticationService.SetCredentials(vm.username, vm.password);
                    $location.path('#/');
                  $rootScope.islogged=true;
                	
                } else {
                	console.log("error")
                  //  FlashService.Error(response.message);
                	
                    alert("error")
                }
            });
        };
        function logout(){
        	console.log("logout")
        	AuthenticationService.Logout(function(response){
        		if(response.success){
        			AuthenticationService.ClearCredentials();
        			$location.path('#/');
        			$rootScope.islogged=false;
        			
        		}else{
        			alert("error")
        		}
        	})
        }
    }
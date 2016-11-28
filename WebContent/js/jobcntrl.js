var app = angular.module('myjobApp',[]);

app.controller('jobController',['JobService',function(JobService){
	
		var self = this;
		self.job = {id:'',title:'',company:'',jobdetails:'',doc:'',lastdate:'',userid:''};
	    self.jobs = []
		self.getAllJobs = function(){
		
		console.log("calling all jobs");
		JobService.getAllJobs()
				  .then(
						  function(data){
							  self.jobs = data;
						  }
				  )
	
	};
	self.getAllJobs();
	
}]);
var allUsersControllerApp = angular.module("allUsersControllerApp", []);
 
allUsersControllerApp.controller("allUsersController",function($scope, $window, $http){

	$scope.users = new Array();
	$scope.init = function(){
		var response = $http.get("users");
		response.success(function(data, status, headers, config) {
			 $scope.users = data;
		 });
		 response.error(function(data, status, headers, config) {
			 $window.alert("Error in search users list.");
		 });
	 }
 
	 $scope.deleteUser = function(id){
		 if($window.confirm("Do you really want to delete this user?")){
			 var response = $http.delete("delete/" + id);
			 response.success(function(data, status, headers, config) {
				 $scope.init();
			 });
			 response.error(function(data, status, headers, config) {
				 $window.alert(data);
			 });
		 }
	 }
});
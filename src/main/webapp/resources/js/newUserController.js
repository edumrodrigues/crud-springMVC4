var newUserControllerApp = angular.module("newUserControllerApp", []);

newUserControllerApp.controller("newUserController", function($scope, $window, $http) {

	$scope.name = null;
	$scope.userName = null;
	$scope.password = null;
	$scope.active = null;
	var STATUS_CREATED = 201;

	$scope.saveUser = function() {
		var user = new Object();
		user.name = $scope.name;
		user.userName = $scope.userName;
		user.password = $scope.password;
		user.active = $scope.active;

		var response = $http.post("save", user);
		response.success(function(data, status, headers, config) {
			if (status === STATUS_CREATED) {
				$scope.name = null;
				$scope.userName = null;
				$scope.password = null;
				$scope.active = null;
				$window.alert("User created successfully !");
			} 
			else
				$window.alert("Erro on create User.");
		});
		response.error(function(data, status, headers, config) {
			$window.alert("Erro on create User.");
		});
	};
});
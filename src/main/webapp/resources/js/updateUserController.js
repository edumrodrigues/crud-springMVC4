var updateUserControllerApp = angular.module("updateUserControllerApp", []);

updateUserControllerApp.controller("updateUserController", function($scope, $window, $http) {
	 $scope.idUser = null;
	 $scope.name = null;
	 $scope.userName = null;
	 $scope.password = null;
	 $scope.active = null;
	 var STATUS_OK = 200;

	$scope.updateUser = function() {
		var user = new Object();
		user.id = $scope.idUser;
		user.name = $scope.name;
		user.userName = $scope.userName;
		user.password = $scope.password;
		user.active = $scope.active;

		var response = $http.post(_contextPath+"/user/update", user);
		response.success(function(data, status, headers, config) {
			if (status === STATUS_OK) {
				$window.alert("User updated successfuly!");
				window.location.href = _contextPath+"/user/users.html";
			} else {
				$window.alert("Error on update user.");
			}
		});

		response.error(function(data, status, headers, config) {
			$window.alert("Error on update user.");
		});
	};
});
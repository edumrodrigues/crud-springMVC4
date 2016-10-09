<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE>
<html ng-app="newUserControllerApp">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>New User</title>
<style type="text/css">
label {
	display: inline-block;
	width: 90px;
}
</style>
<script type="text/javascript" src="../resources/js/angular.min.js"></script>
<script type="text/javascript"
	src="../resources/js/newUserController.js"></script>

</head>
<body>

	<form ng-controller="newUserController">
		<h2>New User</h2>
		<br /> <label for="input-name">Name:</label> <input type="text"
			id="input-name" style="width: 220px;" ng-model="name" /> <br />
		<br /> <label for="input-login">User Name:</label> <input type="text"
			id="input-user-name" style="width: 120px;" ng-model="userName" /> <br />
		<br /> <label for="input-password">Password:</label> <input
			type="password" id="input-password" style="width: 120px;"
			ng-model="password" /> <br />
		<br /> <label for="input-active">Active:</label> <input
			type="checkbox" id="input-active" ng-model="active" /> <br />
		<br />

		<p>
			<a href="../">Back</a> <input type="button" value="Save"
				ng-click="saveUser()" />
		</p>
	</form>
</body>
</html>
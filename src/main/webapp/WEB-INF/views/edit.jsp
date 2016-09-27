<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<!DOCTYPE>
<html ng-app="updateUserControllerApp">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Update User</title>
<style type="text/css">
label {
	display: inline-block;
	width: 90px;
}
</style>
<script type="text/javascript"
	src="<spring:url value="/resources/js/angular.min.js"/>"></script>
<script type="text/javascript"
	src="<spring:url value="/resources/js/updateUserController.js"/>"></script>

</head>
<body>
	<form ng-controller="updateUserController">

		<h2>Update User</h2>
		<br /> <label for="input-id">ID:</label> <input type="text"
			id="input-id" style="width: 80px;" ng-model="id"
			readonly="readonly" ng-init="codigo='${userModel.id}'" /> <br />
		<br /> <label for="input-nome">Name:</label> <input type="text"
			id="input-name" style="width: 220px;" ng-model="name"
			ng-init="nome='${userModel.name}'" /> <br />
		<br /> <label for="input-user-name">User Name:</label> <input type="text"
			id="input-user-name" style="width: 120px;" ng-model="userName"
			ng-init="login='${userModel.userName}'" /> <br />
		<br /> <label for="input-password">Password:</label> <input type="password"
			id="input-password" style="width: 120px;" ng-model="password"
			ng-init="password='${userModel.password}'" /> <br />
		<br /> <label for="input-active">Active:</label> <input
			type="checkbox" id="input-active" ng-model="active"
			ng-init='${userModel.active ? "active=true" : ""}'
			ng-true-value="true" ng-false-value="" /> <br />
		<br />

		<p>
			<a href="../users.html">Back</a> <input type="button"
				value="Save" ng-click="updateUser()" />
		</p>
	</form>
</body>
</html>
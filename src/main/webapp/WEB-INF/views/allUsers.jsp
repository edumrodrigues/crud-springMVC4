<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE>
<html ng-app="allUsersControllerApp">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>All Users</title>

<script type="text/javascript" src="../resources/js/angular.min.js"></script>
<script type="text/javascript" src="../resources/js/allUsersController.js"></script>
</head>
<body>
	<table ng-controller="allUsersController"  data-ng-init="init()">
     <thead>
       <tr>
         <th>ID</th>
         <th>Name</th>
         <th>User Name</th>
         <th>Password</th>
         <th>Active</th>
         <th></th>
         <th></th>
       </tr>
     </thead>
     <tbody>
       <tr ng-repeat="user in users">
 
         <td>{{user.id}}</td>
         <td>{{user.name }}</td>
         <td>{{user.userName}}</td>
         <td>{{user.password}}</td>
         <td>{{user.active ? "Yes" : "No"}}</td>
         <td><a  ng-href="update.html/{{user.id}}" >Edit</a></td>
         <td><a href="#" ng-click="deleteUser(user.id)">Delete</a></td>         
       </tr>
     </tbody>
   </table>
 
   <a href= "../">Back</a>
 
</body>
</html>
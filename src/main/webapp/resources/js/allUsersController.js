var allUsersControllerApp = angular.module("allUsersControllerApp", []);
 
allUsersControllerApp.controller("allUsersController",function($scope, $window, $http){
 
	/* CRIANDO UM ARRAY PARA OS REGISTROS QUE VÃO SER RETORNADOS PELO SPRING */
	 $scope.users = new Array();
 
 
	 $scope.init = function(){
		 /*
			 * CHAMA O MÉTODO consultarTodos DO CONTROLLER GERENCIADO PELO
			 * SPRING
			 */
		 var response = $http.get("users");
 
		 response.success(function(data, status, headers, config) {
 debugger;
			 /*
				 * SETA OS REGISTROS QUE FORAM RETORNADOS DO CONTROLLER DO
				 * SPRING, ESSE REGISTROS VÃO PREENCHER OS CAMPOS DA TABELA DA
				 * PÁGINA allUsers.jsp ATAVÉS DO ng-repeat do AngularJS
				 */
			 $scope.users = data;
 
		 });
 
		 response.error(function(data, status, headers, config) {
			 debugger;
			 /* SE OCORRER ERRO NÃO TRATADO IREMOS MOSTRA EM MENSAGEM */
			 $window.alert(data);
 
		 });
	 }
 
	 /* FUNÇÃO PARA EXCLUIR UM REGISTRO */	 
	 $scope.deleteUser = function(id){
 
		 if($window.confirm("Do you really want to delete this user?")){
 
			 /* CHAMA O MÉTODO DO SPRING PARA EXCLUIR UM REGISTRO */
			 var response = $http.delete("delete/" + id);
 
			 response.success(function(data, status, headers, config) {
 
				 /* RECARREGANDO OS REGISTROS CADASTRADOS */
				 $scope.init();
 
			 });
			 response.error(function(data, status, headers, config) {
				 /* SE OCORRER ERRO NÃO TRATADO IREMOS MOSTRA EM MENSAGEM */
				 $window.alert(data);
 
			 });
		 }
	 }
});
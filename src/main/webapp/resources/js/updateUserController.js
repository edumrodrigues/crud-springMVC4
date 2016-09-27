var updateUserControllerApp = angular.module("updateUserControllerApp",
		[]);

updateUserControllerApp.controller("updateUserController", function($scope, $window, $http) {

	/* DEFININDO O MODELO PARA O NOSSO FORMULÁRIO */
	$scope.id = null;
	$scope.name = null;
	$scope.userName = null;
	$scope.password = null;
	$scope.active = null;

	$scope.updateUser = function() {

		/* DEFINI O OBJETO QUE VAI SER ENVIADO VIA AJAX PELO ANGULARJS */
		var user = new Object();
		user.id = $scope.id;
		user.name = $scope.name;
		user.userName = $scope.userName;
		user.password = $scope.password;
		user.active = $scope.active;

		/* EXECUTA O POST PARA ALTERAR O REGISTRO */
		var response = $http.post("../update", usuarioModel);

		response.success(function(data, status, headers, config) {
			if (data.codigo == 1) {
				$window.alert(data.message);

				/* REDIRECIONA APÓS ALTERARMOS O REGISTRO */
				window.location.href = "../users.html";

			} else {
				/* MOSTRA O ERRO TRATO PELO SPRING (OBJETO ResultadoModel) */
				$window.alert(data.message);

			}
		});

		response.error(function(data, status, headers, config) {
			/* SE OCORRER ERRO NÃO TRATADO IREMOS MOSTRA EM MENSAGEM */
			$window.alert(data);
		});
	};
});
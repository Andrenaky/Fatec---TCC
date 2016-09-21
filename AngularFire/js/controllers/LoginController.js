app.controller('LoginController', ['$scope', '$firebaseAuth', '$location', function($scope, $firebaseAuth, $location){

  	$scope.entrar = function(){

      var email = $scope.user.email;
      var senha = $scope.user.senha;
      var auth = $firebaseAuth();

      auth.$signInWithEmailAndPassword(email, senha).then(function(){
        $location.path('/menu');
      }).catch(function(error){
        console.log(error);
      });
    };
}]);

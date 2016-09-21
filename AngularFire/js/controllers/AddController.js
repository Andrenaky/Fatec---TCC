app.controller('AddController', ['$scope', '$firebaseArray', '$location', function($scope, $firebaseArray, $location){

  $scope.addProduct = function() {
    var ref = firebase.database().ref('products');
    var product = $firebaseArray(ref);
    product.$add({
      sku: $scope.product.sku,
      description: $scope.product.description,
      price: $scope.product.price
    });
    $location.path('/list');
  };

}]);
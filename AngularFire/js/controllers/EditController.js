app.controller('EditController', ['$scope','$location', '$routeParams', '$firebaseObject', function($scope, $location, $routeParams, $firebaseObject){

    var ref = firebase.database().ref('products/' + $routeParams.id);
    $scope.product = $firebaseObject(ref);

    $scope.editProduct = function() {
        $scope.product.$save({
            sku: $scope.product.sku,
            description: $scope.product.description,
            price: $scope.product.price
        });
        $scope.edit_form.$setPristine();
        $scope.product = {};
        $location.path('/list');

    };

}]);
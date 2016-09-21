app.controller('ListController', ['$scope', '$firebaseArray', '$firebaseObject', function($scope, $firebaseArray, $firebaseObject){
  //var products = new Firebase(FBURL);
  	
  //console.log($firebaseArray);
  	var ref = firebase.database().ref().child('products');
  	$scope.products = $firebaseArray(ref);

  	$scope.removeProduct = function(id) {
    	var ref = firebase.database().ref('products/' + id);
    	var product = $firebaseObject(ref)
    	product.$remove(id);
   	};
  	
}]);
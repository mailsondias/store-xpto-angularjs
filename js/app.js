(function(){

	'use strict'

	var app = angular.module('gemStore', ['store-products'])

	app.controller('StoreController', ['$scope','$http', function($scope, $http){
		var store = $scope;

		store.products = [];

		$http.get('helpers/products.json').success(function(data){
			store.products = data
		})
	}])

})()
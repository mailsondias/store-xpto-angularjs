(function(){

	'use strict'

	var app = angular.module('store-products', [])

	app.controller('ReviewController', function(){
		this.review = {}

		this.addReview = function(product){
			this.review.createdOn = Date.now()
			product.reviews.push(this.review)
			this.review = {}
		}
	})

	app.directive('productTitle', function(){
		return {
			restrict: 'E',
			templateUrl: 'partials/product-title.html'
		}
	})

	app.directive('productPanels', function(){
		return {
			restrict: 'E',
			templateUrl: 'partials/product-panels.html',
			controller: function($scope){
				this.tab = 1

				this.setTab = function(newTab){
					this.tab = newTab
				}

				this.isSet = function(checkTab){
					return this.tab	=== checkTab
				}
			},
			controllerAs: 'panels'
		}
	})

	app.directive('productGallery', function(){
		return {
			restrict: 'E',
			templateUrl: 'partials/product-gallery.html',
			controller: function($scope){
				this.current = 0

				this.setCurrent = function(v){
					this.current = v || 0
				}
			},
			controllerAs: 'gallery'
		}
	})

	app.directive('productDescription', function(){
		return {
			restrict: 'E',
			templateUrl: 'partials/product-description.html'
		}
	})

	app.directive('productSpecs', function(){
		return {
			restrict: 'A',
			templateUrl: 'partials/product-specs.html'
		}
	})

	app.directive('productReviews', function(){
		return {
			restrict: 'E',
			templateUrl: 'partials/product-reviews.html'
		}
	})

})()
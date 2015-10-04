'use strict';

/**
 * @ngdoc function
 * @name shoppinglistSimpleApp.controller:ListsCtrl
 * @description
 * # ListsCtrl
 * Controller of the shoppinglistSimpleApp
 */
angular.module('shoppinglistSimpleApp')
	.controller('ListsCtrl', function ($scope, dbConnection) {
		$scope.items = dbConnection.getItems();

		$scope.addItem = function () {

			$scope.items.$add({
				content: $scope.formItem
			});

			$scope.formItem = '';
		};

		$scope.removeItem = function (index) {
			$scope.items.splice(index, 1);
		};
	});
angular.module('tes.xperiment.calc', [])
	.controller('CalcController', ['$scope', function($scope) {
		$scope.displayNumber = 0;
		$scope.mem1 = 0;
		$scope.mem2 = 0;
		$scope.multiplier = 10;
		$scope.action = '';

		$scope.actionEq = function() {
			$scope.actionPlus(1); // TODO: replace with multiple actions
			$scope.postCmd();
		};
		$scope.postCmd = function() {
			$scope.mem1 = 0;
			$scope.displayNumber = $scope.mem2;
			$scope.multiplier = 10;
		};
		$scope.actionCe = function() {
			// $scope.displayNumber = 0;
			$scope.mem2 = 0;
			$scope.postCmd();
		};
		$scope.actionPlus = function(sign) {
			$scope.mem1 = parseFloat("" + $scope.displayNumber);
			$scope.mem2 = $scope.mem1 + $scope.mem2*sign;
			$scope.postCmd();
		};
		$scope.clickNum = function(num) {
			$scope.mem1 = $scope.mem1*$scope.multiplier + num;
			$scope.displayNumber = $scope.mem1;
		};
		$scope.clickDot = function() {
			$scope.multiplier = 0.1;
		};
}]);
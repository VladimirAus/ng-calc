// Click number, +/-, . > add to mem1
// Click operation
//	- performs {mem2 operation mem1}
//	- mem2 = mem1
//	- saves operarion
angular.module('tes.xperiment.calc', [])
	.controller('CalcController', ['$scope', function($scope) {
		$scope.displayNumber = "0";
		$scope.mem1 = "0";
		$scope.mem2 = "0";
		$scope.operation = "";
		// $scope.action = '';

		$scope.actionEq = function() {
			$scope.actionPlus(1); // TODO: replace with multiple actions
			$scope.postCmd();
			$scope.operation = "";
		};
		$scope.postCmd = function() {
			$scope.mem1 = "0";
			$scope.displayNumber = $scope.mem2;
			// $scope.multiplier = 10;
		};
		$scope.actionCe = function() {
			// $scope.displayNumber = 0;
			$scope.mem2 = "0";
			$scope.postCmd();
		};
		$scope.performAction = function(operation) {
			// $scope.mem1 = parseFloat("" + $scope.displayNumber);
			// $scope.mem2 = $scope.mem1 + $scope.mem2*sign;
			if ($scope.operation != "") {
				if ((operation == "+") || (operation == "-") || (operation == "*") || (operation == "/")
					|| (operation == "")
					) {
					var evl = 'parseFloat("'+$scope.mem2 +'")'+ $scope.operation +'parseFloat("'+ $scope.mem1+'")';
					console.log(evl);
					$scope.mem2 = "" + eval(evl);

				}
			}
			else {
				if (operation != "") {
					$scope.mem2 = $scope.mem1;
				}
			}

			/*if ((operation == "+") || (operation == "-") || (operation == "*") || (operation == "/")) {
				$scope.mem1 = "0";
			}
			else if (operation == "") {
				$scope.postCmd();
			}*/	

			$scope.postCmd();
			$scope.operation = operation;
		};
		$scope.clickNum = function(num) {
			$scope.mem1 = $scope.mem1 + num;
			$scope.displayNumber = $scope.mem1;
		};
		$scope.hasDot = function() {
			return ($scope.displayNumber.indexOf(".") > 0);
		};
		$scope.clickDot = function() {
			if (!$scope.hasDot()) {
				$scope.mem1 += ".";
			}
		};
		$scope.getDisplayNumber = function() {
			return parseFloat($scope.displayNumber);
		};
}]);
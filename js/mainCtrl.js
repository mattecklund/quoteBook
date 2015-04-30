var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, dataService){
	// console.log('in the controller');
	$scope.quotations = dataService.getData();
	// console.log($scope.quotations);
	$scope.filterQuote = {};
	$scope.deletable;
	$scope.filterable;
	$scope.addable;

	$scope.quoteOptions = [
	{label: 'Text', value: 'text'}, 
	{label: 'Author', value: 'author'}
	];

	$scope.newQuote;
	$scope.addQuote = function(){
		// console.log($scope.newQuote);
		dataService.addData($scope.newQuote);

	}

	$scope.deleteQuote = function(quote){
		dataService.removeData(quote);
	}

	$scope.deleteQuotesOn = function(){
		$scope.deletable = !$scope.deletable;
		$scope.filterable = false;
		$scope.addable = false;
	}
	$scope.filterQuotesOn = function(){
		$scope.filterable = !$scope.filterable;
		$scope.deletable = false;
		$scope.addable = false;
	}
	$scope.addQuotesOn = function(){
		$scope.addable = !$scope.addable;
		$scope.deletable = false;
		$scope.filterable = false;
	}
});
var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, dataService){
	// console.log('in the controller');
	$scope.quotations = dataService.getData();
	// console.log($scope.quotations);
	$scope.filterQuote = {};

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
});
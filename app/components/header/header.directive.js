var header = app.directive('header.directive', [])
header.directive('headerDirective', function(){
	return {
		$scope : {},
		restrict : 'E',
		templateUrl : 'app/components/header/header.tpl.html'
	}
});

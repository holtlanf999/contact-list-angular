var nav = app.directive('nav.directive', [])
nav.directive('navDirective', function(){
	return {
		$scope : {},
		restrict : 'E',
		templateUrl : 'app/components/nav/nav.tpl.html'
	}
});
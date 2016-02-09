var footer = app.directive('footer.directive', [])
footer.directive('footerDirective', function () {
	return {
		$scope : {},
		restrict : 'E',
		templateUrl : 'app/components/footer/footer.tpl.html'
	}
});
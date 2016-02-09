var informationDirective = app.directive('contact.information.directive', [])

	informationDirective.directive('contactInformationDirective', function () {
		return {
			restrict : 'E',
			templateUrl : 'app/components/contact.information/contact.information.tpl.html'
		}
	});

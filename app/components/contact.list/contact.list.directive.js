var contactList = app.directive('contact.list.directive', [])

contactList.directive('contactListDirective', function () {
		var listContacts = this;
	return {
		restrict : 'E',
		templateUrl : 'app/components/contact.list/contact.list.tpl.html'
	}
})

informationDirective.controller('contactInformationController', ['contactFactory', function (contactFactory) {
	var self = this;
	self.contact = contactFactory.userData;
}]);
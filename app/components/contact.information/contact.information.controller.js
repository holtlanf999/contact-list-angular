informationDirective.controller('contactInformationController', ['contactFactory', function (contactFactory) {
	var self = this;
	self.contact = contactFactory.userData;
	self.store = contactFactory.storeUser;
	self.save = contactFactory.saveContact;
	// console.log(self.save);
}]);
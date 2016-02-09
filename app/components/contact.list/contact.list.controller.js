contactList.controller('contactListController', ['contactFactory', function (contactFactory) {
	var self = this;
	self.contact = contactFactory.userData;
	console.log(self.contact.name);
}]);
contactList.controller('contactListController', ['contactFactory', function (contactFactory) {
	var self = this;
	self.contact = contactFactory.userData;
}]);
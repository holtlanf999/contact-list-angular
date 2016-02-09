app.factory('contactFactory', [function () {
	var contactFactory = {};
	contactFactory.userData = {
		name : '',
		phone : '',
		email : '',
		address : '',
		nick : ''
	};
	contactFactory.storeUser = {};

	return contactFactory;
}]);



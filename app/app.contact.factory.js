app.factory('contactFactory', [function () {
	var contactFactory = {};
	contactFactory.userData = {
		name : 'Lanford',
		phone : '0000-0000',
		email : 'email@email',
		address : 'My original address',
		nick : 'My nickname'
	};
	
	var store = [];
	var data = contactFactory.userData;

	contactFactory.saveContact = function() {
		store.push(data);
		console.log(store);
		return store;
	}

	return contactFactory;
}]);



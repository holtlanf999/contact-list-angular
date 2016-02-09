app.config(['$stateProvider', function($stateProvider) {
   $stateProvider
   .state('add.contact', {
        url: "/addcontact/",
        templateUrl: 'app/components/add.contact/add.contact.html'
    })
}]);
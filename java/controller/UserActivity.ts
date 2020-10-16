class UserActivity{

    constructor(view) {

        view.controller("UserController", function($scope, $routeParams, $route, $http) {

            $scope.userListener = ["Frank", "Bob"];

        });

    }

}
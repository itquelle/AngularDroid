var UserActivity = /** @class */ (function () {
    function UserActivity(view) {
        view.controller("UserController", function ($scope, $routeParams, $route, $http) {
            $scope.userListener = ["Frank", "Bob"];
        });
    }
    return UserActivity;
}());

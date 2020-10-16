var AboutActivity = /** @class */ (function () {
    function AboutActivity(view) {
        view.controller("AboutController", function ($scope, $http, $location, $routeParams) {
            // :id = $routeParams.id
            $scope.MeinName = "Rudi " + $routeParams.id;
        });
    }
    return AboutActivity;
}());
var CryptoListActivity = /** @class */ (function () {
    function CryptoListActivity(view) {
        view.controller("CryptoListController", function ($scope, $http, $location) {
            $scope.PageTitle = "CryptoCompare List";
            $http.get('app/test/').then(function (response) {
                $scope.cryptoListener = response.data;
            });
        });
    }
    return CryptoListActivity;
}());
var HomeActivity = /** @class */ (function () {
    function HomeActivity(view) {
        view.controller("HomeContoller", function ($scope, $http) {
            $scope.page_title = "Home";
        });
    }
    return HomeActivity;
}());
/// <reference path="../app/typings/globals/jquery/index.d.ts" />
var ProfileActivity = /** @class */ (function () {
    function ProfileActivity(view) {
        var _this = this;
        this.view = view;
        this.view.controller("ProfileController", function ($scope, $http, $routeParams) {
            $scope.profile_id = $routeParams.id;
            $scope.testFunction = function (a, b) {
                var person_age = a + b;
                alert($scope.profile_id + " ist " + person_age + " Jahre alt");
            };
            _this.onDone();
        });
        this.getProfileList();
    }
    ProfileActivity.prototype.getProfileList = function () {
        this.view.controller("ProfileListenerController", function ($scope, $routeParams, $http) {
            $scope.list = ["Marie", "Susan", "Mark", "Jeff"];
        });
    };
    ProfileActivity.prototype.onDone = function () {
        //jQuery(".TextView").removeClass("Animate").addClass("View");
    };
    return ProfileActivity;
}());
var UserActivity = /** @class */ (function () {
    function UserActivity(view) {
        view.controller("UserController", function ($scope, $routeParams, $route, $http) {
            $scope.userListener = ["Frank", "Bob"];
        });
    }
    return UserActivity;
}());

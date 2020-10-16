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

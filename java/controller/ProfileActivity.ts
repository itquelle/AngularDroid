/// <reference path="../app/typings/globals/jquery/index.d.ts" />

class ProfileActivity {

    view;

    constructor(view) {

        this.view = view;

        this.view.controller("ProfileController", ($scope, $http, $routeParams) => {

            $scope.profile_id = $routeParams.id;

            $scope.testFunction = function (a, b) {

                const person_age = a+b;

                alert($scope.profile_id + " ist " + person_age + " Jahre alt");
            };

            this.onDone();

        });

        this.getProfileList();

    }

    getProfileList(){

        this.view.controller("ProfileListenerController", ($scope, $routeParams, $http) => {
            $scope.list = ["Marie", "Susan", "Mark", "Jeff"];
        });

    }

    onDone(){
        //jQuery(".TextView").removeClass("Animate").addClass("View");
    }

}
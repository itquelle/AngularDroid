class AboutActivity{

    constructor(view) {

        view.controller("AboutController", ($scope, $http, $location, $routeParams) => {

            // :id = $routeParams.id

            $scope.MeinName = "Rudi " + $routeParams.id;

        });

    }

}
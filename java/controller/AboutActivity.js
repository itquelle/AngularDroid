var AboutActivity = /** @class */ (function () {
    function AboutActivity(view) {
        view.controller("AboutController", function ($scope, $http, $location, $routeParams) {
            // :id = $routeParams.id
            $scope.MeinName = "Rudi " + $routeParams.id;
        });
    }
    return AboutActivity;
}());

class HomeActivity{

    constructor(view) {

        view.controller("HomeContoller", ($scope, $http) => {

            $scope.page_title = "Home";

        });

    }

}
class CryptoListActivity{

    constructor(view) {

        view.controller("CryptoListController", ($scope, $http, $location) => {

            $scope.PageTitle = "CryptoCompare List";

            $http.get('app/test/').then(function(response){
                $scope.cryptoListener = response.data;
            });

        });

    }

}
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

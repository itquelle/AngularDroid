/// <reference path="AppController.ts"/>
/// <reference path="../controller/ProfileActivity.ts"/>
/// <reference path="../controller/HomeActivity.ts"/>
/// <reference path="../controller/AboutActivity.ts"/>
/// <reference path="../controller/UserActivity.ts"/>
/// <reference path="../controller/CryptoListActivity.ts"/>
/// <reference path="../manifests/JSManifest.ts"/>
/// <reference path="node_modules/tools/index.ts"/>
/// <reference path="typings/globals/jquery/index.d.ts" />
/**
 * @copyright ItQuelle
 **/
var MainActivity = /** @class */ (function () {
    function MainActivity() {
        this.onCreate();
        this.onNavigationItemSelected();
        //Manifest
        new HomeActivity(this.app);
        new CryptoListActivity(this.app);
        new AboutActivity(this.app);
        new ProfileActivity(this.app);
        new UserActivity(this.app);
    }
    MainActivity.prototype.onCreate = function () {
        this.app = angular.module('app', ["ngRoute"]);
        this.app.run(function ($rootElement) {
            $rootElement.on('click', function (e) { e.stopPropagation(); });
        });
    };
    MainActivity.prototype.onNavigationItemSelected = function () {
        this.app.config(function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true).hashPrefix('!');
            for (var i = 0; i < routes.length; i++) {
                $routeProvider.when(routes[i].route, routes[i].options);
            }
        });
    };
    return MainActivity;
}());
var initialize = new MainActivity();

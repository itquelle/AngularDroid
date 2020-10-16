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

class MainActivity{

    app;
    main;

    public constructor(){

        this.onCreate();
        this.onNavigationItemSelected();

        //Manifest
        new HomeActivity(this.app);
        new CryptoListActivity(this.app);
        new AboutActivity(this.app);
        new ProfileActivity(this.app);
        new UserActivity(this.app);

    }

    public onCreate(){

        this.app = angular.module('app', ["ngRoute"]);
        this.app.run(function($rootElement){
            $rootElement.on('click', function(e) { e.stopPropagation(); });
        });

    }

    public onNavigationItemSelected(){

        this.app.config(($routeProvider, $locationProvider) => {
            $locationProvider.html5Mode(true).hashPrefix('!');
            for (let i = 0; i < routes.length; i++){
                $routeProvider.when(routes[i].route, routes[i].options);
            }
        });

    }

}

let initialize = new MainActivity();
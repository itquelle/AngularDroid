const layout_dir = "res/layout/";

const routes = [
    { route: "/", options: { templateUrl: layout_dir + "home.html", controller: "HomeController" } },
    { route: "/home", options: { templateUrl: layout_dir + "home.html", controller: "HomeController" } },
    { route: "/test", options: { templateUrl: layout_dir + "test.html", controller: "CryptoListController" } },
    { route: "/about", options: { templateUrl: layout_dir + "about.html", controller: "AboutController" } },
    { route: "/sym/:id", options: { templateUrl: layout_dir + "about.html", controller: "AboutController" } },
    { route: "/profile/:id", options: { templateUrl: layout_dir + "profile.html", controller: "ProfileController" } },
    { route: "/user/:id", options: { templateUrl: layout_dir + "user.html", controller: "UserController" } },
];

interface Strings {
    profile_id:string;
    user_name:string;
}
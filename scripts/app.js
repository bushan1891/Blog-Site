(function () {
    angular.module('app', ['ui.router', 'LocalStorageModule']).controller('cntrl', function () {
        var vm = this;
    }).config(function ($stateProvider, $urlRouterProvider, localStorageServiceProvider) {
        // For any unmatched url, redirect to /state1
        // $urlRouterProvider.otherwise("card.tmpl.html");
        localStorageServiceProvider.setPrefix('local').setStorageType('localStorage').setNotify(true, true);
        $stateProvider.state('add', {
            url: "addcard"
            , templateUrl: "/views/addcard.tmpl.html"
            , controller: "addController"
            , controllerAs: "vm"
        }).state('card', {
            url: "card"
            , templateUrl: "/views/card.tmpl.html"
            , controller: "cardController"
            , controllerAs: "vm"
        });
    });
})();
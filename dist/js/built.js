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
(function () {
    angular.module('app').controller('cardController', function (localStorageService, $log) {
        var vm = this;
        vm.class = 'cardController';
        activate();
        if (localStorageService.get('blogs') == null) {
            localStorageService.set('blogs', []);
        }
        vm.blogs = localStorageService.get('blogs');
        /*        vm.blogs = [
                    {
                        heading: 'Chicken'
                        , content: 'this is chicken'
                        }
                        , {
                        heading: 'Mutton'
                        , content: 'this is mutton'
                        }
                        , {
                        heading: 'Turkey'
                        , content: 'this is Turkey'
                        }
                ]*/
        localStorageService.set('blogs', vm.blogs);

        function activate() {
            $log.debug('Activating ' + vm.class);
        }

        function getItem(key) {
            return localStorageService.get(key);
        }
    });
})();
/**
 * @author 
 * @since 7/9/2016
 */
(function () {
    'use strict';
    angular.module('app').controller('addController', AddControllerJsController);
    /* @ngInject */
    function AddControllerJsController($log, localStorageService) {
        var vm = this;
        vm.class = 'addController';
        vm.update = update;
        vm.blogs = localStorageService.get('blogs');
        console.dir(vm.blogs);
        vm.blog = {
            heading: ''
            , content: ''
        };
        console.log(vm.blogs);

        function update(blog) {
            alert(blog);
            console.dir(blog);
            vm.blogs.push(blog);
            localStorageService.set('blogs', vm.blogs);
        }
        activate();
        //////////////
        function activate() {
            $log.debug('Activating ' + vm.class);
        }
    }
})();
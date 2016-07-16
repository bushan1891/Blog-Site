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
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
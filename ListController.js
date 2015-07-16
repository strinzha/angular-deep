(function(){
    angular
        .module('app')
        .controller('ListController', ListController);        

    function ListController (resourceImages) {
        var vm = this;

        vm.photos = resourceImages.getImages();
    } 
})();
 
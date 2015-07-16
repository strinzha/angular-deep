(function(){
	angular
	    .module('app')
	    .directive('fullImage', fullImage);

	function fullImage () {
	    return {
	        replace: true,
	        scope: {
	            image: "="
	        },
	        restrict: "A",
	        link: function(scope,element,attrs){
	        		//console.log(element);
	            var current = element[0].addEventListener("click", function (e){
	                var overlay = document.createElement('div');
	                var fullImage = document.createElement('img');

	                document.body.style.overflow = "hidden";
	                document.body.appendChild(overlay);

	                overlay.className = 'overlay';
	                overlay.appendChild(fullImage);
	                    
	                fullImage.src = scope.image.url;
	                fullImage.className = 'overlay__image';                    
	                    
	                overlay.addEventListener("click", function (e){
	                    document.body.style.overflow = "scroll"
	                    overlay.parentNode.removeChild(overlay);
	                });
	            });
	        }
	    }
	}
})(); 
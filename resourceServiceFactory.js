(function(){
	angular
		.module('app')
		.factory('resourceImages', resourceImages);

	function resourceImages ($resource) {
		
	 	var getImages = function() {
	        var images = [];

	        $resource('http://jsonplaceholder.typicode.com/photos')
	        	.query(dataSuccess);

	        function dataSuccess(data) {
	        	var count = 0;
	            for (prop in data) {
	            	if (count < 100) {
	            		images.push(data[prop]);
	            	} else {
	            		break;
	            	} 
	            	count++;           	
	            }  
	        }        
	        
	        return images;
	    }

	    return {
	    	getImages: getImages
	    };
	}
})();
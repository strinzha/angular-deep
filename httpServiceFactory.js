(function(){
	angular
		.module('app')
		.factory('httpImages', httpImages)

	function httpImages($http) {

		var getImages = function () {
			var images = [];

			$http.get('http://jsonplaceholder.typicode.com/photos')
				.success(dataSuccess);

			function dataSuccess(data){
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
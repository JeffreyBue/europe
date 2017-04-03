$(document).ready(function(){

	var $grid = $('#photos').imagesLoaded( function() {
	  // init Masonry after all images have loaded
	  $grid.masonry({
			  itemSelector: '.grid-item'
	  });
	});

	lightbox.option({
      'maxWidth': 700
    });
});

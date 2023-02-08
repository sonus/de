// Preloader js    
$(window).on('load', function () {
  $('.preloader').fadeOut(100);
});

(function ($) {
  'use strict';


if($("#horizontal").length){
  gridGallery({
    selector: "#horizontal",
    layout: "horizontal"
  });
}

})(jQuery);
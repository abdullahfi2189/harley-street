(function ($) {
    ("use strict");

     /*-- recent project slider --*/
     var reviewSlider = $(".reviews-slider");
     if (reviewSlider.length) {
         $('.reviews-slider').slick({
             slidesToShow: 2,
             slidesToScroll: 1,
             infinite: true,
             autoplay: true,
             arrows: true,
             fade: false,
             autoplaySpeed: 3000,
         });
     }
     /*-- recent project slider --*/
     var treatmentresultSlider = $(".treatment-result-slider");
     if (treatmentresultSlider.length) {
         $('.treatment-result-slider').slick({
             slidesToShow: 2,
             slidesToScroll: 1,
             infinite: true,
             autoplay: true,
             arrows: true,
             fade: false,
             autoplaySpeed: 3000,
         });
     }

    /*-- banner-slider-Start --*/
    /*--
    var indexBannerSlider = $(".index-banner-slider");
    if (indexBannerSlider.length) {
        $('.index-banner-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            arrows: true,
            fade: false,
            autoplaySpeed: 3000,
            asNavFor: '.slider-nav-list',
        });
    }
    var sliderNavList = $(".slider-nav-list");
    if (sliderNavList.length) {
        $('.slider-nav-list').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.index-banner-slider',
            dots: false,
            autoplay: true,
            centerMode: false,
            focusOnSelect: true,
            autoplaySpeed: 4000,
        });
    }
    --*/

   


    

})(jQuery);
$(document).ready(function(){
    // navigation toggle
    $('.navbar-toggler-btn').click(function(){
        $('.navbar-collapse').slideToggle();
        $(this).addClass('active');
    });

        // change navbar bg
        $(document).scroll(function(){
            var $nav = $('.navbar');
            $nav.toggleClass('change-on-scroll', $(this).scrollTop() > $nav.height());
        });
});


function currentSlide(slideNumber) {
  // Tüm bannerların display özelliğini none olarak ayarla
  var banners = document.getElementsByClassName("header-banner");
  for (var i = 0; i < banners.length; i++) {
    banners[i].style.width = "0";

  }
  
  // İstenilen slayta ait class'ın display özelliğini block olarak ayarla
  var targetBanner = document.getElementById("banner-" + slideNumber);
  if (targetBanner) {
    targetBanner.style.width = "100%";
 


  }
}
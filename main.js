
/*================================================
            Table of contents  
==================================================
 
1. Preloader
2. Background-image flickering solution for mobile
3. Parallax
4. Type js
5. Wow js
6. Progress Bar
7. Smooth scroll
8. Active scroll
10. Magnific Popup
11. Mixitup
13. Client
14. Contact form
15. Google Map
16. Scroll to top
17. Scroll Navbar

====================================================
            End table content 
===================================================*/

$(function () {
    "use strict";

    var $window = $(window),
    $body = $('body');

    jQuery(document).ready(function($){

       //Preloader
      $('.spinner').fadeOut(); 
      $('.preloader').delay(350).fadeOut(500);
      $body.delay(350).css({'overflow':'visible'});   

//Background-image flickering solution for mobile
var bg = jQuery("#home");
function resizeBackground() {
  bg.height(jQuery(window).height() + 60);
}
resizeBackground();

//Parallax
$(function(){
  $('body').stellar({
    responsive: true,
    positionProperty: 'position',
    horizontalScrolling: false
});
});

//Type js
var element = $(".element");
$(function() {
  element.typed({
    strings: ["I am Tanya Goyal.", "I am a Developer.", "I'm Designer too.", "I am from Delhi."],
    typeSpeed: 100,
    loop: true,
});
});

//Wow js
new WOW().init(); 

//Progress Bar
var startSkills = $('.single-skill');
startSkills.waypoint(function () {
    $(this).each(function () {
        var data = $(this).data('percent');
        $(this).find('.skill-bar-overlay').animate({
            width: data + "%"
        }, 2000);

        $(this).find('span').addClass('show').animate({
            width: data + (-20) + "%"
        }, 2000);
    });
}, {
    triggerOnce: true,
    offset: 'bottom-in-view'
});

//Smooth Scroll
$(".nav a,#home a,#quote a,[href='#body']").on('click', function(event) {
    if (this.hash !== ""){
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 900, function(){
        window.location.hash = hash;
    });
  }
});

//Active Scroll
$(document).on("scroll", onScroll);
function onScroll(event){
  var scrollPos = $(document).scrollTop() + 80;
  $('.nav a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('.nav li a').removeClass("active");
      currLink.addClass("active");
    }
    else{
      currLink.removeClass("active");
    }
  });
} 

//Magnific Popup
$('#parent').magnificPopup({
  delegate: 'a.gallery',
  type: 'image',
  closeOnContentClick: true,
  gallery: {enabled: true}
});

//Mixitup
$('#parent').mixItUp();

//Owl Carousel
$("#owl-testimonial").owlCarousel({
    navigation: false,
    pagination: true,
    slideSpeed: 800,
    paginationSpeed: 800,
    smartSpeed: 500,
    autoplay: false,
    singleItem: true,
    loop: false,
    responsive:{
        0:{
            items:1
        },
        580:{
            items:2
        },
        900:{
            items:3
        }
    }
});

//Clients
$("#partners").owlCarousel({
  loop: true,
  nav: false,
  dots: false,
  margin: 30,
  autoplay: true,
  autoplayTimeout: 1300,
  smartSpeed: 500,
  responsive: {
    0:{
      items:1
    },
    320:{
      items:2
    },
    520:{
      items:3
    },
    860:{
      items:5
    },
    1000:{
      items:6
    }
  }
});

//Contact form
var validator=$("#form").validate({
  rules: {
    name: "required",
    email: {
      required: true,
      email: true
  },
  subject: "required",
  message: "required",
},

messages: {
    name: "Please enter your name",
    email: "Please enter a valid email address",
    subject: "Please enter a subject",
    message: "Please enter your message"
}
});
$(".send-btn").on("click touchstart", function () {
    $("#form").css("color", "#ac4b49");
});

//Google Map
var myCenter = new google.maps.LatLng(28.6809, 77.2046);
function initialize() {
    var mapProp = {
        center:myCenter,
        zoom:13,
        scrollwheel:false,
        draggable:true,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"),mapProp);
    var marker = new google.maps.Marker({
        position:myCenter,
        icon: 'img/map.png',
    });
    marker.setMap(map);
    marker.setAnimation(google.maps.Animation.BOUNCE);
}
google.maps.event.addDomListener(window, 'load', initialize);

//Scroll-to-up
$('#scroll-up').hide();
$window.on("scroll", function () {
  if ($window.scrollTop() > 300) {
    $('#scroll-up').fadeIn();
  } else {
    $('#scroll-up').fadeOut();
  }
  //Scroll NavBar
  if ($window.scrollTop() > 160) {
    $('nav').addClass("scroll");
  } else {
            //remove the background property
            $('nav').removeClass("scroll");
          }
        });
$('#scroll-up').on("click", function () {
  $("html, body").animate({
    scrollTop: 0
  }, 1000);
  return false;
});

}(jQuery));

});
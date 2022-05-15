
$(document).ready(function(){
  $('.hero-slider').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
	dots:false,
    responsive:{
        0:{
            items:1
        },
        1024:{
            items:1
        },
        1200:{
            items:1
        }
    }
});
$('.portfolio-slider').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    dots:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        991:{
            items:2
        },
        992:{
            items:2
        },
        1024:{
            items:2
        },
        1200:{
            items:4
        }
    }
});
$('.testimonial-slider').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    dots:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        991:{
            items:2
        },
        992:{
            items:2
        },
        1024:{
            items:2
        },
        1200:{
            items:3
        }
    }
});
$('.clients-slider').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    dots:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:2
        },

        991:{
            items:3
        },
        992:{
            items:3
        },
        1024:{
            items:3
        },
        1200:{
            items:5
        }
    }
});
//Start wow.js

wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();
//End wow.js
$(".navico").click(function(){
  $(".main-menu").toggle();
});
});
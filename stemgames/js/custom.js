$(document).ready(function () {
  // alert("helo");

  // let screenWidth = window.innerWidth


  // if(screenWidth>768){
  //   $(".banner-carousel").owlCarousel({
  //     loop: true,
  //     navigation : false,
  //     margin: 0,
  //     nav: true,
  //     dots: true,
  //     center: true,
  //     responsive: {
  //       0: {
  //         items: 1,
  //       },
  //       600: {
  //         items: 1,
  //       },
  //       1000: {
  //         items: 1,
  //       },
  //       1200: {
  //         items: 1,
  //       },
  //     },
  //   });
  // }else{
  //   $(".banner-carousel").owlCarousel({
  //     loop: true,
  //     navigation : false,
  //     margin: 0,
  //     nav: true,
  //     dots: true,
  //     center: true,
  //     responsive: {
  //       0: {
  //         items: 1,
  //       },
  //       600: {
  //         items: 1,
  //       },
  //       1000: {
  //         items: 1,
  //       },
  //       1200: {
  //         items: 1,
  //       },
  //     },
  //   });
  // }

  // Case Studies Carousel



  $(".banner-carousel").owlCarousel({
    loop: true,
    navigation: false,
    margin: 0,
    nav: true,
    center: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
      1200: {
        items: 1,
      },
    },
  });


  // Add Class on Header on Scroll
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
      $("header.header").addClass("fixed-header");
    } else {
      $("header.header").removeClass("fixed-header");
    }
  });

  // Counter
  $(".counter").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 4000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });


  //Case Studies Carousel
  $(".single-carousel").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    stagePadding: 0,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
      1200: {
        items: 1,
      },
    },
  });
  // Client Carousel

  $(".client-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    center: true,
    stagePadding: 10,
    autoplay: false,

    // navText: [
    //   "<i class='fa fa-chevron-left'></i>",
    //   "<i class='fa fa-chevron-right'></i>"
    // ],
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1200: {
        items: 3,
      },
    },
  });


  // Stem Banner Carousel
  
  $(".stem-banner-carousel").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    center: true,
    autoplay: true,
    // navText: [
    //   "<i class='fa fa-chevron-left'></i>",
    //   "<i class='fa fa-chevron-right'></i>"
    // ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
      1200: {
        items: 1,
      },
    },
  });
});

// bootom slider

$(".bottom-banner-carousel").owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  dots: false,
  center: true,
  autoplay: true,
  // navText: [
  //   "<i class='fa fa-chevron-left'></i>",
  //   "<i class='fa fa-chevron-right'></i>"
  // ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
    1200: {
      items: 1,
    },
  },
});


$('.toggle-btn').on('click', function () {
  $(this).parents('.schedule_card').toggleClass('active-card');
})


// Curriculum Details page //

// card 1

$('.Show').click(function () {
  $('.target').show(200);
  $('.Show').hide(0);
  $('.Hide').show(0);
});
$('.Hide').click(function () {
  $('.target').hide(200);
  $('.Show').show(0);
  $('.Hide').hide(0);
});
$('.toggle').click(function () {
  $('.target').toggle();
});


// card2

$('.Show1').click(function () {
  $('.target1').show(200);
  $('.Show1').hide(0);
  $('.Hide1').show(0);
});
$('.Hide1').click(function () {
  $('.target1').hide(200);
  $('.Show1').show(0);
  $('.Hide1').hide(0);
});
$('.toggle1').click(function () {
  $('.target1').toggle();
});


// card3

$('.Show2').click(function () {
  $('.target2').show(200);
  $('.Show2').hide(0);
  $('.Hide2').show(0);
});
$('.Hide2').click(function () {
  $('.target2').hide(200);
  $('.Show2').show(0);
  $('.Hide2').hide(0);
});
$('.toggle2').click(function () {
  $('.target2').toggle();
});


// card 4

$('.Show3').click(function () {
  $('.target3').show(200);
  $('.Show3').hide(0);
  $('.Hide3').show(0);
});
$('.Hide3').click(function () {
  $('.target3').hide(200);
  $('.Show3').show(0);
  $('.Hide3').hide(0);
});
$('.toggle3').click(function () {
  $('.target3').toggle();
});


// home page  js



var owl = $('#staff');
owl.owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  autoplay: false,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      stagePadding: 70,
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    },
    1200: {
      items: 3
    }
  }
});


var owl = $('#staff2');
owl.owlCarousel({
  margin: 20,
  loop: true,
  dots: true,
  nav: true,
  autoplay: false,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      stagePadding: 70,
    },
    600: {
      items: 2
    },
    1000: {
      items: 2
    },
    1200: {
      items: 3
    }
  }
});


var owl = $('#staff3');
owl.owlCarousel({
  margin: 20,
  loop: true,
  nav: true,
  autoplay: false,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      stagePadding: 70,
    },
    600: {
      items: 2
    },
    1000: {
      items: 2
    },
    1200: {
      items: 3
    }
  }
});


var owl = $('#staff4');
owl.owlCarousel({
  margin: 20,
  loop: true,
  nav: true,
  autoplay: false,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      stagePadding: 70,
    },
    600: {
      items: 2
    },
    1000: {
      items: 2
    },
    1200: {
      items: 3
    }
  }
});



jQuery(document).ready(function () {
  $(".targetDiv").hide();
});
jQuery(document).ready(function () {
  $("#div2").show();
});
jQuery('.showSingle').click(function () {
  jQuery('.targetDiv').hide('.cnt');
  jQuery('#div' + $(this).attr('target')).slideToggle();

});

$(document).ready(function () {

  var sync1 = $("#sync1");
  var sync2 = $("#sync2");
  var slidesPerPage = 3; //globaly define number of elements per page
  var syncedSecondary = true;

  sync1.owlCarousel({
    items: 1,
    slideSpeed: 2000,
    nav: true,
    autoplay: false,
    dots: true,
    loop: true,
    responsiveRefreshRate: 200,
    // navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
  }).on('changed.owl.carousel', syncPosition);

  sync2
    .on('initialized.owl.carousel', function () {
      sync2.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
      items: slidesPerPage,
      dots: true,
      nav: true,
      smartSpeed: 200,
      slideSpeed: 500,


      responsive: {
        0: {
          items: 1,
          stagePadding: 70,
          center: true,
        },
        600: {
          items: 2,
          stagePadding: 0,
          center: false,
        },
        1000: {
          items: 2,
          stagePadding: 0,
          center: false,
        },
        1200: {
          items: 3,
          stagePadding: 0,
          center: false,
        }
      },

      slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
      responsiveRefreshRate: 100
    }).on('changed.owl.carousel', syncPosition2);

  $(document).on('click', '.owl-item>div', function () {
    // see https://owlcarousel2.github.io/OwlCarousel2/docs/api-events.html#to-owl-carousel
    var $speed = 300;  // in ms
    $owl.trigger('to.owl.carousel', [$(this).data('position'), $speed]);
  });

  function syncPosition(el) {
    //if you set loop to false, you have to restore this next line
    //var current = el.item.index;

    //if you disable loop you have to comment this block
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - (el.item.count / 2) - .5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }

    //end block

    sync2
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = sync2.find('.owl-item.active').length - 1;
    var start = sync2.find('.owl-item.active').first().index();
    var end = sync2.find('.owl-item.active').last().index();

    if (current > end) {
      sync2.data('owl.carousel').to(current, 100, true);
    }
    if (current < start) {
      sync2.data('owl.carousel').to(current - onscreen, 100, true);
    }
  }

  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      sync1.data('owl.carousel').to(number, 100, true);
    }
  }

  sync2.on("click", ".owl-item", function (e) {
    e.preventDefault();
    var number = $(this).index();
    sync1.data('owl.carousel').to(number, 300, true);
  });

  $('.custom-dropdown input').on('click', function () {
    $(this).parents('.custom-dropdown').find('.sub-dropdown').toggleClass('d-none dropdownArrow')

  })
  $('.sub-dropdown li').on('click', function () {
    var value = $(this).text();
    $(this).parents('.custom-dropdown').find('input').val(value);
    $(this).parent().addClass('d-none')
  })
});



// document.addEventListener("click", function () {
//   let icon = document.querySelector('.fa-angle-down')
//   icon.classList.toggle("rotate");
// });


//  side bar 


function openNav() {
  document.getElementById("mySidenav").style.right = "0px";
}


function closeNav() {
  document.getElementById("mySidenav").style.right = "-300px";
}



// stem page



var owl = $('#stem-slide');
owl.owlCarousel({
  loop: true,
  margin: 20,
  nav: false,
  autoplay: false,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      stagePadding: 40,
    },
    600: {
      items: 1,
   
    },
    1000: {
      items: 3
    },
    1200: {
      items: 3
    }
  }
});



$(".robotics-urriculum-slider").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  dots: false,
  center: true,
  stagePadding: 10,
  autoplay: false,

  // navText: [
  //   "<i class='fa fa-chevron-left'></i>",
  //   "<i class='fa fa-chevron-right'></i>"
  // ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
    1200: {
      items: 3,
    },
  },
});





// stem strems web 2 poage

$(".ssweb-single-carousel").owlCarousel({
  loop: true,
  navigation: false,
  margin: 0,
  nav: true,
  dots: true,
  center: true,
  responsive: {
    0: {
      items: 1,
      dots: true,
    },
    600: {
      items: 1,
      dots: true,
    },
    1000: {
      items: 1,
    },
    1200: {
      items: 1,
    },
  },
});




// ===== Scroll to Top ==== 
$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
      $('#return-to-top').fadeIn(200);    // Fade in the arrow
  } else {
      $('#return-to-top').fadeOut(200);   // Else fade out the arrow
  }
});
$('#return-to-top').click(function() {      // When arrow is clicked
  $('body,html').animate({
      scrollTop : 0                       // Scroll to top of body
  }, 500);
});
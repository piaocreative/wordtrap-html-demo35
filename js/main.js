$(document).ready(function(){
    $('.logos').slick({
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    infinite: false,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    infinite: false,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    });

    $('.testimonials').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
		prevArrow:"<img class='a-left control-c prev slick-prev' src='./images/icons/arrowleft.png' style='width:10px; height:auto; padding: 0;'>",
        nextArrow:"<img class='a-right control-c next slick-next' src='./images/icons/arrowright.png' style='width:10px; height:auto; padding: 0;'>",
    });

    $('.arrivals').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
		prevArrow:"<img class='a-left control-c prev slick-prev' src='./images/icons/arrowleft.png' style='width:10px; height:auto; padding: 0;'>",
        nextArrow:"<img class='a-right control-c next slick-next' src='./images/icons/arrowright.png' style='width:10px; height:auto; padding: 0;'>",
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
                dots:false,
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
                dots:false,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
                dots:false,
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false,
                  dots:false,
                }
              }
          ]
    });

    $('.collections').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: true,
        // speed: 300,
		prevArrow:"<img class='a-left control-c prev slick-prev' src='./images/icons/arrowleft.png' style='width:10px; height:auto; padding: 0;'>",
        nextArrow:"<img class='a-right control-c next slick-next' src='./images/icons/arrowright.png' style='width:10px; height:auto; padding: 0;'>",
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
                dots:false,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
                dots:false,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots:false,
              }
            }
          ]
    });

    $('.posts').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        // speed: 300,
		prevArrow:"<img class='a-left control-c prev slick-prev' src='./images/icons/arrowleft.png' style='width:10px; height:auto; padding: 0;'>",
        nextArrow:"<img class='a-right control-c next slick-next' src='./images/icons/arrowright.png' style='width:10px; height:auto; padding: 0;'>",
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots:false,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots:false,
              }
            }
          ]
    });

    $('.teams').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        // speed: 300,
		prevArrow:"<img class='a-left control-c prev slick-prev' src='./images/icons/arrowleft.png' style='width:10px; height:auto; padding: 0;'>",
        nextArrow:"<img class='a-right control-c next slick-next' src='./images/icons/arrowright.png' style='width:10px; height:auto; padding: 0;'>",
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
                dots:false,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots:false,
              }
            }
          ]
    });
});
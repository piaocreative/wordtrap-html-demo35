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

    $('.testimons').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        adaptiveHeight: true,
        variableWidth: true,
		prevArrow:"<img class='a-left control-c prev slick-prev' src='./images/icons/arrowleft.png' style='width:10px; height:auto; padding: 0;'>",
        nextArrow:"<img class='a-right control-c next slick-next' src='./images/icons/arrowright.png' style='width:10px; height:auto; padding: 0;'>",
    });

    $('.arrivals').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        adaptiveHeight: true,
        variableWidth: true,
		prevArrow:"<img class='a-left control-c prev slick-prev' src='./images/icons/arrowleft.png' style='width:10px; height:auto; padding: 0;'>",
        nextArrow:"<img class='a-right control-c next slick-next' src='./images/icons/arrowright.png' style='width:10px; height:auto; padding: 0;'>",
    });

    $('.collections').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        infinite: true,
        // speed: 300,
        adaptiveHeight: true,
		variableWidth: true,
		prevArrow:"<img class='a-left control-c prev slick-prev' src='./images/icons/arrowleft.png' style='width:10px; height:auto; padding: 0;'>",
        nextArrow:"<img class='a-right control-c next slick-next' src='./images/icons/arrowright.png' style='width:10px; height:auto; padding: 0;'>",
    });

    $('.news').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 5000,
        dots: true,
        infinite: true,
        // speed: 300,
        adaptiveHeight: true,
		variableWidth: true,
		prevArrow:"<img class='a-left control-c prev slick-prev' src='./images/icons/arrowleft.png' style='width:10px; height:auto; padding: 0;'>",
        nextArrow:"<img class='a-right control-c next slick-next' src='./images/icons/arrowright.png' style='width:10px; height:auto; padding: 0;'>",
    });
});
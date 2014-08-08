jQuery(document).ready(function ($) {
  
  /* variables for NEWS section */
    var slideCount_news = $('#slider_news ul li').length;
    var slideWidth_news = $('#slider_news ul li').width();
    var slideHeight_news = $('#slider_news ul li').height();
    var sliderUlWidth_news = slideCount_news * slideWidth_news;
  
  /* variables for SPORTS section */
    var slideCount_sports = $('#slider_sports ul li').length;
    var slideWidth_sports = $('#slider_sports ul li').width();
    var slideHeight_sports = $('#slider_sports ul li').height();
    var sliderUlWidth_sports = slideCount_sports * slideWidth_sports;
  
  /* variables for LIFE AND ARTS section */
    var slideCount_las = $('#slider_las ul li').length;
    var slideWidth_las = $('#slider_las ul li').width();
    var slideHeight_las = $('#slider_las ul li').height();
    var sliderUlWidth_las = slideCount_las * slideWidth_las;
    
  
  /* functions for NEWS section */
    $('#slider_news').css({ width: slideWidth_news, height: slideHeight_news });
    
    $('#slider_news ul').css({ width: sliderUlWidth_news, marginLeft: - slideWidth_news });
    
    $('#slider_news ul li:last-child').prependTo('#slider_news ul');

    function moveLeft_news() {
        $('#slider_news ul').animate({
            left: + slideWidth_news
        }, 200, function () {
            $('#slider_news ul li:last-child').prependTo('#slider_news ul');
            $('#slider_news ul').css('left', '');
        });
    };

    /* automatically scroll through headlines */
    /*setInterval(function () {
        moveRight_news();
    }, 5000); */ /* interval set to 15 seconds */
  
    function moveRight_news() {
        $('#slider_news ul').animate({
            left: - slideWidth_news
        }, 200, function () {
            $('#slider_news ul li:first-child').appendTo('#slider_news ul');
            $('#slider_news ul').css('left', '');
        });
    };

    $('a.control_prev_news').click(function () {
        moveLeft_news();
    });

    $('a.control_next_news').click(function () {
        moveRight_news();
    });

  
    /* functions for SPORTS section */
    $('#slider_sports').css({ width:  slideWidth_sports, height: slideHeight_sports });
    
    $('#slider_sports ul').css({ width: sliderUlWidth_sports, marginLeft: - slideWidth_sports });
    
    $('#slider_sports ul li:last-child').prependTo('#slider_sports ul');

    function moveLeft_sports() {
        $('#slider_sports ul').animate({
            left: + slideWidth_sports
        }, 200, function () {
            $('#slider_sports ul li:last-child').prependTo('#slider_sports ul');
            $('#slider_sports ul').css('left', '');
        });
    };

    /* automatically scroll through headlines */
    /*setInterval(function () {
        moveRight_news();
    }, 5000); */ /* interval set to 15 seconds */
  
    function moveRight_sports() {
        $('#slider_sports ul').animate({
            left: - slideWidth_sports
        }, 200, function () {
            $('#slider_sports ul li:first-child').appendTo('#slider_sports ul');
            $('#slider_sports ul').css('left', '');
        });
    };

    $('a.control_prev_sports').click(function () {
        moveLeft_sports();
    });

    $('a.control_next_sports').click(function () {
        moveRight_sports();
    });
  
  /* functions for LIFE AND ARTS section */
    $('#slider_las').css({ width:  slideWidth_las, height: slideHeight_las });
    
    $('#slider_las ul').css({ width: sliderUlWidth_las, marginLeft: - slideWidth_las });
    
    $('#slider_las ul li:last-child').prependTo('#slider_las ul');

    function moveLeft_las() {
        $('#slider_las ul').animate({
            left: + slideWidth_las
        }, 200, function () {
            $('#slider_las ul li:last-child').prependTo('#slider_las ul');
            $('#slider_las ul').css('left', '');
        });
    };

    /* automatically scroll through headlines */
    /*setInterval(function () {
        moveRight_news();
    }, 5000); */ /* interval set to 15 seconds */
  
    function moveRight_las() {
        $('#slider_las ul').animate({
            left: - slideWidth_las
        }, 200, function () {
            $('#slider_las ul li:first-child').appendTo('#slider_las ul');
            $('#slider_las ul').css('left', '');
        });
    };

    $('a.control_prev_las').click(function () {
        moveLeft_las();
    });

    $('a.control_next_las').click(function () {
        moveRight_las();
    });
  
});    

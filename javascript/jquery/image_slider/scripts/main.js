




$(function () {

    var $slider = $(".slider")
    var $slides = $slider.find("li");

    var currentSlide = 1;

    var pauseInterval = 3000;
    var imageWidth = 700;
    var animateTime = 1000;

    
    var interval;

    function startSlider() {
        interval = setInterval(function () {
            $('.slider').animate({
                "margin-left": "-=" + imageWidth
            }, animateTime, function () {
                currentSlide++;
                if (currentSlide === $slides.length) {
                    $slider.css("margin-left", 0);
                    currentSlide = 1;
                }
            })
        },
            pauseInterval
        )
    }

    function stopSlider() {
        clearInterval(interval);
    }


    $slider.on("mouseenter", stopSlider).on("mouseleave", startSlider)


    startSlider();

})


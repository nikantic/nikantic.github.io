jQuery(document).ready(function($){
    var navbar = document.querySelector(".nav");
    var navList = document.querySelector(".navList");
    var navToggle = document.querySelector(".navToggle");
    var navbarOpen = false;

    // navbar collapse function
    navToggle.addEventListener("click", function(){
        navbar.classList.toggle("navCollapse");
        navbarOpen = !navbarOpen;
        document.addEventListener("click", clickOutside, true);
    });

    // function to determine click outside of navbar
    var clickOutside = function(event){
        var isClickInside = navbar.contains(event.target);
        var isClickList = navList.contains(event.target);

        if (navbarOpen && !isClickInside || navbarOpen && isClickList ) {
            navbar.classList.remove("navCollapse");
            navbarOpen = false;
            document.removeEventListener("click", clickOutside, true);
        }
    };

    // function to determine tap outside of thumbnail
    var tapOutside = function(event){
        var isTapInside = $.contains($(".thumbnail"), event.target);

        if (!isTapInside) {
            $('.thumbnail').find(".thumbnailLink").removeClass('thumbnailLinkHover');
            $('.thumbnail').find(".thumbnailImage").removeClass('thumbnailImageHover');
            $('.thumbnail').find(".thumbnailAnchor").removeClass('thumbnailLineHover');
            document.removeEventListener("touchstart", tapOutside, true);
        }
    };

    // handling thumbnail hover on touch devices
    $('.thumbnail').on('touchstart', function(){ 
        $('.thumbnail').not(this).find(".thumbnailLink").removeClass('thumbnailLinkHover');
        $('.thumbnail').not(this).find(".thumbnailImage").removeClass('thumbnailImageHover');
        $('.thumbnail').not(this).find(".thumbnailAnchor").removeClass('thumbnailLineHover');
        $(this).find(".thumbnailLink").addClass('thumbnailLinkHover');
        $(this).find(".thumbnailImage").addClass('thumbnailImageHover');
        $(this).find(".thumbnailAnchor").addClass('thumbnailLineHover');
        document.addEventListener("touchstart", tapOutside, true);
    });

    // scroll to and animate function
    $(function() {
        $(".navLinks li").bind("click", function(){
            var $anchor = $(this).find("a");
            $("html, body").stop().animate({
                scrollTop: $($anchor.attr("href")).offset().top
            }, 500, "easeOutSine");
            event.preventDefault();
        });
    });
});
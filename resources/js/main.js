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
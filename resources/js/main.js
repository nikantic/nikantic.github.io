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
    var tapOutsideThumbnail = function(event){
        var isTapThumbnail = $.contains($(".thumbnail"), event.target);

        if (!isTapThumbnail) {
            $(".thumbnail").find(".thumbnailLink").removeClass("thumbnailLinkHover");
            $(".thumbnail").find(".thumbnailImage").removeClass("thumbnailImageHover");
            $(".thumbnail").find(".thumbnailAnchor").removeClass("thumbnailLineHover");
            document.removeEventListener("touchend", tapOutsideThumbnail, true);
        }
    };

    // handling thumbnail hover on touch devices
    $(".thumbnail").on("touchend", function(){ 
        $(".thumbnail").not(this).find(".thumbnailLink").removeClass("thumbnailLinkHover");
        $(".thumbnail").not(this).find(".thumbnailImage").removeClass("thumbnailImageHover");
        $(".thumbnail").not(this).find(".thumbnailAnchor").removeClass("thumbnailLineHover");
        $(this).find(".thumbnailLink").addClass("thumbnailLinkHover");
        $(this).find(".thumbnailImage").addClass("thumbnailImageHover");
        $(this).find(".thumbnailAnchor").addClass("thumbnailLineHover");
        document.addEventListener("touchend", tapOutsideThumbnail, true);
    });

    // function to determine tap outside of contact buttons
    var tapOutsideContact = function(event){
        var isTapContact = $.contains($(".contactItem"), event.target);

        if (!isTapContact) {
            $(".contactItem").find(".linkTooltip").removeClass("linkTooltipHover").addClass("linkTooltipNoHover");
            $(".contactItem").find(".contactImage").removeClass("contactImageHover").addClass("contactImageNoHover");
            document.removeEventListener("touchend", tapOutsideContact, false);
        }
    };

    // handling contact buttons hover on touch devices
    $(".contactItem").on("touchend", function(e){
        if ($(this).find(".linkTooltip").hasClass("linkTooltipHover")) {
            $(this).find(".linkTooltip").removeClass("linkTooltipHover").addClass("linkTooltipNoHover");
            $(this).find(".contactImage").removeClass("contactImageHover").addClass("contactImageNoHover");
        } else {
            e.preventDefault();
            e.stopPropagation();
            document.addEventListener("touchend", tapOutsideContact, false);
            $(this).find(".linkTooltip").removeClass("linkTooltipNoHover").addClass("linkTooltipHover");
            $(this).find(".contactImage").removeClass("contactImageNoHover").addClass("contactImageHover");
        }
        // remove the hover classes on the rest of the buttons
        $(".contactItem").not(this).find(".linkTooltip").removeClass("linkTooltipHover").addClass("linkTooltipNoHover");
        $(".contactItem").not(this).find(".contactImage").removeClass("contactImageHover").addClass("contactImageNoHover");
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
jQuery(document).ready(function($){
    var navbar = document.querySelector(".nav");
    var navList = document.querySelector(".navList");
    var navToggle = document.querySelector(".navToggle");
    var navbarOpen = false;
    var thumbnail = $(".thumbnail");
    var thumbnailLink = $(".thumbnailLink");
    var thumbnailImage = $(".thumbnailImage");
    var thumbnailAnchor = $(".thumbnailAnchor");
    var contactItem = $(".contactItem");
    var linkTooltip = $(".linkTooltip");
    var contactImage = $(".contactImage");
    var navLinks = $(".navLinks li");
    var theNav = $(".nav");
    var theNavToggle = $(".navToggle");
    var theQuickNav = $(".quickNav");

    // function to handle tap outside of navbar
    var tapOutsideNav = function(event){
        var isTapNav = navbar.contains(event.target);
        var isTapList = navList.contains(event.target);

        if (navbarOpen && !isTapNav || navbarOpen && isTapList) {
            navbar.classList.remove("navCollapse");
            navbarOpen = false;
            document.removeEventListener("click", tapOutsideNav, true);
        }
    };

    // navbar collapse function
    navToggle.addEventListener("click", function(){
        navbar.classList.toggle("navCollapse");
        navbarOpen = !navbarOpen;
        document.addEventListener("click", tapOutsideNav, true);
    });

    // function to handle touch outside of thumbnail
    var touchOutsideThumbnail = function(event){
        var isTouchThumbnail = $.contains(thumbnail, event.target);

        if (!isTouchThumbnail) {
            thumbnail.find(thumbnailLink).removeClass("thumbnailLinkHover");
            thumbnail.find(thumbnailImage).removeClass("thumbnailImageHover");
            thumbnail.find(thumbnailAnchor).removeClass("thumbnailLineHover");
            document.removeEventListener("touchend", touchOutsideThumbnail, true);
        }
    };

    // handling thumbnail hover on touch devices
    thumbnail.on("touchend", function(){ 
        thumbnail.not(this).find(thumbnailLink).removeClass("thumbnailLinkHover");
        thumbnail.not(this).find(thumbnailImage).removeClass("thumbnailImageHover");
        thumbnail.not(this).find(thumbnailAnchor).removeClass("thumbnailLineHover");
        $(this).find(thumbnailLink).addClass("thumbnailLinkHover");
        $(this).find(thumbnailImage).addClass("thumbnailImageHover");
        $(this).find(thumbnailAnchor).addClass("thumbnailLineHover");
        document.addEventListener("touchend", touchOutsideThumbnail, true);
    });

    // function to handle touch outside of contact buttons
    var touchOutsideContact = function(event){
        var isTouchContact = $.contains(contactItem, event.target);

        if (!isTouchContact) {
            contactItem.find(linkTooltip).removeClass("linkTooltipHover").addClass("linkTooltipNoHover");
            contactItem.find(contactImage).removeClass("contactImageHover").addClass("contactImageNoHover");
            document.removeEventListener("touchend", touchOutsideContact, false);
        }
    };

    // handling contact buttons hover on touch devices
    contactItem.on("touchend", function(e){
        if ($(this).find(linkTooltip).hasClass("linkTooltipHover")) {
            $(this).find(linkTooltip).removeClass("linkTooltipHover").addClass("linkTooltipNoHover");
            $(this).find(contactImage).removeClass("contactImageHover").addClass("contactImageNoHover");
        } else {
            e.preventDefault();
            e.stopPropagation();
            document.addEventListener("touchend", touchOutsideContact, false);
            $(this).find(linkTooltip).removeClass("linkTooltipNoHover").addClass("linkTooltipHover");
            $(this).find(contactImage).removeClass("contactImageNoHover").addClass("contactImageHover");
        }
        // remove the hover classes from the rest of the buttons
        contactItem.not(this).find(linkTooltip).removeClass("linkTooltipHover").addClass("linkTooltipNoHover");
        contactItem.not(this).find(contactImage).removeClass("contactImageHover").addClass("contactImageNoHover");
    });

    // scroll to and animate function
    $(function() {
        navLinks.bind("click", function(event){
            var $anchor = $(this).find("a");
            $("html, body").stop().animate({
                scrollTop: $($anchor.attr("href")).offset().top
            }, 500, "easeOutSine");
            event.preventDefault();
        });
    });

    // function to show navbar on top and hide it on scroll
    var didScroll;

    $(window).scroll(function(event){
        if ($(this).scrollTop() === 0) {
            theNav.removeClass("navCollapse").addClass("navTop");
            theNavToggle.addClass("navToggleTop");
            theQuickNav.addClass("quickNavTop");
            didScroll = false;
        }
        if ($(this).scrollTop() >= 30) {
            theNavToggle.removeClass("navToggleTop");
            theQuickNav.removeClass("quickNavTop");
            theNav.removeClass("navTop");
            didScroll = true;
        } else {
            theNavToggle.addClass("navToggleTop");
            theNav.addClass("navTop");
            theQuickNav.addClass("quickNavTop");
        }
    });
});
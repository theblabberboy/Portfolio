// JavaScript Document

//window.addEventListener("load", function () {
    // Hides the preloader after the page fully loads
    //document.getElementById("preloader").style.display = "none";
//});



$(document).ready(function () {
    "use strict";

    // scroll menu
    var sections = $('.section'),
        nav = $('.navbar-fixed-top,footer'),
        nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    nav.find('a').on('click', function () {
        var $el = $(this),
            id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height + 2
        }, 600);

        return false;
    });

    // Menu opacity
    if ($(window).scrollTop() > 80) {
        $(".navbar-fixed-top").addClass("bg-nav");
    } else {
        $(".navbar-fixed-top").removeClass("bg-nav");
    }
    $(window).scroll(function () {
        if ($(window).scrollTop() > 80) {
            $(".navbar-fixed-top").addClass("bg-nav");
        } else {
            $(".navbar-fixed-top").removeClass("bg-nav");
        }
    });

    // Parallax
    var parallax = function () {
        $(window).stellar();
    };

    $(function () {
        parallax();
    });

    // AOS
    AOS.init({
        duration: 1200,
        once: true,
        disable: 'mobile'
    });

    // isotope
    $('#projects').waitForImages(function () {
        var $container = $('.portfolio_container');
        $container.isotope({
            filter: '*',
        });

        $('.portfolio_filter a').click(function () {
            $('.portfolio_filter .active').removeClass('active');
            $(this).addClass('active');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    animationEngine: "jquery"
                }
            });
            return false;
        });
    });

    // animatedModal
    $("#demo01").animatedModal({
        modalTarget: 'recon'
    });

    $("#demo02").animatedModal({
        modalTarget: 'emotion'
    });

    $("#demo03").animatedModal({
        modalTarget: 'pulsar'
    });

    $("#demo04").animatedModal({
        modalTarget: 'threebody'
    });

    $("#demo05").animatedModal({
        modalTarget: 'galaxies'
    });

    $("#demo06").animatedModal({
        modalTarget: 'star'
    });

    $("#demo07").animatedModal({
        modalTarget: 'sun'
    });

    $("#demo08").animatedModal({
        modalTarget: 'moire'
    });

    $("#demo09").animatedModal({
        modalTarget: 'telepathy'
    });

    $("#demo10").animatedModal({
        modalTarget: 'poster_presentation'
    });

    // Contact Form
    $('#contact').hide().fadeIn(1000);

    // Hover effect on social icons
    $('.social-icons a').hover(
        function() {
            $(this).css('color', '#425BB5');
            $(this).css('transform', 'scale(1.2)');
        },
        function() {
            $(this).css('color', '#333');
            $(this).css('transform', 'scale(1)');
        }
    );;

    // Collapsible functionality
    var coll = document.getElementsByClassName("collapsible");
    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }

    // Skills
    // Get the modal
    var modal = document.getElementById("3dModal");

    // Get the card that opens the modal
    var card = document.getElementById("3d-modal-card");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the card, open the modal
    card.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }


    // Award and Achievement
    // Show the modal when an award link is clicked
    // Inside your modal click event
    $('.award-link').click(function(event) {
        event.preventDefault();
        
        // Get the modal target from the clicked link's href attribute
        const targetModal = $(this).attr('href');
        
        // Show the corresponding modal
        $(targetModal).css('display', 'block');
        
        // Load the PDF only if it hasn't been loaded yet
        const pdfEmbed = $(targetModal).find('embed');
        if (!pdfEmbed.attr('src')) {
            pdfEmbed.attr('src', pdfEmbed.data('src'));
        }
    });
    


    // Close the modal when the close button is clicked
    $('.close-awardModal').click(function() {
        // Find the closest modal and hide it
        $(this).closest('.modal').css('display', 'none');
    });

    // Close the modal if clicking outside of the modal content
    $(window).click(function(event) {
        if ($(event.target).hasClass('modal')) {
            $(event.target).css('display', 'none');
        }
    });


    // Extracurricular
    // Show the modal when an extracurricular link is clicked
    $('.extracurricular-link').click(function(event) {
        event.preventDefault();

        // Get the modal target from the clicked link's href attribute
        const targetModal = $(this).attr('href');

        // Show the corresponding modal
        $(targetModal).css('display', 'block');
    });

    // Close the modal when the close button is clicked
    $('.close-extracurricularModal').click(function() {
        // Find the closest modal and hide it
        $(this).closest('.modal').css('display', 'none');
    });

    // Close the modal if clicking outside of the modal content
    $(window).click(function(event) {
        if ($(event.target).hasClass('modal')) {
            $(event.target).css('display', 'none');
        }
    });

    
});

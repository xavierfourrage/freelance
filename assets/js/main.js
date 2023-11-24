"use strict";
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function contactme(){
    const name = document.getElementById('input-name').value;
    const email = document.getElementById('input-email').value;
    const phoneNumber = document.getElementById('input-phone').value;
    const message = document.getElementById('input-message').value;

    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if name, email, and message are empty
    if (name.trim() === '') {
        alert("You need to enter a value for name.");
        return;
    }
    if (email.trim() === '') {
        alert("You need to enter a value for email.");
        return;
    }
    if (!email.match(emailFormat)) {
        alert("Please enter a valid email address.");
        return;
    }
    if (message.trim() === '') {
        alert("You need to enter a value for message.");
        return;
    }

    // Log the retrieved values in the console (for demonstration)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('Message:', message);

    // Simulate sending an email by logging a message
    console.log('Sending email to fourragexavier@gmail.com');
    var req=  { "sender":
                        {"name":"Xavier Fourrage",
                        "email":"fourragexavier@gmail.com"
                            },
                 "to":[  
                        {  
                            "email":"fourragexavier@gmail.com",
                            "name":"Xavier Fourrage"
                        }
                        ],
                "subject":"Freelance Oportunity!",
                "htmlContent":`name: ${name} <br> email:${email} <br> phone: ${phoneNumber} <br> message: ${message}`
    };
    
    $.ajax({
        url: "https://api.brevo.com/v3/smtp/email",
        type: 'POST',
        dataType: 'text',
        contentType: 'application/json',
        headers: {
            'accept': 'application/json',
            'api-key':'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',
            'content-type': 'application/json'
       },
       data: JSON.stringify(req),
        success: function () {
            const isSentMessage = document.createElement('h5');
            isSentMessage.textContent = "Your message has been sent! I\'ll get back to you shortly.";
            const messagesDiv = document.getElementById('result');
            messagesDiv.appendChild(isSentMessage);
        },
        error: function(){
          alert("Your message could not be sent. As a workaround, you can reach me on Linkedin.");
        }
    });
}

jQuery(document).ready(function ($) {

	$(window).load(function () {
		$(".loaded").fadeOut();
		$(".preloader").delay(1000).fadeOut("slow");
	});

    /*---------------------------------------------*
     * Mobile menu
     ---------------------------------------------*/
    $('#navbar-collapse').find('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 40)
                }, 1000);
                if ($('.navbar-toggle').css('display') != 'none') {
                    $(this).parents('.container').find(".navbar-toggle").trigger("click");
                }
                return false;
            }
        }
    });



    /*---------------------------------------------*
     * Portfolio  Masonry
     ---------------------------------------------*/

//    $('.portfolio').masonry({
//        itemSelector: '.col-sm-4',
//        percentPosition: true
//    });

    /*---------------------------------------------*
     * STICKY scroll
     ---------------------------------------------*/

//    $.localScroll();



    /*---------------------------------------------*
     * Counter 
     ---------------------------------------------*/

//    $('.statistic-counter').counterUp({
//        delay: 10,
//        time: 2000
//    });


    /*---------------------------------------------*
     * Parallax
     ---------------------------------------------*/


//    parallaxInit();
//
//    function parallaxInit() {
//        $('.home-wrap').parallax("30%", 0.3);
//    }


    /*---------------------------------------------*
     * WOW
     ---------------------------------------------*/
 
//        var wow = new WOW({
//            mobile: false // trigger animations on mobile devices (default is true)
//        });
//        wow.init();
   

/* ---------------------------------------------------------------------
     Carousel
     ---------------------------------------------------------------------= */

//    $('.testimonials').owlCarousel({
//        responsiveClass: true,
//        autoplay: false,
//        items: 1,
//        loop: true,
//        dots: true,
//        autoplayHoverPause: true
//
//    });


    //End
	
	//Menu Background Change
	
	var windowWidth = $(window).width();
    if (windowWidth > 757) {

        
          
            $(window).scroll(function () {
                if ($(this).scrollTop() > 500) {
                    $('.navbar').fadeIn(500);
                    $('.navbar').addClass('menu-bg');

                } else {
                    
                    $('.navbar').removeClass('menu-bg');
                }
            });
        
    }
	$('#bs-example-navbar-collapse-1').localScroll();
	
	$(window).scroll(function(){
		if($(this).scrollTop()>200)
		{
			$('.scrollup').fadeIn();
		}
		else
		{
			$('.scrollup').fadeOut();
		}		
	});
	

	
});



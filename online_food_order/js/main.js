// sign up
$(function () {

    const regname = /^[A-Za-z ]{2,}$/
    const regemail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const regpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
    const regcontact = /^[6-9]\d{9}$/



    $("#firstCheck").hide();
    $("#emailCheck").hide();
    $("#pswCheck").hide();
    $("#cPCheck").hide();
    $("#contactCheck").hide();

    let first_no_err = true;
    let email_no_err = true;
    let psw_no_err = true;
    let cp_no_err = true;
    let contact_no_err = true;

    // first name
    $("#f_name").on('keyup', NameChecker)

    function NameChecker() {
        let data = $('#f_name').val();
        console.log("f_name", data);
        if (data.length < 1) {
            $("#firstCheck").show();
            $("#firstCheck").html("* required field");
            first_no_err = false;
        }
        else if (!regname.test(data)) {
            $("#firstCheck").show();
            $("#firstCheck").html("* please enter atleast 4 letter");
            first_no_err = false;
        }
        else {
            $("#firstCheck").hide();
            first_no_err = true;
        }
    }

    // email
    $("#email").on('keyup', emailChecker)

    function emailChecker() {
        let data2 = $('#email').val();
        console.log("email", data2);
        if (data2.length < 1) {
            $("#emailCheck").show();
            $("#emailCheck").html("* required field");
            email_no_err = false;
        }
        else if (!regemail.test(data2)) {
            $("#emailCheck").show();
            $("#emailCheck").html("* not valid");
            email_no_err = false;
        }
        else {
            $("#emailCheck").hide();
            email_no_err = true;
        }
    }

    // password
    $("#psw").on('keyup', pswChecker)

    function pswChecker() {
        let data3 = $('#psw').val();
        console.log("psw", data3);
        if (data3.length < 1) {
            $("#pswCheck").show();
            $("#pswCheck").html("* required field");
            psw_no_err = false;
        }
        else if (!regpassword.test(data3)) {
            $("#pswCheck").show();
            $("#pswCheck").html("not valid");
            psw_no_err = false;
        }
        else {
            $("#pswCheck").hide();
            psw_no_err = true;
        }
    }

    // confirm password
    $("#c_psw").on('keyup', cpChecker)

    function cpChecker() {
        let data4 = $('#c_psw').val();
        console.log("c_psw", data4);
        if (data4.length < 1) {
            $("#cPCheck").show();
            $("#cPCheck").html("* required field");
            cp_no_err = false;
        }
        else if (!regpassword.test(data4)) {
            $("#cPCheck").show();
            $("#cPCheck").html("* min length 4");
            cp_no_err = false;
        }
        else {
            $("#cPCheck").hide();
            cp_no_err = true;
        }
    }

    // contact
    $("#contact").on('keyup', contactChecker)

    function contactChecker() {
        let data5 = $('#contact').val();
        console.log("contact", data5);
        if (data5.length < 1) {
            $("#contactCheck").show();
            $("#contactCheck").html("* enter 10 digit");
            contact_no_err = false;
        }
        else if (!regcontact.test(data5)) {
            $("#contactCheck").show();
            $("#contactCheck").html("* enter  10 digit");
              contact_no_err = false;
        }
        else {
            $("#contactCheck").hide();
              contact_no_err = true;
        }
    }


    $("#rForm").submit(function () {
        NameChecker();
        emailChecker();
        pswChecker();
        cpChecker();
        contactChecker();
        if ( first_no_err == true && email_no_err == true && psw_no_err == true && cp_no_err == true &&  contact_no_err == true) {
            return true;
        }
        else {
            return false;
        }
    })
})
// login
$(function () {

    const regemail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const regpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/



    $("#emailCheck").hide();
    $("#pswCheck").hide();

    let email_no_err = true;
    let psw_no_err = true;

    // email
    $("#email").on('keyup', emailChecker)

    function emailChecker() {
        let data2 = $('#email').val();
        console.log("email", data2);
        if (data2.length < 1) {
            $("#emailCheck").show();
            $("#emailCheck").html("* required field");
            email_no_err = false;
        }
        else if (!regemail.test(data2)) {
            $("#emailCheck").show();
            $("#emailCheck").html("* not valid");
            email_no_err = false;
        }
        else {
            $("#emailCheck").hide();
            email_no_err = true;
        }
    }

    // password
    $("#psw").on('keyup', pswChecker)

    function pswChecker() {
        let data3 = $('#psw').val();
        console.log("psw", data3);
        if (data3.length < 1) {
            $("#pswCheck").show();
            $("#pswCheck").html("* required field");
            psw_no_err = false;
        }
        else if (!regpassword.test(data3)) {
            $("#pswCheck").show();
            $("#pswCheck").html("not valid");
            psw_no_err = false;
        }
        else {
            $("#pswCheck").hide();
            psw_no_err = true;
        }
    }

    $("#rForm").submit(function () {
        emailChecker();
        pswChecker();
        if (email_no_err == true && psw_no_err == true) {
            return true;
        }
        else {
            return false;
        }
    })
});
// gallery
 var swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 20,
  speed: 2000,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: { slidesPerView: 2 },
    576: { slidesPerView: 3 },
    768: { slidesPerView: 4 },
    992: { slidesPerView: 5 }
  }
});
// team part
var teamSwiper = new Swiper(".teamSwiper", {
    slidesPerView: 4,
    spaceBetween: 10,
    navigation: {
        nextEl: ".team-next",
        prevEl: ".team-prev",
    },
    breakpoints: {
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
    },
});
// aos
 AOS.init();

// sticky navbar
$(document).ready(function () {
    var navbar = $('.sticky-navbar');
    var stickyOffset = navbar.offset().top;

    $(window).scroll(function () {
        if ($(window).scrollTop() > stickyOffset) {
            navbar.addClass('sticky');
        } else {
            navbar.removeClass('sticky');
        }
    });
});
//  contact

$(function () {

    const regname = /^[A-Za-z ]{4,}$/;
    const regemail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regplace = /^[A-Za-z\s,-]{3,50}$/;
    const regcontact = /^[6-9]\d{9}$/;
    const regmessage = /^[A-Za-z0-9\s.,!?'"()-]{10,300}$/;

    $(".error").hide();

    let first_no_err = true;
    let email_no_err = true;
    let place_no_err = true;
    let contact_no_err = true;
    let message_no_err = true;

    // Name
    $("#f_name").on('keyup', function () {
        let data = $(this).val();
        if (data === "") {
            $("#firstCheck").show().html("* Required field");
            first_no_err = false;
        } else if (!regname.test(data)) {
            $("#firstCheck").show().html("* Minimum 4 letters");
            first_no_err = false;
        } else {
            $("#firstCheck").hide();
            first_no_err = true;
        }
    });

    // Email
    $("#email").on('keyup', function () {
        let data = $(this).val();
        if (data === "") {
            $("#emailCheck").show().html("* Required field");
            email_no_err = false;
        } else if (!regemail.test(data)) {
            $("#emailCheck").show().html("* Invalid email");
            email_no_err = false;
        } else {
            $("#emailCheck").hide();
            email_no_err = true;
        }
    });

    // Place
    $("#place").on('keyup', function () {
        let data = $(this).val();
        if (data === "") {
            $("#placeCheck").show().html("* Required field");
            place_no_err = false;
        } else if (!regplace.test(data)) {
            $("#placeCheck").show().html("* Invalid place");
            place_no_err = false;
        } else {
            $("#placeCheck").hide();
            place_no_err = true;
        }
    });

    // Contact
    $("#contact").on('keyup', function () {
        let data = $(this).val();
        if (!regcontact.test(data)) {
            $("#contactCheck").show().html("* Enter valid 10 digit number");
            contact_no_err = false;
        } else {
            $("#contactCheck").hide();
            contact_no_err = true;
        }
    });

    // Message
    $("#message").on('keyup', function () {
        let data = $(this).val();
        if (data === "") {
            $("#messageCheck").show().html("* Required field");
            message_no_err = false;
        } else if (!regmessage.test(data)) {
            $("#messageCheck").show().html("* Minimum 10 characters");
            message_no_err = false;
        } else {
            $("#messageCheck").hide();
            message_no_err = true;
        }
    });

    // Submit
    $("#rForm").on("submit", function (e) {

        e.preventDefault(); 

        $("#f_name").keyup();
        $("#email").keyup();
        $("#place").keyup();
        $("#contact").keyup();
        $("#message").keyup();

        if (first_no_err && email_no_err && place_no_err && contact_no_err && message_no_err) {
            this.submit(); 
        }
    });

});
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("mybtn").style.display = "block";
    } else {
        document.getElementById("mybtn").style.display = "none";
    }
}


var appop = $('#apppop');
var apply = $('#apply');
var signin = $('.form-signin');

//Bottom Button
$(".mybtn").on('click',function (e) {
    e.preventDefault();
    var target = this.hash,
        $target = $("#header");
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 800, 'swing', function () {
        window.location.hash = target;
    });
    apply.css("left", "-80px");
    appop.css("opacity", "0");
    appop.css("pointer-events", "none");
    signin.css("display", "none");

});


//Arrow Click
$('.apply').on('click',function (e){
    e.preventDefault();
    if(apply.css("left") == "-80px"){
        $('#apply').css("left", "10px");
        appop.css("opacity", "1");
        appop.css("pointer-events", "auto");
    } else {
        $('#apply').css("left", "-80px");
        appop.css("opacity", "0");
        appop.css("pointer-events", "none");
    }
});


//Application Form
appop.click(function() {
    if(signin.css("display") == "block"){
        $('.form-signin').css("display", "none");
    } else {
        $(".form-signin").css("display", "block");
    }
});



//Iframe jump-in
$(document).ready(function() {

    $(window).scroll(function () {
        if ($(window).scrollTop() >= ($(document).height() - $(window).height()-300)) {
            $('#wowprogress').css("left", "0px");
            //$('.arrow').hide();
        } else {
            $('#wowprogress').css("left", "-1300px");
            //$('.arrow').show();
        }
    });

    $('.close').click(function () {
        $('#wowprogress').hide();
    });
});


//Send Form
$("#send").click(function() {
    var name = $("#name").val();
    var email = $("#email").val();
    var contact = $("#contactno").val();
    var message = $("#message").val();
    if (name == "" || email == "" || contactno == "" || message == ""){
        alert("Please Fill All Fields");
    }else{
        if (validateEmail(email)) {
            $("#contactdiv").css("display", "none");
        }else {
            alert('Invalid Email Address');
        }
        function validateEmail(email) {
            var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
            if (filter.test(email)) {
                return true;
            }else {
                return false;
            }
        }
    }
});
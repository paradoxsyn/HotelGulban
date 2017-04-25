$(document).ready(function(){

        var t1 = new TimelineMax();

        var photo = document.getElementById("hotelgulban");
        var tween1 = TweenMax.to(photo, 5, {css:{opacity:1,backgroundColor:"#FF0000"},ease:Power2.easeIn});
        var tween2 = TweenMax.to(photo, 2, {css:{opacity:.2,backgroundColor:"#FF0000"}, ease:Power2.easeOut});
        t1.add(tween2);
        t1.add(tween1);
    });
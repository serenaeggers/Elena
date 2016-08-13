// on page load, all the below commands
$(function(){
// mobile menu opening and closing
    $('#menu-open').click( function(){

        $('#top-nav').animate({top: "0"}, 1000);
        $('#menu-close').fadeIn(0);
        $('#menu-open').fadeOut(0);
    });

    $('#menu-close').click( function(){

        $('#top-nav').animate({top: "-100vh"}, 1000);
        $('#menu-close').fadeOut(0);
        $('#menu-open').fadeIn(0);
    });


});

// SCROLLING
// general nice scrolling function, scrolls to the specified anchor element
function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},2000,'linear');
}

function scrollDownTo(help){
    var aSpot = $("a[name='"+ help +"']");
    $('html,body').animate({scrollTop: aSpot.height},1000,'linear');
}

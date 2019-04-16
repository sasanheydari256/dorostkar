w = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

$(window).bind("load", function() {
    // $("html, body").animate({ scrollTop: 80 }, "slow");
    if (w < 304){
        $(".posted-by").css("padding","0px");
    }
    if(w < 422){
        $("#address-top").hide();
    }
    if (w < 360){
        $(".header-text").css("left","60%");
        $(".header-text").css("width","190px");
        $(".content-div").removeClass("ml-3");
        $(".content-div").removeClass("mr-3");
        $(".content-div").addClass("mr-1");
    }else{
        $("#content-v").addClass("mr-3");
        $("#content-v").addClass("ml-3");
    }
    if (w < 383){
        $(".service1").css("margin-top","25px");
    }else{
        $(".service1").css("margin-top","0px");
    }
    if (w < 613){
        $(".variables").css("margin-left","30%");
        $(".content-div").css("margin-top","2px");
        $("h2").addClass("h3");
        $("h3").addClass("h4");
    }


});



$( window ).resize(function() {

    if($(window).width() < 442){
        $("#address-top").hide();
    }else {
        $("#address-top").show();
    }
    if ($(window).width() < 613){
        $("h2").addClass("h3");
        $("h3").addClass("h4");
        $(".content-div").css("margin-top","2px");
        $(".variables").css("margin-left","30%");
    }else{
        $(".service1").css("margin-top","0px");

        $(".content-div").css("margin-top","-70px");
        $("h2").removeClass("h3");
        $("h3").removeClass("h4");
        $(".variables").css("margin-left","0px");
    }
    if ($(window).width() < 350){
        $(".header-text").css("left","60%");
        $(".header-text").css("width","190px");
        $(".content-div").removeClass("ml-3");
        $(".content-div").removeClass("mr-3");
    }
    if ($(window).width() > 360){
        $(".header-text").css("left","75%");
        $(".header-text").css("width","36%");
        if (!$("#content-end").hasClass("ml-3")){
            $("#content-v").addClass("mr-3");
            $("#content-v").addClass("ml-3");
        }
    }

});
// window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("nav").addClass("fixed-top");
    }else {
        $("nav").removeClass("fixed-top");

    }
}
var div = $( "#text-header2" );

function runIt() {
    if (!div.is(":hidden")) {

setInterval(function(){
    setTimeout(function () {
        div
            .animate({left: "+=800"}, 1500)
            .hide("fast")
            .animate({left: "-=800"}, 1500)
    }, 5000);
    // setTimeout(function () {
        div.slideDown("normal");
    // }, 2000);
},10000);
    }
}
runIt();


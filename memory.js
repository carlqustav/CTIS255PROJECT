
$(function(){
    $("button").click(function() {
        $("#cover").fadeOut(1000);
        $("#main").animate({"background-color":"rgba(0,0,0,0.6)"});
        $("#main").animate({"box-shadow":"rgba(0,0,0,1)"});
    });
});

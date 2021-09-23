$(function () {

    $(".head_inner nav ul li.switch a").on("click", function(){
       $("body").toggleClass("switchMode");
       e.preventDefault();
    });

});
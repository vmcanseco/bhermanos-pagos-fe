
"use strict";

$(document).ready(function () {
    /*$.get("main.html", function (data) {
        $("#main_content").html(data);
    });*/

    $(".action-menu").on("click", function () {
        //$("#main_content").load("form.html");
        var title = $(this).attr("data-title");
        var id= $(this).attr("id");
        $("#module-title").text(title);
        $(".navbar-nav .nav-item.active").removeClass("active");

        if ($(this).hasClass("nav-item")) {
            $(this).addClass("active");
        } else {
            $(this).parent().parent().addClass("active");
        }
        var page=id.concat(".html");
        $.get(page, function (data) {
            $("#main_content").html(data);
        });
    

    });

});



function changeModuleSubtitle(text){
    $("#module-subtile").text(text);
}

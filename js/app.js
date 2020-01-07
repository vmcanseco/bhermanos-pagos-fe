
"use strict";

$(document).ready(function () {
    /*$.get("main.html", function (data) {
        $("#main_content").html(data);
    });*/

    $(".action-menu").on("click", function () {
        //$("#main_content").load("form.html");
        //var title = $(this).attr("data-title");
        ///var id = $(this).attr("id");
        //$("#module-title").text(title);
        /*$("#btn-toggle").attr("aria-expanded", "false");
        $("#btn-toggle").addClass("collapsed");
        $("#navbarNav").removeClass("show");*/
        $(".navbar-nav .nav-item.active").removeClass("active");

        if ($(this).hasClass("nav-item")) {
            $(this).addClass("active");
        } else {
            $(this).parent().parent().addClass("active");
        }
        loadModule(this);
        if ($("#navbarNav").hasClass("show")) {
            $("#btn-toggle").trigger("click");
        }


    });

});



function changeModuleSubtitle(text) {
    $("#module-subtile").text(text);
}

function loadModule(element) {
    var page = $(element).attr("data-page");
    page = page.concat(".html");
    $.get(page, function (data) {
        $("#main_content").html(data);
    });
}

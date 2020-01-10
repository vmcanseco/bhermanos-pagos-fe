"use strict";
var MAX_TIMEOUT_SECONDS = 120 * 1000;
const URL_DISTRIBUTORS_MICROSERVICE = "http://localhost:6080/bhermanos-cobranza-api/api/distribuidores"


function allActiveDistributors() {
    var url = URL_DISTRIBUTORS_MICROSERVICE + "/activos";

    var settings = {
        "crossDomain": true,
        "url": url,
        "method": "GET",
        "async": false,
        "dataType": "json",
        "timeout": MAX_TIMEOUT_SECONDS
    }

    var jqXHR = $.ajax(settings);

    return jqXHR;
}

"use strict";
var MAX_TIMEOUT_SECONDS = 120 * 1000;
const URL_CLIENT_MICROSERVICE = "http://localhost:6080/bhermanos-cobranza-api/api/clientes"

function createClient(client) {

    var url = URL_CLIENT_MICROSERVICE;

    console.log("Submit URL " + url);
    console.log(JSON.stringify(client));

    var settings = {
        "crossDomain": true,
        "url": url,
        "method": "POST",
        "data": JSON.stringify(client),
        "contentType": "application/json; charset=utf-8",
        "dataType": "json",
        "async": false,
        "timeout": MAX_TIMEOUT_SECONDS
    }

    var jqXHR = $.ajax(settings);

    return jqXHR;
}

function updateClient(id, client) {

    var url = URL_CLIENT_MICROSERVICE + "/" + id;

    console.log("Submit URL " + url);
    console.log(JSON.stringify(client));

    var settings = {
        "crossDomain": true,
        "url": url,
        "method": "PUT",
        "data": JSON.stringify(client),
        "contentType": "application/json; charset=utf-8",
        "dataType": "json",
        "async": false,
        "timeout": MAX_TIMEOUT_SECONDS
    }

    var jqXHR = $.ajax(settings);

    return jqXHR;
}


function checkINE(ine) {
    var url = URL_CLIENT_MICROSERVICE + "/exists?ine=" + ine;

    var settings = {
        "crossDomain": true,
        "url": url,
        "method": "GET",
        "async": false,
        "timeout": MAX_TIMEOUT_SECONDS
    }

    var jqXHR = $.ajax(settings);

    return jqXHR;
};

function findClientById(id) {
    var url = URL_CLIENT_MICROSERVICE + "/" + id;

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
};

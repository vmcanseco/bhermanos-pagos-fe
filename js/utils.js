function emailFormatter(value) {

    return '<a href="mailto:' + value + '"><u>' + value + '</u></a>';
}

function getClientId() {
    return localStorage.getItem("currentClientId");
}
function serializeForm(formId) {
    var o = {};
    var a = $(formId).serializeArray();

    $.each(a, function () {
        var componentName = this.name;
        console.log("component_name " + componentName);
        if (this.value.trim() !== "") {
            if (o[componentName]) {
                if (!o[componentName].push) {
                    o[componentName] = [o[componentName]];
                }
                o[componentName].push(this.value || '');
            } else {
                o[componentName] = this.value || '';
            }
        }

    });
    return o;
};


function showAlert(title, message, alert) {
    swal({
        title: title,
        text: message,
        icon: alert,
    });
}

function showAlertAsHTML(title, htmlmessage, alert) {
    swal({
        title: title,
        content: htmlmessage,
        icon: alert,
    });
}

function moneyFormatter(value) {
    return "$ " + value;
}

function voucherType(value) {
    var result = "";
    switch (value) {
        case "V":
            result = "Vale";
            break;
        case "C":
            result = "Contravale";
            break;
        default:
            result = value;

    }
    return result;
}

function paymentStatus(value) {
    if (value === "Y") {
        return "Liquidado";
    } else {
        return "Pendiente";
    }
}


function totalMoneyFormatter(data) {
    var field = this.field
    return '$' + data.map(function (row) {
        return +row[field]
    }).reduce(function (sum, i) {
        return sum + i
    }, 0)
}

function totalFormatter(data) {
    return "Total";
}

function totalVochersFormatter(data) {
    var text = " Vale."
    if (data.length > 0) {
        text = " Vales."
    }
    return data.length + " Vale";
}
function clearSelect(element) {
    $(element)
        .find('option')
        .remove();
}
function fillSelect(element, value, text) {
    console.log(element + " " + value + " " + text);
    $(element).append('<option value="' + value + '">' + text + '</option>');
}

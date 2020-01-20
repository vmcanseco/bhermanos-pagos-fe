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

function paymentDayFormmatter(value) {
    if (value === 1) {
        return "Inicio de Mes";
    } else {
        return "Fin de Mes";
    }
}


function totalMoneyFormatter(data) {
    var field = this.field;
    var arrFields = [];
    arrFields = field.split(".");
    return '$' + data.map(function (row) {
        var value;
        var tempRow = row;
        arrFields.forEach(element => {
            value = tempRow[element];
            tempRow = value;
        });
        return + value//row[field]
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

function fillClientForm(data, form) {
    $.each(data, function (key, val) {
        $("#" + form + " :input[name='" + key + "']").val(val);
        console.log(key);
        if (key === "activo") {
            var active = "Inactivo";
            if (val === "Y") {
                active = "Activo"
            }

            //$("#txt-active").val(active);
        }
    });
}

function loadDistributors(element) {
    clearSelect("#" + element);
    var jqXHR = allActiveDistributors().done(function (data, textStatus, jqXHR) {
        console.log(data);

        $.each(data, function (index, value) {
            console.log(index + " " + data[index]);
            fillSelect("#" + element, value.id, value.numero + " " + value.nombre);
        });
    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log(jqXHR.responseText);
        console.log(errorThrown);
        showAlert("BHermanos", jqXHR.responseText, "error");
    });
}
function loadAvailableClientVouchers(element, clientId) {
    clearSelect("#" + element);
    fillSelect("#" + element, "", "Elija un Vale");
    var jqXHR = findValidVouchersByClientId(clientId).done(function (data, textStatus, jqXHR) {
        console.log(data);

        $.each(data, function (index, value) {
            console.log(index + " " + data[index]);
            fillSelect("#" + element, value.id, value.tipo + value.folio + " - Disponible $ " + value.montoDisponible);
        });
    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log(jqXHR.responseText);
        console.log(errorThrown);
        showAlert("BHermanos", jqXHR.responseText, "error");
    });
}
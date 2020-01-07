function emailFormatter(value) {

    return '<a href="mailto:' + value + '"><u>' + value + '</u></a>';
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
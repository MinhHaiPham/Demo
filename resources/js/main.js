$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

$(".form_datetime").datetimepicker({
    format: "dd MM yyyy - hh:ii",
    autoclose: true,
    todayBtn: true,
    pickerPosition: "bottom-right"
});
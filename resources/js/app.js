var $ = require('jquery');

export default (function () {
    'use strict';

    // Save a reference to the global object
    var root = window;
    var App = root.App = window.App || {};

    App.$ = $;

    // Versioning
    App.version = "0.0.1";

    // Feature detection
    App.support = App.support || {};
    App.support.touch = 'ontouchstart' in window;


    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    $(".form_datetime").datetimepicker({
        format: "dd MM yyyy - hh:ii",
        autoclose: true,
        todayBtn: true,
        pickerPosition: "bottom-right"
    });

    return App;

}).call(this);
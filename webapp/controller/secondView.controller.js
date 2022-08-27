sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/emp/empproject7/model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/core/routing/History"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,formatter, Filter, FilterOperator) {
        "use strict";

        return Controller.extend("com.emp.empproject7.controller.secondView", {
            formatter : formatter,
            onInit: function () {
                
            }
           

        });
    });
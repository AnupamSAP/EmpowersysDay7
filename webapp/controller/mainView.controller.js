sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/emp/empproject7/model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/m/Token"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,formatter, Filter, FilterOperator, Token) {
        "use strict";

        return Controller.extend("com.emp.empproject7.controller.mainView", {
            formatter : formatter,
            onInit: function () {
                     
                    var oModel = this.getOwnerComponent().getModel();
                    oModel.read("/Products",{
                        success : function(oData){
                             
                            //handle the logic
                        },
                        error : function(oResponse){
                            //handle the logic
                        }

                    });
                    oModel.read("/Products(1)",{
                        success : function(oData){
                             
                            //handle the logic
                        },
                        error : function(oResponse){
                            //handle the logic
                        }

                    });
            },
            onPressProductValueHelp:function(){
                 
                if(!this.ProductDialog){
                    this.ProductDialog = sap.ui.xmlfragment(this.getView().getId(),"com.emp.empproject7.fragments.ProductSelectDailog", this);
                    this.getView().addDependent(this.ProductDialog);
                }
                this.ProductDialog.open();
            },
            onApproveDialogClose:function(oEvt){
                var aSeledctedItem = oEvt.getParameter("selectedItems");
                var inputProduct = this.getView().byId("ProdId");
                var aToken = [] ;
                for(var i=0;i<aSeledctedItem.length ; i++){
                    aToken.push(
                        new Token ({ text : aSeledctedItem[i].getTitle(), key:i })
                    );
                }
                inputProduct.setTokens(aToken);
                this.fnComplexFilter(aSeledctedItem);
            },
            fnComplexFilter :function(aSeledctedItem){
                var aFilter = [];
                var oList =  this.getView().byId("idList");
                for(var i=0;i<aSeledctedItem.length;i++){
                    aFilter.push(
                        new Filter({
                            path : "ProductName",
                            operator : FilterOperator.Contains,
                            value1: aSeledctedItem[i].getTitle()
                        })
                    );
                }
                oList.getBinding("items").filter(aFilter,"Application");
            },
            onDeleteToken:function(oEvt){
                debugger;
                var sDeletedToken = oEvt.getParameter("removedTokens")[0].getText();
            },
            
            onSearch : function(oEvt){
                var sValue = oEvt.getParameter("newValue");
                var oList =  this.getView().byId("idList");
                var ofilter = new Filter({
                    path : "ProductName",
                    operator : FilterOperator.Contains,
                    value1 : sValue
                });
                oList.getBinding("items").filter(ofilter,"Application");
            },
            onPress:function(){
                // var oRouter =  sap.ui.core.UIComponent.getRouterFor(this);
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("secondView");
            },
            onSort:function(oEvt){
                var oList =  this.getView().byId("idList");
                var oSort = new sap.ui.model.Sorter(
                    "ProductName", false
                );
                oList.getBinding("items").sort(oSort,"Application");
            },
            // onNext:function(){
            //     var oRouter =  sap.ui.core.UIComponent.getRouterFor(this);
            //     oRouter.navTo("secondView");
            // },
        });
    });

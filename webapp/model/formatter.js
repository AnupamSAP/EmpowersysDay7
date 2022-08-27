sap.ui.define(function(){
    var Formatter = {
           statusText : function(sStatus){
                //if price is > 20 --> High Price
            // if price is < 20 --> Low Price
                if(sStatus > 20){
                    return "High Price";
                }
                else if(sStatus < 20){
                    return "Low Price";
                }
                else{
                    return "Netural Price"
                }
           },
           status: function(sText){
                if(sText > 20){
                    return "Error";
                }
                else if(sText < 20){
                    return "Success";
                }
                else{
                    return "None"
                }
           }
    };
     return Formatter;
})



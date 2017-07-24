var month = function() {
var monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dev"];
return { name : function(num) {return monthNames[num];},
         number : function(name) {return monthNames.indexOf(name);}
       };
}();
klmlkmlkmklm

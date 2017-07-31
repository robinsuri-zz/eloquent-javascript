 var field = document.querySelector("input");
 var forbiddenChar = ['Q', 'W', 'X', 'q', 'x', 'w'];
 var forbiddenCodes = [];
 forbiddenChar.forEach(function(elem) {
     forbiddenCodes.push(elem.charCodeAt(0));
 });klk;lk;lk

 field.addEventListener("keydown", function(event) {
     if (forbiddenCodes.indexOf(event.keyCode) >= 0) {
         event.preventDefault();
     }

 });

'use strict';

var readFile = function (name) {
	var text;
    if (name==="A")
    {
        text = "'use strict'; \
        console.log('Loading A'); \
        var B = require('B'); \
        exports.name = 'A'; \
        exports.run = function () { \
        console.log('robin'); \
         };";

    }
    if (name==="B") {
        text = "'use strict'; \
        console.log('Loading B'); \
        var A = require('A'); \
        exports.name = 'B'; \
        exports.run = function () { \
        console.log(A); \
        };";
    }
    return text;
}

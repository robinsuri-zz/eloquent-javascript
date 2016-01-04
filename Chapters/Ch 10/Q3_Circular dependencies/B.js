'use strict';

console.log("Loading B");

var A = require("A");

exports.name = "B";
exports.run = function () {
    console.log(A);
};


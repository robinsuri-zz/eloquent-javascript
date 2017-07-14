sdfdtopEnv["array"] = function() {
    var arr = [];
    for (var i = 0; i < arguments.length; i++) {
        arr.push(arguments[i]);
    }
    return arr;
}

topEnv["length"] = function(array) {
    return array.length;
}

topEnv["element"] = function(array, n) {
    return array[n];
}

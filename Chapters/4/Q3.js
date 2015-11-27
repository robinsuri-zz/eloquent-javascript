var arrayToList = function(array) {
    var list = {};
    var length = array.length - 1;
    for (var i = length; i >= 0; i--) {
        if (i == length) {
            list.value = array[i];
            list.rest = null;
        } else {
            var subList = {};
            subList.value = array[i];
            subList.rest = list;
            list = subList;
        }
    }
    return list;
}

var listToArray = function(list) {
    var array = [];
    while (list != null) {
        array.push(list.value);
        list = list.rest;
    }
    return array;
}

var prepend = function(elem, list) {
    var sublist = {};
    sublist.value = elem;
    sublist.rest = list;
    return sublist;
}

var nth = function(list, num) {
    var array = listToArray(list);
    return array[num];
}

var recurNth = function(list, num) {
    var newList = recurNthList(list, num);
    return newList.value;
}

var recurNthList = function(list, num) {
    if (num == 0)
        return list;
    var newlist = recurNthList(list, num - 1);
    return newlist.rest;
}


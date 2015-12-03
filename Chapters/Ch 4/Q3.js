var arrayToList = function(array) {
  if(array.length==0)
    return null;
    return prepend(array[0],arrayToList(array.slice(1)));
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

var prependAlternative = function (item, list) { return { value: item, rest: list }; };

var nth = function(list, num) {
     
    var array = listToArray(list);
    return array[num];
}

var recurNth = function(list, num) {
   if(list == null)
    return undefined;
    if (num == 0)
        return list.value;
    return recurNth(list.rest,num-1);
}

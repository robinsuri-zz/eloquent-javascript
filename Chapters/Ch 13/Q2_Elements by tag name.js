function byTagName(node, tagName) {
    var array = [];

    function byTagName(node, tagName, array) {
        var list = node.children;
        for (var i = 0; i < list.length; i++) {
            if (list[i].tagName.toLowerCase() === tagName) {
                array.push(list[i]);
            }
            byTagName(list[i], tagName, array);
        }
        return;
    };
    byTagName(node, tagName, array);
    return array;
}
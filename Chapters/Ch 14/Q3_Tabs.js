<!doctype html>

<div id="wrapper">
    <div data-tabname="one">Tab one</div>
    <div data-tabname="two">Tab two</div>
    <div data-tabname="three">Tab three</div>
</div>
<script>
    function asTabs(node) {
        var children = node.children;
        var divs = [];
        for (var i = 0; i < children.length; i++) {
            divs.push(children[i]);
        }
        var newDiv = document.createElement("div");
        divs.forEach(function(div, i) {
            var button = document.createElement("button");
            if (i != 0) {
                children[i].style = 'display:none';
            } else {
                button.style = "background-color:pink"
            }
            var tabname = children[i].getAttribute('data-tabname');
            button.appendChild(document.createTextNode(tabname));
            button.setAttribute("data-tabname", tabname);
            button.style.width = "50px";
            button.style.height = "20px";
            button.addEventListener("click", function(event) {
                setTagStyle(i);
            });
            newDiv.appendChild(button);
        });
        node.insertBefore(newDiv, node.firstChild);
    }

    function setTagStyle(num) {
        var node = document.querySelector("#wrapper");
        var children = node.children;
        for (var i = 1; i < children.length; i++) {
            if (i - 1 === num) {
                children[i].style = 'display:visible';
                children[0].children[i - 1].style = 'background-color:pink';
            } else {
                children[i].style = 'display:none';
                children[0].children[i - 1].style = 'background-color:default';
            }
        }
    }

    asTabs(document.querySelector("#wrapper"));
</script>
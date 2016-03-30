<html>

<head>
    <style type="text/css">
        .select {
            background: yellow;
        }
    </style>
</head>

<body>
    <input type="text" id="field">
    <div id="suggestions" style="cursor: pointer"></div>

    <script>
        // Builds up an array with global variable names, like
        // 'alert', 'document', and 'scrollTo'
        var terms = [];
        for (var name in window) {
            terms.push(name);
        }
        var index = -1;
        var countTerms;
        var prevIndex = 0;
        document.getElementById("field").addEventListener("keyup", function(event) {
            var keyCode = event.keyCode;
            var suggestions = document.getElementById("suggestions");
            // 38 = up arrow  40 = down arrow
            if (keyCode === 38 && suggestions.textContent !== "") {
                prevIndex = index;
                if (index === -1 || index === 0) {
                    index = countTerms - 1;
                } else {
                    index--;
                }
                if (prevIndex !== -1) {
                    var prevDiv = suggestions.childNodes[prevIndex];
                    prevDiv.className = "";
                }
                var div = suggestions.childNodes[index];
                div.className = "select";

            } else if (keyCode === 40 && suggestions.textContent !== "") {
                prevIndex = index;
                index++;
                if (index > countTerms - 1) {
                    index = 0;
                }
                if (prevIndex !== -1) {
                    var prevDiv = suggestions.childNodes[prevIndex];
                    prevDiv.className = "";
                }
                var div = suggestions.childNodes[index];
                div.className = "select";
            } else if (keyCode === 13 && suggestions.textContent !== "") {
                var textContent = suggestions.childNodes[index].textContent;
                document.getElementById("field").value = textContent;
                suggestions.textContent = "";
                countTerms = 0;
                prevIndex = 0;
                index = -1;
            } else {
                countTerms = 0;
                prevIndex = 0;
                index = -1;
                suggestions.textContent = "";
                var text = document.getElementById("field").value;
                var suggestion = [];
                terms.forEach(function(term) {
                    if (term.startsWith(text)) {
                        countTerms++;
                        var node = document.createElement("div");
                        node.textContent = term;
                        node.addEventListener("click", function() {
                            document.getElementById("field").value = term;
                            suggestions.textContent = "";
                        });
                        suggestions.appendChild(node);
                    }
                });
            }
        });
    </script>
</body>

</html>
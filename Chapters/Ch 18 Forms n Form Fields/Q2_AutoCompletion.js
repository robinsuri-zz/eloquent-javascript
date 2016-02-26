<html>
<head>

</head>
<body>
<input type="text" id="field">
<div id="suggestions" style="cursor: pointer"></div>

<script>
  // Builds up an array with global variable names, like
  // 'alert', 'document', and 'scrollTo'
  var terms = [];
  for (var name in window)
    terms.push(name);
document.getElementById("field").addEventListener("keyup", function(event){
	   document.getElementById("suggestions").textContent = "";
	var text = document.getElementById("field").value;
	var suggestion = [];
terms.forEach(function(term){
if(term.startsWith(text)){
	var node = document.createElement("div");
	node.textContent = term;
	node.addEventListener("click", function() {
        document.getElementById("field").text = term;
        document.getElementById("suggestions").textContent = "";
      });
	 document.getElementById("suggestions").appendChild(node);
}
});
});
</script>
 </body>
</html>
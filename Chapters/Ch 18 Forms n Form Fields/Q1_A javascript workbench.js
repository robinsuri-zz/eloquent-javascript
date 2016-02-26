<html>
<head>

</head>
<body>
<textarea name="code" id="code"></textarea>
 <button type="button" id="button">Run Code</button>
 <div id="ret"></div>
 <script>
document.getElementById("button").addEventListener("click", function(){
	var code = document.getElementById('code').value;
      var func = new Function(code);
      try{
      var ret = func();
       document.getElementById("ret").textContent = ret;
  } catch(e){
      document.getElementById("ret").textContent=e;
});
</script>
 </body>
</html>
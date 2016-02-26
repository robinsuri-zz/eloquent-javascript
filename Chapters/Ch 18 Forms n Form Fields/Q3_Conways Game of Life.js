<html>
<head>

</head>
<body>
<div id="grid"></div>
<button id="next">Next generation</button>

<script>
for(var row = 1;row<=10;row++) {
	var tr = document.createElement("tr");
	for(var col = 1;col<=10;col++) {
	    var td = document.createElement("td");
	    td.id=row+"_"+col;
	    var num = Math.random();
	    if(num <0.5) {
	    td.style.background = 'red';
	    }
	    else {
	    td.style.background = 'green';
        }
	    td.style.width = 20;
	    td.style.height = 20;
	    tr.appendChild(td);
	}
	document.getElementById("grid").appendChild(tr);
}

function getLiveNeighbours(row,col){
    var count = 0;
    count +=isAlive(row-1,col);
    count +=isAlive(row-1,col-1);
    count +=isAlive(row-1,col+1);
    count +=isAlive(row,col-1);
    count +=isAlive(row,col+1);
    count +=isAlive(row+1,col-1);
    count +=isAlive(row+1,col);
    count +=isAlive(row+1,col+1);
    return count;
}
function isAlive(row,col){
	if(row <1 || row>10 || col<1 || col> 10)
		return 0;
  var color = document.getElementById(row+"_"+col).style["background-color"]
  return color === "red" ? 0 : 1;
}
document.getElementById("next").addEventListener("click", function(){
   var colors = [];
	for( var row = 1; row<=10;row++){
		var subcolors = [];
        for( var col = 1;col<=10;col++) {
           var liveNeighbours = getLiveNeighbours(row,col);
           if(isAlive(row,col) === 1){
               if(liveNeighbours < 2 || liveNeighbours > 3)
               {
                 subcolors.push("red");
               }
               if(liveNeighbours === 2 || liveNeighbours ===3){
               	subcolors.push("green");
               }
           }
           else
           {
                if(liveNeighbours === 3){
                	subcolors.push("green");
                }
                else {
                	subcolors.push("red");
                }
           }
        }
        colors.push(subcolors);
	}

	for(var row = 1;row<=10;row++){
		for(var col=1;col<=10;col++){
		document.getElementById(row+"_"+col).style["background-color"] = colors[row][col];
		}
	}
});
</script>
 </body>
</html>
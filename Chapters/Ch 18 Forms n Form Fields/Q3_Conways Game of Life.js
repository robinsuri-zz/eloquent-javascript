/*
var game = function() {
    var game = {};
    game.initboard = function() {
        return [[1,1,1], [1,0,1]];
    }
    game.next = function(board) {
        return [];
    };
    return game;
}();

var board = game.initboard
*/

<html>
  <head>
  </head>
  <body>
<button id="next">Next generation</button>

<script>


draw = function(board) {
  if(document.getElementById('grid') !== null) {
  document.getElementById('grid').remove();
}
  var div = document.createElement('div');
  div.id = 'grid';
  document.body.appendChild(div);
  for(var i = 0;i<10;i++){
      var tr = document.createElement("tr");
    for(var j = 0;j<10;j++) {
      var cell = board[i][j]; // 1== alive 0 == dead
        var td = document.createElement("td");
        td.style.width = 20;
        td.style.height = 20;
        if(cell ===1)
        {
          td.style.background = 'red';
        }
        else if (cell === 0){
          td.style.background = 'green';
        }
    tr.appendChild(td);
    }
    document.getElementById('grid').appendChild(tr);
  }
}
var board = initBoard();
draw(board);
document.getElementById("next").addEventListener("click", function(){
  board = next(board);
  draw(board);

});

function initBoard() {
  var board = [];
  for(var i = 0; i<10;i++){
    var row = [];
    for(var j = 0;j<10;j++) {
      var num = Math.random();
      if(num< 0.5){
         row[j] = 0;
      }
      else {
        row[j] = 1;
      }

    }
    board[i] = row;
  }
  return board;
}

function next(board)
{
    var nextBoard = [];
    var rows = board.length;
    var cols = board[0].length;

    for(var i = 0; i < rows; i++){
      var row = [];
        for(var j = 0;j < cols; j++) {
            var cell = board[i][j];
            var liveNeighbours = getLiveNeighbours(i,j, board);
            if(cell ==1){
              if(liveNeighbours < 2 || liveNeighbours > 3){
                row[j] = 0;
              }
              if(liveNeighbours ===2 || liveNeighbours ===3){
                row[j] = 1;
              }
            }
            else if(cell === 0) {
              if(liveNeighbours ===3){
                row[j] = 1;
              }
              else
              {
                row[j] = 0;
              }
            }
        }
        nextBoard[i] = row;
     }
    return nextBoard;
}

function getLiveNeighbours(i,j,board)
{
   var count = 0;
   count +=isAlive(i-1, j, board);
   count +=isAlive(i-1, j-1, board);
   count +=isAlive(i-1, j+1, board);
   count +=isAlive(i, j-1, board);
   count +=isAlive(i, j+1, board);
   count +=isAlive(i+1, j-1, board);
   count +=isAlive(i+1, j, board);
   count +=isAlive(i+1, j+1, board);
 return count;

}

function isAlive(i,j,board){
     if(i<0 || j<0 || i >= board.length || j >= board[0].length)
         return 0;
     return board[i][j];
}

</script>
</body>
</html>

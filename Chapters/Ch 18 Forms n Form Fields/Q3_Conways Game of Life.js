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

onclicklistener(function() {
    board = next(board);
    draw(board);
})

board = [[0,1,0,1],[1,1,0,0]];
function next(board)
{
    var nextBoard = [];
    var rows = board.length;
    var cols = board[0].length;

    for(var i = 0; i < rows; i++){
        for(var j = 0;j < cols; j++) {
            var cell = board[i][j];
            var liveNeighbours = getLiveNeighbours(i,j, board);
            nextBoard[i][j] =  0 or 1
        }
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



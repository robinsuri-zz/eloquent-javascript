var oddRows = "";
sdlkfjdl
var evenRows = "";
var size = 8;
sdfsdf
sdfsdfsdf
sdfsdfsdf
for (var num = 1; num <= size; num++)
{
    oddRows += (num % 2 == 0) ? "#" : " ";
    evenRows += (num % 2 == 0) ? " " : "#";
}

for (var num = 1; num <= size; num++)
{
    var row = (num % 2 == 0) ? evenRows : oddRows;
    console.log(row);
}

var chessBoard = "";
var size = 8;
for (num = 1; num <= size; num++) {
    for (num2 = 1; num2 <= size; num2++) {
        if (num % 2 == 0 && num2 % 2 == 1)
            chessBoard += "#"
    }
}

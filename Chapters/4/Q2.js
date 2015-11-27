var reverseArray = function(array){
  var revArray=[];
  for(var i =array.length-1;i>=0;i--)
    revArray.push(array[i]);

  return revArray;
}

var reverseArrayInPlace = function(array){
  var length = array.length;
 for(var i=0;i<length/2;i++)
 {
  var start = array[i];
   var end = array[length-i-1];
   array[i]=end;
   array[length-i-1]=start;
 }
  return array;
}

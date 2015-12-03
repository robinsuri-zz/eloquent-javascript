var range = function(start, end, step)
{
  if(typeof step =="undefined"){
    step = start<=end ? 1:-1

  }
        var array = [];

        for (var i = start; i*step <= end*step; i += step)
            array.push(i);

    return array;
}


var sum = function(array)
{
    var length = array.length;
    var sum = 0;
    for (var i = 0; i < length; i++)
    {
        sum += array.[i];
    }
    return sum;
}
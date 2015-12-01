var range = function (start, end, step) {
  step = (typeof step === "undefined"
          ? (start < end ? 1 : -1)
          : step);
  var isFinished = function (n) {
    return start < end ? n > end : n < end;
  }
  var array = [];
  for (var n = start; !isFinished(n); n += step) {
    array.push(n);
  }
  return array;
};

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
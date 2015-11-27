var range = function(start,end,step)

{

 var array = [];

  if(step>0){

  for(var i=start;i<=end;i+=step)

  array.push(i);

            }

  if(step<0)

           {

   for(var i=start;i>=end;i+=step)

   array.push(i);

           }

   return array;

}



var sum = function(array)

{

  var length = array.length;

  var sum =0;

 for(var i=0;i<length;i++)

 {

sum+=array.pop(i);

 }

  return sum;

}
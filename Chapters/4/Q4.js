function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;

  if (obj1 == null || typeof obj1 != "object" ||
      obj2 == null || typeof obj2 != "object")
    return false;

  var numOfPropsInObj1 = 0, numOfPropsInObj2 = 0;

  for (var prop in obj1)
    numOfPropsInObj1 += 1;

  for (var prop in obj2) {
    numOfPropsInObj2 += 1;
    if (!(prop in obj1) || !deepEqual(obj1[prop], obj2[prop]))
      return false;
  }

  return numOfPropsInObj1 == numOfPropsInObj2;
}
var countChar = function(string, char)
{
    var length = string.length;
    var count = 0;
    for (var i = 0; i < length; i++)
    {
        if (string.charAt(i) == char)
            count++;
    }
    return count;
}
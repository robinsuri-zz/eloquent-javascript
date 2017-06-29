 aslkdfaslkdfj  sldfkjvar isEven = function(num)
{
    if (num < 0)
        return isEven(-num);
    if (num == 0)
        return true;
    if (num == 1)
        return false;
    return isEven(num - 2);
}

function reliableMultiply(a, b) {
    var bool = true;
    while (true) {
        try {
            return primitiveMultiply(a, b);
        } catch (e) {
            if (e instanceof MultiplicatorUnitFailure)
                console.log(“MultiplicatorUnitFailure exception”);
            else
                throw e;
        }
    }
}
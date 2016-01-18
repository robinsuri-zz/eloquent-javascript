specialForms["fun"] = function(args, env) {

    return function() {
        if (arguments.length != argNames.length)
            throw new TypeError("Wrong number of arguments");
        var localEnv = Object.create(env);
        for (var i = 0; i < arguments.length; i++)
            localEnv[argNames[i]] = arguments[i];
        return evaluate(body, localEnv);
    };
};
function Sub() {}
function Base() {}
Sub.prototype = Object.create(Base.prototype);
Base.prototype.foo = function() {console.log("Base foo");}
Base.prototype.bar = function() {console.log("Base bar");}
Sub.prototype.baz = function() {console.log("Sub baz");}
Sub.prototype.foo = function() {console.log("Sub foo");}
x = new Sub();
x.foo();
x.baz();
x.bar();
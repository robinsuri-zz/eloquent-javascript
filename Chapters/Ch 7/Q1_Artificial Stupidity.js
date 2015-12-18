
View.prototype.findAll = function(ch) {
    var found = [];
    for (var dir in directions)
    if (this.look(dir) == ch) found.push(dir);
    return found; 
};
View.prototype.find = function(ch) { 
   var found = this.findAll(ch);
   if (found.length == 0)
     return null;
  return randomElement(found);
};
function SmartPlantEater() {
this.energy = 20;
}

SmartPlantEater.prototype.act = function(context){
    var space = context.find(" ");
    if (this.energy >55 && space)
        return {type: "reproduce", direction: space};
    var plant = context.find("*");
    if (plant && this.energy <50)
        return {type: "eat", direction: plant}; if (space)
    return {type: "move", direction: space};
};

animateWorld(new LifelikeWorld(
  ["############################",
   "#####                 ######",
   "##   ***                **##",
   "#   *##**         **  O  *##",
   "#    ***     O    ##**    *#",
   "#       O         ##***    #",
   "#                 ##**     #",
   "#   O       #*             #",
   "#*          #**       O    #",
   "#***        ##**    O    **#",
   "##****     ###***       *###",
   "############################"],
  {"#": Wall,
   "O": SmartPlantEater,
   "*": Plant}
));
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

function Tiger() {
this.energy = 20;
}

Tiger.prototype.act = function(context) {
var space = context.find(" ");
    if (this.energy > 60 && space)
        return {type: "reproduce", direction: space};
        var SmartPlantEater = context.find("O");
    if (SmartPlantEater)
        return {type: "eat", direction: SmartPlantEater}; if (space)
    return {type: "move", direction: space};
};

animateWorld(new LifelikeWorld(
  ["####################################################",
   "#                 ####         ****              ###",
   "#   *  @  ##                 ########       OO    ##",
   "#   *    ##        O O                 ****       *#",
   "#       ##*                        ##########     *#",
   "#      ##***  *         ****                     **#",
   "#* **  #  *  ***      #########                  **#",
   "#* **  #      *               #   *              **#",
   "#     ##              #   O   #  ***          ######",
   "#*            @       #       #   *        O  #    #",
   "#*                    #  ######                 ** #",
   "###          ****          ***                  ** #",
   "#       O                        @         O       #",
   "#   *     ##  ##  ##  ##               ###      *  #",
   "#   **         #              *       #####  O     #",
   "##  **  O   O  #  #    ***  ***        ###      ** #",
   "###               #   *****                    ****#",
   "####################################################"],
  {"#": Wall,
   "@": Tiger,
   "O": SmartPlantEater,
   "*": Plant}
));
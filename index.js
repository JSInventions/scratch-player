//Default values for a Sprite
const broadcast = null, 
spriteName = "Sprite1", 
costumeI = 1, //Costume Index, used
costume = ["costume1", "costume2"], //Has actually be named sprites
x = 0, //No limit, x, y and size, but size could have errors when it's negative
y = 0,
size = 0, //There's no limit, unless smaller than 0 or 1.
rotate = 90, //Rotate between 0 and 359 degrees.
scripts = {} //Only initialized if there's a Sprite() lying around

/**
 * Create a Sprite, it can do such things as:
 * ```
 * import Sprite from "scratch-player"
 * const sprite1 = new Sprite("Sprite1", 1, ["costume1", "costume2"], 0, 0, 100, 90)
 * sprite1.script.greenFlag(sprite1.script.moveSteps(10))
 * ```
 */
export default function Sprite(name, cI, cost, x, y, s, r){
        spriteName = name,
        costumeI = cI,
        costume = cost
        x = y,
        y = x,
        size = s,
        rotate = r,
        scripts = {
            "greenFlag": function(script){
                return eval(script)
            },
            "moveSteps": function(steps){
                x = x + Math.sin(rotate) * steps,
                y = y + Math.cos(rotate) * steps;
            },
            "rotateRightDegrees": function(deg){
                rotate = rotate + deg;
            },
            "rotateLeftDegrees":function(deg){
                rotate = rotate + deg;
            }
        };
};

import express from "express";
/** Used when added a Sprite, and also relies on the layers of Sprites */
let spriteLayers = ["Sprite1"];
function renderSprite() {
    const vm = document.getElementById("tutorial");
    vm.style.width = `${stageWidth}px`;
    vm.style.height = `${stageHeight}px`
    if (vm.getContext) {

        const render = vm.getContext("2d");
        const img = new Image();
        img.src = costume[costumeI];

    } else {
        console.error("[scratch-player] Please upgrade your browser to render Scratch.")
    }

}


/**
 * Create a Sprite, it can do such things as:
 * ```
 * import Sprite from "scratch-player"
 * const sprite1 = new Sprite("Sprite1", 1, ["costume1", "costume2"], 0, 0, 100, 90)
 * sprite1.script.greenFlag(sprite1.script.moveSteps(10))
 * ```
 */

export function Sprite(name, cI, cost, px, py, s, r) {
    /**Only used in broadcasts. */
    let broadcast = null;
    this.spriteName = name; 
    this.costumeI = cI;
    this.costume = cost;
    this.spritex = x;
    this.spritey = y;
    this.size = s;
    this.rotate = r;
    /**
     * Scripts are placed in JavaScript functions when built.
     */
    this.script = {
        /** Motion category */
        "motion": {
            /** The move (10) steps block, this syntax is moveSteps(10). */
            moveSteps: function (steps) {
                x = x + Math.sin(rotate) * steps,
                    y = y + Math.cos(rotate) * steps;
                return 0;
            },
            /** The rotate ↪️ (15) degrees, this symtax is rotateRight(15) */
            rotateRight: function (deg) {
                rotate = rotate + deg;
                return 0;
            },
            /**The rotate ↩️ (15) degrees, this symtax is rotateLeft(15) */
            rotateLeft: function (deg) {
                rotate = rotate - deg;
                return 0;
            },
            /**The go to (random position/mouse) block, this syntax is goto("random position")*/
            goto: function () {
                x = Math.floor(Math.random()) * stage.stageWidth - stage.stageWidth / 2;
                y = Math.floor(Math.random()) * stage.stageHeight - stage.stageHeight / 2;
                return 0;
            },
            /** the go to x:(0) y:(0) block, this syntax is gotoXY(0, 0) */
            gotoXY: function (ax, ay) {
                x = ax;
                y = ay;
                return 0;
            },
        },
        /** Events category */
        "events": {
            /** Green Flag hat block, this syntax is greenFlag( [code] ) */
            greenFlag: function (code) {
                eval(code);
            }
        }
    };
}

/**The Stage*/
export const stage = {
    /** Stage width, you can set it whatever you want */
    "stageWidth": 480,
    /** Stage height, you can set it whatever you want */
    "stageHeight": 360,
    /** Backdrop Index, used when changing a backdrop */
    "backdropI": 1,
    /** Backdrops, they have to be image fils */
    "backdrops": ["backdrop1"]
};
/**
 * Host the scratch renderer
 */
export function Host(path) {
    const app = express();
    app.get("/", function (req, res) {
        res.sendFile(`${path}index.js`)
        console.log("Renderer sent!")
    });
    app.get("/gui", function (req, res) {
        res.sendFile(`${path}\\gui\\index.html`)
        console.log("GUI sent!")
    });
    app.get("/guijs", function (req, res) {
        res.sendFile(`${path}\\gui\\index.js`)
        console.log("JS code for GUI sent!")
    });
    app.listen(3000, function () {
        console.clear()
        console.log(`Project in localhost:3000`);
    });
}

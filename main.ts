//% weight=0 color=#FFBA3B icon="\uf0ad" block="microbitusarthmi"
namespace microbitusarthmi {
    export enum color {
    RED = 63488,
    BLUE = 31,
    GRAY = 33840,
    BLACK = 0,
    WHITE = 65535,
    GREEN = 2016,
    BROWN = 48192,
    YELLOW = 65504
    }
    //% group="1.Basic"  
    //% blockId=cls block="Clear screen color %color1"
    //% weight=101
    export function cls(color1: color):void {
       serial.writeString("cls "+color1.toString()+"\xff\xff\xff")
       basic.pause(100)
    }
}

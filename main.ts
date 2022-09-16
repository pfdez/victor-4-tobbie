input.onButtonPressed(Button.A, function () {
    conter = conter + 2
    basic.showNumber(conter)
})
input.onButtonPressed(Button.AB, function () {
    conter = conter * 2
    basic.showNumber(conter)
})
input.onButtonPressed(Button.B, function () {
    conter = conter / 2
    basic.showNumber(conter)
})
input.onGesture(Gesture.Shake, function () {
    conter = conter - 1
    basic.showNumber(conter)
})
let conter = 0
conter = 0
basic.showNumber(conter)
loops.everyInterval(500, function () {
    if (conter >= 16) {
        TobbieII.shake_head(5)
        TobbieII.forward()
        basic.pause(5000)
        TobbieII.stopwalk()
        TobbieII.rightward()
        basic.pause(2000)
        TobbieII.leftward()
        basic.pause(2000)
        TobbieII.stopturn()
    } else if (conter <= 0) {
        basic.showLeds(`
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            . . . . .
            `)
        basic.pause(1000)
        basic.showLeds(`
            . # . # .
            . # . # .
            # . . . #
            . # # # .
            . . . . .
            `)
    } else {
        basic.showString("" + (input.temperature()))
    }
})

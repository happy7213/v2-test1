input.onButtonPressed(Button.A, function () {
    soundExpression.giggle.playUntilDone()
})
input.onGesture(Gesture.Shake, function () {
    soundExpression.hello.playUntilDone()
})
input.onButtonPressed(Button.B, function () {
    soundExpression.happy.playUntilDone()
})
music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
basic.forever(function () {
    if (input.lightLevel() < 30) {
        basic.showNumber(randint(1, 6))
        soundExpression.hello.playUntilDone()
        basic.clearScreen()
    }
})

input.onButtonPressed(Button.A, function () {
    soundExpression.giggle.playUntilDone()
})
input.onGesture(Gesture.SixG, function () {
    soundExpression.twinkle.playUntilDone()
})
input.onGesture(Gesture.Shake, function () {
    soundExpression.hello.playUntilDone()
})
input.onButtonPressed(Button.B, function () {
    soundExpression.happy.playUntilDone()
})
music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
basic.forever(function () {
    if (input.lightLevel() < 100) {
        soundExpression.yawn.playUntilDone()
    }
})

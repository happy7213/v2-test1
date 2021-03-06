input.onButtonPressed(Button.A, function () {
    soundExpression.hello.playUntilDone()
    led.plotBarGraph(
    input.lightLevel(),
    256
    )
})
input.onGesture(Gesture.EightG, function () {
    soundExpression.giggle.playUntilDone()
    basic.showNumber(randint(1, 6))
    basic.pause(2000)
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    soundExpression.hello.playUntilDone()
    basic.showString("" + (input.temperature()))
})
music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
basic.forever(function () {
	
})

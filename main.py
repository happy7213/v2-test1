def on_logo_pressed():
    basic.show_number(randint(1, 6))
    soundExpression.hello.play_until_done()
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

def on_button_pressed_a():
    soundExpression.giggle.play_until_done()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    soundExpression.happy.play_until_done()
input.on_button_pressed(Button.B, on_button_pressed_b)

music.start_melody(music.built_in_melody(Melodies.POWER_UP), MelodyOptions.ONCE)

def on_forever():
    if input.light_level() < 30:
        pass
    else:
        pass
basic.forever(on_forever)

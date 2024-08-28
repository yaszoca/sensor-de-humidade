let umidade = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P1))
})
basic.forever(function () {
    umidade = 0
    if (umidade > 1000) {
        basic.showIcon(IconNames.Square)
    } else if (umidade > 401) {
        basic.showIcon(IconNames.Happy)
    } else if (umidade > 250) {
        basic.showIcon(IconNames.Confused)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})

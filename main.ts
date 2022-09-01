input.onButtonPressed(Button.A, function () {
    numero += 1
    basic.showNumber(numero)
})
input.onButtonPressed(Button.AB, function () {
    texto = "bye"
})
input.onButtonPressed(Button.B, function () {
    numero += -1
    basic.showNumber(numero)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString(texto)
})
let numero = 0
let texto = ""
texto = "hello"
numero = 0
basic.forever(function () {
	
})

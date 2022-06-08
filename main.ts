input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == 1) {
        servos.P2.setAngle(90)
        basic.showIcon(IconNames.Square)
    }
    if (receivedString == 2) {
        basic.showIcon(IconNames.SmallSquare)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
basic.showIcon(IconNames.Angry)
radio.setGroup(8)
basic.forever(function () {
	
})

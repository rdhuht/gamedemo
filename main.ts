input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
    game.addScore(1)
})
input.onButtonPressed(Button.AB, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    game.removeLife(1)
})
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.Once)
    game.addScore(-1)
})
game.setScore(0)
game.setLife(5)
basic.forever(function () {
    serial.writeValue("score", game.score())
})

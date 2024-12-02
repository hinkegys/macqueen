basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 76)
    basic.pause(1000)
    maqueen.motorStop(maqueen.Motors.All)
})

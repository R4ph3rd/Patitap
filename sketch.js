//to hide instructions
document.addEventListener('keypress', (event) => {
    document.getElementById('instructions').style.display = "none";
  })

//issues : randomSeed reset for all each new play of sound, so colors or orientations can change

var amplitudeMaster
var levelMaster 
var seed  = 1234;
var loop 

var amplitudeA, amplitudeB, amplitudeD, amplitudeK, amplitudeF, amplitudeE, amplitudeG, amplitudeT, amplitudeV
var soundAFFT, soundSFFT, soundCFFT, soundTFFT, soundQFFT, soundHFFT

var biscottes = []
var cordes = []
var cerclesConfiance = []

var pg,pgE,pgC

//o
var amppX = 50
var amppY = 100

//l
var angleL = 20
var speedL = 0.25
var radiusL = 90
var sx = 30
var sy = 30

//q
var angleQ = 20
var speedQ = 0.25
var radiusQ = 50

//x
var sizeX = 0
var sizeY = 0

//values set up in keyPressed() function
//palettes de couleur
var palette = []
var randomColor
var lineColor = []

var redR = [] 
var greenR = [] 
var blueR = []
var couleurF,couleurG,couleurH,couleurI,couleurJ,couleurK,couleurM,couleurN,couleurP,couleurP,couleurT,couleurU,couleurV,couleurY

//animA
var colorsCircles = []
var randomColor = []
var orientationA = []
var directionA = []

var x1H = []
var x2H = []
var xR = []
var yR = []
var directionJ

//c & q
var springs = []
var springQ = []


function preload() {
    soundA = loadSound("assets/mannishboy_riff.wav")
    soundB = loadSound("assets/blueslick1.wav")
    soundC = loadSound("assets/merlin.wav")
    soundD = loadSound("assets/blues_lick_3.wav")
    soundE = loadSound("assets/bbking_loop_jazzy.wav")
    soundF = loadSound("assets/feutre.wav")
    soundG = loadSound("assets/blues_double.wav")
    soundH = loadSound("assets/disco.wav")
    soundI = loadSound("assets/echo_micro.wav")
    soundJ = loadSound("assets/funky.wav")
    soundK = loadSound("assets/gratte_cuillere.wav")
    soundL = loadSound("assets/harmonique.wav")
    soundM = loadSound("assets/jimi.wav")
    soundN = loadSound("assets/j.bonamassa_lick.wav")
    soundO = loadSound("assets/jump_wah_wah.wav")
    soundP = loadSound("assets/retour_lick.wav")
    soundQ = loadSound("assets/rebond_basse.wav")
    soundR = loadSound("assets/rythm_wahwah.wav")
    soundS = loadSound("assets/slide_317.wav")
    soundT = loadSound("assets/dumiel.wav")
    soundU = loadSound("assets/watchtower_lick.wav")
    soundV = loadSound("assets/western.wav")
    soundW = loadSound("assets/fin.wav")
    soundX = loadSound("assets/saute_de_veau.wav")
    soundY = loadSound("assets/tap_slide.wav")
    soundZ = loadSound("assets/stevieRAY.wav")
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    background(0, 40);
    pixelDensity(1)
    //no loop of backing tracks
    loop = 0
    
    //tous les analysers de son
    amplitudeMaster = new p5.Amplitude()

    amplitudeA = new p5.Amplitude()
    amplitudeA.setInput(soundA)
    amplitudeB = new p5.Amplitude()
    amplitudeB.setInput()
    amplitudeD = new p5.Amplitude()
    amplitudeD.setInput(soundD)
    amplitudeF = new p5.Amplitude()
    amplitudeF.setInput(soundF)
    amplitudeO = new p5.Amplitude()
    amplitudeO.setInput(soundO)
    amplitudeI = new p5.Amplitude()
    amplitudeI.setInput(soundI)
    amplitudeE = new p5.Amplitude()
    amplitudeE.setInput(soundE)
    amplitudeG = new p5.Amplitude()
    amplitudeG.setInput(soundG)
    amplitudeT = new p5.Amplitude()
    amplitudeT.setInput(soundT)
    amplitudeV = new p5.Amplitude()
    amplitudeV.setInput(soundV)

    soundAFFT = new p5.FFT(0.8, 16)
    soundAFFT.setInput(soundA)
    soundCFFT = new p5.FFT(0.8, 16)
    soundCFFT.setInput(soundC)
    soundSFFT = new p5.FFT(0.8, 16)
    soundSFFT.setInput(soundS)
    soundTFFT = new p5.FFT(0.8, 16)
    soundTFFT.setInput(soundT)
    soundQFFT = new p5.FFT(0.8, 16)
    soundQFFT.setInput(soundQ)
    soundHFFT = new p5.FFT(0.8, 16)
    soundHFFT.setInput(soundH)

    //for color palette, helped by a sketch of @GotoLoop, sketch online at https://forum.processing.org/two/discussion/17621/array-of-colors#Item_1
    palette[0] = color(154, 202, 62)
    palette[1] = color(151, 71, 140)
    palette[2] = color(212, 42, 41)
    palette[3] = color(252, 217, 76)
    palette[4] = color(74, 184, 219)
    palette[5] = color(255, 140, 231)
    palette[6] = color(30, 25, 106)
    palette[7] = color(241, 101, 39)

    lineColor[0] = color(232,223,205,15)
    lineColor[1] = color(171,4,21,15)



    xpos = 200
    ypos = 7 * height / 8


    /* a = 150 / height
     b = 70 / width
*/
    //pour anim2
    Xrect = 0.043 * width
    Yrect = 0.203804 * height //reponsive !
    pg = createGraphics(width, height)

    pgE = createGraphics(width, height)
    pgC = createGraphics(width, height)

}

function draw() {
    randomSeed(seed);
    background(0, 40)
    
    //to display instructions if no sounds have been played since 3sec
    levelMaster = amplitudeMaster.getLevel()

    musicPlay(soundA, 65) //a
    musicPlay(soundB, 66) //b
    musicPlay(soundC, 67) //c
    musicPlay(soundD, 68) //d
    musicPlay(soundE, 69) //e
    musicPlay(soundF, 70) //f
    musicPlay(soundG, 71) //g
    musicPlay(soundH, 72) ////h
    musicPlay(soundI, 73) //i
    musicPlay(soundJ, 74) //j
    musicPlay(soundK, 75) //k
    musicPlay(soundL, 76) //l
    musicPlay(soundM, 77) //m
    musicPlay(soundN, 78) //n
    musicPlay(soundO, 79) //o
    musicPlay(soundP, 80) //p
    musicPlay(soundQ, 81) //q
    musicPlay(soundR, 82) //r
    musicPlay(soundS, 83) //s
    musicPlay(soundT, 84) //t
    musicPlay(soundU, 85) //u
    musicPlay(soundV, 86) //v
    musicPlay(soundW, 87) //w 
    musicPlay(soundX, 88) //x
    musicPlay(soundY, 89) //y
    musicPlay(soundZ, 90) //z

       //is loop activated ?
       if (loop){
        soundA.setLoop(true)
        soundZ.setLoop(true)
        soundE.setLoop(true)
        soundR.setLoop(true)
    } else {
        soundA.setLoop(false)
        soundZ.setLoop(false)
        soundE.setLoop(false)
        soundR.setLoop(false)
    }

    // first, in foreground, riffs wich can be repeated as sound background
    //only one except, because this animation change background color
    if (soundL.currentTime() < soundL.duration() - 0.1 && soundL.currentTime() > 0) {
        animL()
    } else background(0,40)

    if (soundE.currentTime() < soundE.duration() - 0.1 && soundE.currentTime() > 0) {
        animE()
    }
    if (soundA.currentTime() < soundA.duration() - 0.1 && soundA.currentTime() > 0) {
        animA()
    }
    if (soundZ.currentTime() < soundZ.duration() - 0.1 && soundZ.currentTime() > 0) {
        animZ()
    } else {
        pg.clear()
        biscottes = []
        transparence = 100
    }
    if (soundR.currentTime() < soundR.duration() - 0.1 && soundR.currentTime() > 0) {
        animR()
    }



    //then short animations
    if (soundO.currentTime() < soundO.duration() - 0.1 && soundO.currentTime() > 0) {
        animO()
    }

    if (soundG.currentTime() < soundG.duration() - 0.1 && soundG.currentTime() > 0) {
        animG()
    }

    if (soundB.currentTime() < soundB.duration() - 0.1 && soundB.currentTime() > 0) {
        animB()
    } 

    if (soundC.currentTime() < soundC.duration() - 0.1 && soundC.currentTime() > 0) {
        animC()
    } else springs = []

    if (soundF.currentTime() < soundF.duration() - 0.1 && soundF.currentTime() > 0) {
        animF()
    }

    if (soundH.currentTime() < soundH.duration() - 0.1 && soundH.currentTime() > 0) { //h
        animH()
    }

    if (soundI.currentTime() < soundI.duration() - 0.1 && soundI.currentTime() > 0) { //i
        animI()
    } 

    if (soundT.currentTime() < soundT.duration() - 0.1 && soundT.currentTime() > 0) {
        animT()
    }
    
    if (soundK.currentTime() < soundK.duration() - 0.1 && soundK.currentTime() > 0) {
        animK()
    }

    if (soundJ.currentTime() < soundJ.duration() - 0.1 && soundJ.currentTime() > 0) {
        animJ()
    } 

    if (soundM.currentTime() < soundM.duration() - 0.1 && soundM.currentTime() > 0) {
        animM()
    }

    if (soundN.currentTime() < soundN.duration() - 0.1 && soundN.currentTime() > 0) {
        animN()
    }

    if (soundP.currentTime() < soundP.duration() - 0.1 && soundP.currentTime() > 0) {
        animP()
    }

    if (soundQ.currentTime() < soundQ.duration() - 0.1 && soundQ.currentTime() > 0) {
        animQ()
    } else springQ = []

    if (soundS.currentTime() < soundS.duration() - 0.1 && soundS.currentTime() > 0) {
        animS()
    }

    if (soundU.currentTime() < soundU.duration() - 0.1 && soundU.currentTime() > 0) {
        animU()
    }

    if (soundV.currentTime() < soundV.duration() - 0.1 && soundV.currentTime() > 0) {
        animV()
    }

    if (soundW.currentTime() < soundW.duration() - 0.1 && soundW.currentTime() > 0) { //u
        animW()
    }

    if (soundX.currentTime() < soundX.duration() - 0.1 && soundX.currentTime() > 0) {
        animX()
    }

    if (soundY.currentTime() < soundY.duration() - 0.1 && soundY.currentTime() > 0) {
        animY()
    }

    if (soundD.currentTime() < soundD.duration() - 0.1 && soundD.currentTime() > 0) {
        animD()
    }
} //loop

/*
function afficherInstructions(){
    var timer=millis()

    if((timer > 3000) && (levelMaster == 0)){} console.log("on est là !")//document.getElementById('instructions').style.display = "block";
}

*/

//to avoid changes during the play of the sound due to use of random() method
function keyPressed(){
 // activate / desactivate loop condition for 4 backings tracks
 if(keyCode === ENTER){
    if(loop){
        console.log("loop désactivée")
        loop = 0
    } else {
        console.log("loop activée")
        loop = 1
    }
  }

  if(keyIsDown(65) ==true){
    for (let i = 0; i < 4; i++) {
        colorsCircles[i] = random(palette)
    }

        //setup of the colors and rotations of forms
      for (let i = 0; i < 4; i++) {
          colorsCircles[i] = random(palette)
      }
      for (let j = 0; j < height / 2; j = j + 35) {
          randomColor[j] = random(colorsCircles)
          orientationA[j] = random(j)
          directionA[j] = direction = int(random(0, 2) < 1) ? 1 : -1
      }
      
   }
 
  if(keyIsDown(70) ==true){
    couleurF = random(palette)
 }
 
 if(keyIsDown(71) ==true){
    couleurG = random(palette)
 }

 if(keyIsDown(72) ==true){
    for (let w = 0; w < width; w = w = w + 200) {
    x1H[w] = random(width) 
    x2H[w] =  random(width) 
    }
    couleurH = random(palette)
 }

 if(keyIsDown(73) ==true){
    couleurI = random(palette)
 }

 if(keyIsDown(74) ==true){
    couleurJ = random(palette)
    directionJ = random(TWO_PI) //toujours perturbé par les autres random, pourquoi ?
 }

 if(keyIsDown(75) ==true){
    couleurK = random(palette)
 }

 if(keyIsDown(77) ==true){
    couleurM = random(palette)
 }

 if(keyIsDown(78) ==true){
    couleurN = random(lineColor)
 }

 if(keyIsDown(80) ==true){
    couleurP = random(palette)
 }
 
 if(keyIsDown(82) ==true){
    for (let i = 0; i < 25; i++) {
    redR[i] =  random(80)
    greenR[i] = random(250)
    blueR[i] = random(255)
    xR[i] = random(width)
    yR[i] = random(height)
    }
}

 if(keyIsDown(84) ==true){
    couleurT = random(palette)
 }

 if(keyIsDown(85) ==true){
    couleurU = random(palette)
 }

 if(keyIsDown(86) ==true){
    couleurV = random(palette)
 }

 if(keyIsDown(89) ==true){
    couleurY = random(palette)
 }
}

function musicPlay(sound, keyID) {

    if (keyIsDown(keyID) == true) {
        seed = random(9999)
      //  afficherInstructions()
        if (sound.isPlaying() == true) {
            sound.stop()
            sound.play()
        } else {
            sound.play()
        }
    } //ifkeydown


}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
    background(0)
}


function animA() {
    push()

    soundAFFT.analyze()
    let basses = soundAFFT.getEnergy("bass")
    // console.log(basses)
    translate(width / 2, height / 2)

    //select only 4 colors in the palette available
    let angle = TWO_PI / 80

    //define one color + angle per circle, sometimes many side by side can be of the same color
    for (let j = 0; j < height / 2; j = j + 35) {
        //randomColor = random(colorsCircles)

        push()
        rotate(orientationA[j])
        noFill()
        strokeWeight(4)
        strokeCap(SQUARE)
        stroke(randomColor[j])

        //change their position proportionally to the bass freq with randomly direction
        push()
        if (basses > 225) rotate(map(basses, 0, 255, PI / 8, TWO_PI) * directionA[j])
        //display circles
        beginShape()
        for (let i = 0; i < 72; i++) {
            let x = (cos(angle * i) * ((height / 2) - j))
            let y = (sin(angle * i) * ((height / 2) - j))
            vertex(x, y)
        }
        endShape()
        pop()
        pop()
    }
pop()
}


//cercles de totem rectangulaires filaires, avec "vibrations" sur les notes appuyées
function animB() {
    push()
    rectMode(CENTER)
    let levelB = amplitudeB.getLevel()
    // console.log(levelB)
    let seuil = map(levelB, 0, 0.04188412655659618, 0, 100)
    //retrecissement du rect interne par rapport à l'amp
    let miniX = map(levelB, 0, 0.04188412655659618, 50, 5)
    let miniY = map(levelB, 0, 0.04188412655659618, 180, 18)
    //grossissement du rect exterieur par rapport à l'amplitude
    let maxX = map(levelB, 0, 0.04188412655659618, 0, 50)
    let maxY = map(levelB, 0, 0.04188412655659618, 0, 180)
    let minicoin = map(levelB, 0, 0.04188412655659618, 0, 10)


    let totems = 6
    let currentTotem = (map(soundB.currentTime(), 0, soundB.duration(), 0, totems + 1))
    let posXgauche = 0
    let posYgauche = 0
    let posYdroite = 0
    let posXdroite = 0

    push()
    translate(width / 2, height / 2)
    for (let i = 0; i < currentTotem; i++) {

        posXdroite = (height / 4 * -cos(i * PI / 6 + PI / 2))
        posYdroite = (height / 4 * -sin(i * PI / 6 + PI / 2))
        posXgauche = height / 4 * cos(i * PI / 6 + PI / 2)
        posYgauche = height / 4 * -sin(i * PI / 6 + PI / 2)

        noFill()
        strokeWeight(2)
        stroke(255, 38 * i, 0)
        rect(posXdroite, posYdroite, 50 + maxX, 180 + maxY, 10)
        rect(posXgauche, posYgauche, 50 + maxX, 180 + maxY, 10)

        //display vibrating rectangles only f the sound exceed 60 %
        if (seuil > 50) {
            for (let i = 0; i < minicoin; i++) {
                rect(posXdroite, posYdroite, miniX, miniY, minicoin)
                rect(posXgauche, posYgauche, miniX, miniY, minicoin)
            }
        }
    }
    pop()
    pop()
}

//suite de boules tirées par un effet elastique proportionnel au son
//try to launch it several times before the sound ends !
function animC() {
    push()
    soundCFFT.analyze()
    let middle = soundCFFT.getEnergy("mid")
   // console.log(middle)
    let middleSpring = map(middle, 105, 249, -(height / 4), height / 4)
    let timeline = map(soundC.currentTime(), 0, soundC.duration() * 0.65, 50, width - 50)
    //add new spring for each excess of the energy of the range of freq
    if (middle > 105) springs.push(new Spring(timeline, middle, middleSpring))

    for (let i = 0; i < springs.length; i++) {
        springs[i].update();
        springs[i].display();
    }
    pop()
}

function animD() {
    push()
    t = map(soundD.currentTime(), 0, soundD.duration(), 0, 20)
    angleL += speedL * t
    let sinval = sin(angleL)
    let cosval = cos(angleL)
    let x = (width / 2) + (cosval * radiusL)
    let y = (height / 2) + (sinval * radiusL)
    let x2 = x + cos(angleL * sx) * radiusL / 2
    let y2 = y + sin(angleL * sy) * radiusL / 2
    fill(232,223,195)
    noStroke()
    rect(x, y, 25, 25, 2)
    fill(171,4,21)
    rect(x2, y2, 25, 25, 2)
    pop()
}

//inspirée d'un sketch Pde tiré du bouquin "DEsign Generatif" de H. Bohnacker, B. Grob, J. Laub, et C. Lazzeroni publié par Pyramid
function animE() {
    push()
    var levelE = amplitudeE.getLevel()
    // console.log(levelE)

    translate(width / 2, height / 2)
    let vertices = map(levelE, 0, 0.19, 2, 60)
    let nbcircles = 80 // map (soundE.currentTime(),0,soundE.duration(),0,200)
    let angle = TWO_PI / vertices


    noFill()
    strokeWeight(1)
    stroke(156, 120, 10, 255)


    for (let j = 0; j < nbcircles; j++) {
        let radius
        if (j > 40) radius = j / 35
        else radius = j / 40

        stroke(156, 120, 10, nbcircles)
        beginShape()
        for (let i = 0; i < vertices; i++) {
            let x = (cos(angle * i) * ((height / 2) - 100)) / radius
            let y = (sin(angle * i) * ((height / 2) - 100)) / radius
            vertex(x, y)
        }
        endShape(CLOSE)
    }
    pop()
}

function animF() {
    //pulupulu un escargot qui enappelle un autre
    var levelF = amplitudeF.getLevel()
    transparence = 10
    var radius = map(levelF, 0, 0.1, 20, 150) //pour changer le radius des points
    var point = 12
    var currentPoint = map(soundF.currentTime(), 0, soundF.duration(), 0, point + 1)

    push()
    noFill()
    strokeWeight(2)
    stroke(couleurF)
    translate(0, height / 2)
    for (let i = 1; i < currentPoint + 1; i++) {

        ellipse(i * width / 14, 0, radius, radius)
        ellipse(i * width / 14, 0, radius + 15, radius + 15)
        ellipse(i * width / 14, 0, radius + 30, radius + 30)
    }
    pop()
}

function animG() {
    push()
    var levelG = map(amplitudeG.getLevel(), 0, 0.08772784950665151, 0, 100)
    let posX = map(soundG.currentTime(), 0, soundG.duration(), 0, width)
    stroke(couleurG)
    strokeWeight(30)
    if (levelG > 60) line(posX, 0, posX, height)
    pop()
}

function animH() {
    push()
    noFill()
    strokeWeight(5)
    stroke(couleurH)
    soundHFFT.analyze()
    let middle = soundHFFT.getEnergy("highMid")
    //  console.log(middle)
    let varX = map(middle, 0, 123.5, -100, 100)
    let posX = map(soundH.currentTime(), 0, soundH.duration(), 0, width)

    for (let w = 0; w < width; w = w = w + 200) {
        //change their position proportionally to the bass freq with randomly direction
        let direction = int(random(0, 2) < 1) ? 1 : -1
        line(x1H[w] + (varX * direction), 0, x2H[w] + (varX * direction), height)
    }
    pop()
}

function animI() { //i
    let levelI = amplitudeI.getLevel()
    // console.log(levelI)
    var length = map(levelI, 0, 0.042, 0, width / 10)
    push()
    noStroke()
    fill(couleurI)
    translate(width / 2, 0)
    //cacher la fin du son qui n'est plus audible
    if (soundI.currentTime() < soundI.duration()) {
        for (i = 0; i < height; i++) {
            ellipse(length, i, 10, 10)
            ellipse(-length, i, 10, 10)
        }
        pop()
    }

}

function animJ() { //j
    
    //jet de cocobilles
    let t = map(soundJ.currentTime(), 0, soundJ.duration() * 0.60, 0, 1)
    t = constrain(t, 0, 1)

    let xtarget = []
    let ytarget = []

    push()
    noStroke()
    fill(couleurJ)
    //placer le point d'origine dans un cercle de 50px autour du centre de l'écran
    translate(random((width / 2) - 50, (width / 2) + 50), random((height / 2) + 50, (height / 2) - 50))
    //angle de lancé alétoire
    rotate(directionJ)
    for (let i = 0; i < 15; i++) {
        xtarget = random(100, 500)
        ytarget = random(-100, 100)
        let x = lerp(0, xtarget, t)
        let y = lerp(0, ytarget, t)
        ellipse(x, y, 20, 20)
    }
    pop()
}

//la course des pôles d'une ligne !
function animK() {
    push()
    let time = map(soundK.currentTime(), 0, soundK.duration() * 0.75, 0, 1) * 1.4
    time = constrain(time, 0, 1)
    let before = lerp(width / 6, 5 * width / 6, time)
    let after = map(soundK.currentTime(), 0, soundK.duration(), width / 8, 5 * (width / 6)) // départ plus proche du bord pour éviter l'impression de décentrage
    stroke(couleurK)
    strokeWeight(height / 8)
    strokeCap(SQUARE)
    noFill()
    line(before, height / 2, after, height / 2)
    pop()
}

function animL() { //l
    let transp = map(soundL.currentTime(), 0, soundL.duration() - 0.2, 100, 0)
    background(73, 19, 109, transp)
}

function animM() {
    push()
    let radius;
    if (width < height) radius = width / 3
    else radius = height / 3

    stroke(couleurM)
    strokeWeight(5)
    noFill()
    strokeJoin(ROUND)
    let mod = map(soundM.currentTime(), 0, soundM.duration(), TWO_PI, 0.001)

    translate(width / 2, height / 2)
    beginShape();
    for (let i = 0; i < TWO_PI; i += mod) {
        let xpos = radius * cos(i);
        let ypos = radius * sin(i);
        vertex(xpos, ypos);
    }
    endShape(CLOSE);
    pop()

}

function animN() {
    
    push()
    translate(width / 2, height / 2)
    for (let i = 0; i <= 6000; i++) {
        // var angle = i * 24.0 * PI / 10000;
        var angle = map(soundN.currentTime(), 0, soundN.duration(), 2, TWO_PI * 2) * i / 4000
        var x = cos(angle) * ((cos(angle)) - 10 * cos(4 * angle) - pow(sin(angle / 4), 15)) * 40
        var y = sin(angle) * ((cos(angle)) - 10 * cos(4 * angle) - pow(sin(angle / 4), 15)) * 40
        stroke(couleurN)
        strokeWeight(1)
        noFill()
        push()
        rotate(i / 210)
        line(x, y, x + 100, y + 100)
        pop()
    }
    pop()

}

function animO() {
    //circle morph
    push()
    fill(220, 0, 30)
    noStroke()
    //   strokeWeight(2)
    var levelO = amplitudeO.getLevel()
    amppY += 0.05
    amppX += 0.03
    let radiusX = map(levelO, 0, 0.1, 30, 350) * cos(amppX)
    let radiusY = map(levelO, 0, 0.1, 30, 350) * cos(amppY)

    ellipse(width / 2, height / 2, radiusX, radiusY)
    pop()
}

function animP() {
    push()
    let x = map(soundP.currentTime(), 0, soundP.duration(), 0, width)
    noStroke()
    fill(couleurP, 30)
    for (let i = height / 4; i < height; i = i + (height / 4)) {
        let y = i + (sin(x) * 20)
        ellipse(x, y, 20, 20)
    }
    pop()
}

function animQ() {
    push()
    springQ.push(new Spring(100, width - 200))

    springQ[0].update();
    springQ[0].displayQ();
    pop()
}

function animR() {
    //rectangles qui tournent sur eux mêmeS
    push()
    rectMode(CENTER)
    for (let i = 0; i < 25; i++) {
        push()
        noFill()
        strokeWeight(2)
        stroke(redR[i],greenR[i],blueR[i])
        translate(xR[i],yR[i])
        rotate(frameCount / 10 + i)
        rect(0, 0, 200, 50, 10)
        pop()
    }
    pop()
}


function animS() {
    push()
    soundSFFT.analyze()
    let aigu = soundSFFT.getEnergy("treble")
    // console.log(aigu)
    let g = map(soundS.currentTime(), 0, soundS.duration(), 0, 1)
    let x = lerp(0, width, g)
    //pour conserver plus ou moins la même vitesse de déplacement selon la taille de la fenetre
    let inconnue = width / 7
    let y = -(((x * x) / inconnue) + x / inconnue)

    rectMode(CENTER)
    noFill()
    strokeWeight(2)
    stroke(176, 17, 65)
    push()
    translate(width / 4 + x, height + y)
    rotate(frameCount / 10 )
    rect(0, 0, 50, 50)
    pop()
    pop()
}

function animT() {
    push()
    let x = width / 2
    let y = height / 2
    let size = 80 + map(soundT.currentTime(), 0, soundT.duration(), 0, 80)

    soundTFFT.analyze()
    let aigu = soundTFFT.getEnergy("highMid")
    // console.log(aigu)
    let levelT = amplitudeT.getLevel()
    // console.log(levelT)

    if (soundT.currentTime() > soundT.duration() / 2.2) {
        size = 116 // console.log(size)
        x = map(aigu, 0, 250, 80, width - 200)
        y = map(levelT, 0, 0.2, 50, height)
    }
    noStroke()
    fill(couleurT)
    ellipse(x, y, size, size)

    pop()
}

//inspired by a sketch Pde from  "DEsign Generatif" (p.357), written by H. Bohnacker, B. Grob, J. Laub, et C. Lazzeroni, published by Pyramid
function animU() { //u
    push()
    translate(width / 2, height / 2)
    let nombrePoints = 1500
    let apparition = map(soundU.currentTime(), 0, soundU.duration() * 0.76, 0, nombrePoints)
    stroke(couleurU)
    strokeWeight(1)
    noFill()

    for (let i = 0; i <= nombrePoints && apparition > i; i++) {
        push()
        let angle = map(i, 0, nombrePoints, 0, TWO_PI);
        // play w/ value of the Lissajous curve
        let x = (sin(angle * 2 + radians(30)) * cos(angle)) * (width / 2 - 25)
        let y = (sin(angle * 5) * cos(angle)) * (height / 2 - 25)
        translate(x, y)
        rotate(i)
        rect(0, 0, 15, 15)
        pop()
    }
    pop()
}

function animV() {
    //circle morph
    push()
    fill(couleurV)
    noStroke()
    var levelV = amplitudeV.getLevel()
    amppY += 0.05
    amppX += 0.03
    let radiusY = 120
    let radiusX = 120

    let posY = map(soundV.currentTime(), 0, soundV.duration() * 0.08, height, height / 2)
    let posYhaut = map(soundV.currentTime(), 0, soundV.duration() * 0.08, 0, height / 2)
    let diminue = 1

    if (soundV.currentTime() > soundV.duration() * 0.08) {
        diminue = map(soundV.currentTime(), soundV.duration() * 0.08, soundV.duration(), 1, 10)
        posY = height / 2
        posYhaut = height / 2
        radiusX = map(levelV, 0, 0.1, 30, 180) * cos(amppX)
        radiusY = map(levelV, 0, 0.1, 30, 180) * cos(amppY)
    }

    ellipse(width / 4, posYhaut, radiusX / diminue, radiusY / diminue)
    ellipse(width / 2, posY, radiusX / diminue, radiusY / diminue)
    ellipse(3 * width / 4, posYhaut, radiusX / diminue, radiusY / diminue)
    pop()
}

function animW() {
    var distX = 6 * width / 8
    var distY = 6 * height / 7
    let progress = map(soundW.currentTime(), 0, soundW.duration() - 1.5, 0, 1)

    fill(90, 100, 187);
    noStroke()
    if (progress < 1) {
        var x = (width / 8) + progress * distX;
        var y = (height / 7) + pow(progress, 8) * distY;
    }
    ellipse(x, y, 50, 50);
}





function animX() {
    sizeX += 0.05
    sizeY += 0.07

    //pour garder une animation smooth même sur écran grand
    let taillemax
    if (taillemax < 250) tailemax = (width / 2)
    else taillemax = 250

    noFill()
    stroke(220, 0, 30)
    strokeWeight(2)
    ellipse(width / 2, height / 2, cos(sizeX) * taillemax, cos(sizeY) * taillemax)
}

function animY() {
    push()
    t = map(soundY.currentTime(), 0, 3.05, 4 * TWO_PI, 0)

    radiusY = map(soundY.currentTime(), 0, 3.05, (height / 2) - 50, 0)
    let sinval = +sin(t)
    let cosval = +cos(t)
    let x = (width / 2) + (cosval * radiusY)
    let y = (height / 2) + (sinval * radiusY)
    let taille = 15
    if (soundY.currentTime() > 3.1) {
        taille = map(soundY.currentTime(), 3.05, soundY.duration(), 15, 200)
        //h += 0.001 noise foireux à corriger
        x = (width / 2)
        y = (height / 2)
        stroke(couleurY)
        strokeWeight(map(soundY.currentTime(), 3.05, soundY.duration(), 2, 5))
        noFill()
    } else {
        noStroke()
        fill(couleurY)
    }
    ellipse(x, y, taille, taille)
    pop()
}


function animZ() {
    pg.clear()
    if (frameCount % 24 == 0) { //almost the perfect tempo corresponding to the real tempo of the song 
        biscottes.push(new biscotte())
    }
     //console.log("length=  " +biscottes.length)
     //plop le compteur de boucle du désespoir
    for ( plop = 0; plop < biscottes.length; plop++) {
       // console.log("boucle for " + plop)
        biscottes[plop].update(); // update biscotte transparency
        biscottes[plop].display(pg); // draw new biscotte
        //erase biscotte if it's too much transparent
        if (biscottes[plop].transparence < 5) {
            biscottes = biscottes.splice(plop)
        }
    }
    image(pg, 0, 0, width, height)

}

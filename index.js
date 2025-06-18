
let black
let bold
let semibold
let medium
let regular
let light
let extralight
let sanz

let mouse

function preload () {
black = loadFont('assets/black.ttf')
bold = loadFont('assets/bold.ttf')
semibold = loadFont('assets/semibold.ttf')
medium = loadFont('assets/medium.ttf')
regular = loadFont('assets/regular.ttf')
light = loadFont('assets/light.ttf')
extralight = loadFont('assets/extralight.ttf')
sanz = loadFont('assets/SANZTTF.ttf')

let slider 

let select
let eleccion

let myInput

let picker
}

function setup() {
  createCanvas (1920,1080)
  background (250)

  slider = createSlider (0,255,0)
  slider.position (140, 323)
  
  select = createSelect ()
  select.option ('1')
  select.option ('2')
  select.option ('3')
  select.position (190,345)

  myInput = createInput('SANZ SERIF')
  myInput.position(125, 370)

  picker = createColorPicker (255)
  picker.position (183,295)
}


function draw() {

let g = slider.value()
let eleccion = select.value()
let c = picker.value()
background (0)

  let msg = myInput.value();
  textSize (g)
  textAlign(CENTER)
  textLeading(65)
  text(msg, 200, 160)

  fill (c)

  textFont(sanz)
  textSize (30)
  textAlign(CENTER)
  textLeading(25)
  text ('a b c d e f g h i j kl m \nn o p q r s tu v w x y z',200,260)



 if (eleccion == '1') {
      
 }
 if (eleccion == '2') {
      filter(BLUR,5)
 }

  if (eleccion == '3') {
      filter(BLUR,10)
 }

   
}

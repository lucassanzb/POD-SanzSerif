
let black
let bold
let semibold
let medium
let regular
let light
let extralight
let sanz

let mouse

let slider

let select
let eleccion

let myInput

let picker

let points

let radio

//variables del arcoiris
let r = 255
let g = 0
let b = 150 //valores inciiales en los que empiezan r g b
// puse numeros distintos para que se generen colores mas aleatorios, si todos empiezan en 0, se mueven de misma forma

let a1 = 1
let a2 = 1
let a3 = 1 //velocidades a las cuales cambian los colores, si las subo cambian mas rapido



function preload () {
black = loadFont('assets/black.ttf')
bold = loadFont('assets/bold.ttf')
semibold = loadFont('assets/semibold.ttf')
medium = loadFont('assets/medium.ttf')
regular = loadFont('assets/regular.ttf')
light = loadFont('assets/light.ttf')
extralight = loadFont('assets/extralight.ttf')
sanz = loadFont('assets/SANZTTF.ttf')



}

function setup() {
  createCanvas (1440, 1500)


  slider = createSlider (0,6,0)
  slider.position (660, 915)

  select = createSelect ()
  select.option ('NORMAL')
  select.option ('ARCOIRIS')
  select.position (670,755)

  cajatexto = createElement('textarea')
  cajatexto.position(619, 995)
  cajatexto.size(200,100)
  cajatexto.value('SANZ\nSERIF')

  picker = createColorPicker (255)
  picker.position (698,835)


}



function draw() {

  
let z = slider.value()
let eleccion = select.value()
let c = picker.value()

//arcoíris en en "2"
 if (eleccion == 'ARCOIRIS') {
  r = r + a1
  g = g + a2
  b = b + a3 //a cada valor del color se le suma la velocidad de cambio para que los valores varien entre 0 y 255

  if (r > 255 || r < 0) a1 = a1 * -1
  if (g > 255 || g < 0) a2 = a2 * -1
  if (b > 255 || b < 0) a3 = a3 * -1 // esto hace que los valores del color "reboten" cuando llegan a 0 o 255

  c = color(r, g, b) //creo la variable del nuevo color "c" que uso en todos los elementos
  // tiene el mismo nombre que el del picker para que si no esta puesta la opcion arcoiris responda al picker
  // en fin lo que estoy haciendo es que los valores r g b dentro de el color c, vayan variando entre 0 y 255 sin pasarse, creando un color nuevo
}

 
 if (eleccion == 'NORMAL') {
 }

 

 background (0)

 //fondo re loco
    for (let i = 0; i < 1; i= i+1) { // hago que se ejecute una vez por frame
    let x = random(width)
    let y = random(height)
    let tamaño = random(500, 600)
    fill (0)
    strokeWeight (0.5)
    stroke (c)
    rect(x, y, tamaño, tamaño)

    // las posiciones x e y son random entre los margenes de height y width
    // tamaño es random entre 500 y 600 para que tenga un tamaño entre esos dos numeros
  }


// texto princ
let msg1 = cajatexto.value()
  fill (c)
  strokeWeight (z)
  stroke (c)
  textFont(sanz)
  textSize (250)
  textAlign(CENTER)
  textLeading(181)
  text (msg1,width/2,300)


  //tipografias detalles
  strokeWeight (0)
  stroke (0)
  fill (c)
  textFont(extralight)
  textSize (15)
  textAlign(LEFT)
  textLeading(175)
  text ("POD",70,70)

  textAlign(CENTER)
  text ("SANZSERIF",width/2,70)

  textAlign(RIGHT)
  text ("2025",width-70,70)

  textSize (15)
  textAlign(LEFT)
  text ("LIC. EN DISEÑO",70,1420)

  textAlign(CENTER)
  text ("LUCAS SANZ BELLONI",width/2,1420)

  textAlign(RIGHT)
  text ("UNIV. DITELLA",width-70,1420)

  //descripcion
  strokeWeight (0)
  stroke (0)
  fill (c)
  textFont(extralight)
  textSize (18)
  textAlign(CENTER)
  textLeading(19)
  text ("Sanz Serif es una tipografía sans serif de construcción modular\n y estructura geométrica, basada en una retícula de proporcio-\nnes cuadradas. Cada carácter se compone de formas rectangu-\nlares sólidas, con cortes rectos y sin remates, lo que le confiere \n un aspecto compacto y sintético. ",width/2,1200)


 //funcionales
  fill (c)
  textFont(extralight)
  textSize (20)
  textAlign(CENTER)
  textLeading(175)

  text ("COLOR",width/2,825)

  text ("STROKE INTERNO",width/2,905)

  text ("TEXTO",width/2,985)


//eleccion arcoiris
  fill (c)
  textFont(extralight)
  textSize (20)
  textAlign(CENTER)
  textLeading(175)
  text ("ARCOIRIS",width/2,745)
  // tomascurzio gmail.om


  
  fill (c)
  strokeWeight (0)
  stroke (c)
  textFont(sanz)
  textSize (70)
  textAlign(CENTER)
  textLeading(52)
  text ('abcdefghijklm\nnopqrstvwxyz\n0123456789',width/2,600)
 
  if (mouseX >= width/2-400 && mouseX <= width/2 + 400 && mouseY >= 120 && mouseY <= 500) {
  fill (0)
    rect (0,110,2000, 400)
  fill (c)
  strokeWeight (1 + z)
  stroke (c)
  textFont(sanz)
  textAlign(CENTER)
  textLeading(181)


    points = sanz.textToPoints(msg1, 475,300,250, { sampleFactor: 0.1 })

  console.log(points)

  beginShape()

  for (let index = 0; index < points.length; index++) {
  
    rect(points[index].x + random(1), points[index].y + random(2), 1)
  }

  endShape(CLOSE)
  }

//detalles lineas
  strokeWeight (0.4)
  stroke (c)

line (0,130,width,130)
line (0,300,width,300)
line (0,315,width,315)
line (0,480,width,480)

line (0,555,width,555)
line (0,600,width,600)
line (0,605,width,605)
line (0,653,width,653)
line (0,657,width,657)
line (0,702,width,702)

line (440,0,440,height)
line (width- 440,0,width- 440,height)







 }







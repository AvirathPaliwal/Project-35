//Create variables here
var dogimage,dog1image;
var dog;
var food;
var database,mypos;

function preload()
{
  //load images here
  dogimage=loadImage("Dog.png");
  dog1image=loadImage("happydog.png");
}

function setup() {
	createCanvas(900, 600);
  dog=createSprite(500,450,50,50)
  dog.addImage("d",dogimage);
  dog.scale=0.3
  database=firebase.database();
     var l=database.ref("Food");
     l.on("value",read)
}


function draw() {  
  background("green")
  if(keyDown(UP_ARROW)){
    writeStock(mypos);
    dog.addImage(dog1image);
  }
  drawSprites();
  textSize(23)
  stroke("yellow")
  fill("red");
  text("Note: press UP_ARROW key to feed drago milk!",200,50);
  //add styles here
   textSize("33")
   fill("red")
   stroke("blue")
   text("Food remaining" + food,170,200);
}

function read(d){
  mypos=d.val()
}

function writeStock(x){
  if(x<=0){
    x=0
  }
  else{
    x=x-1;
  }

  database.ref("/").update({
    Food:x
  })
}



var dog,database,happy,happyDog,foodStock,foods;

function preload() {
    happydog=loadImage("happydog.png")
    img=loadImage("Dog.png")
}

function setup(){
    database=firebase.database()
    
    createCanvas(500,500);

    dog = createSprite(250,250,10,10);
    dog.addImage(img)
    dog.scale=0.3

    foodStock=database.ref('food')
    foodStock.on("value",readStock)
}

function draw(){
    background(46,139,87);
    if (keyWentDown(UP_ARROW)) {
        writeStock(foods)
        dog.addImage(happydog)
    }
    if (keyWentUp(UP_ARROW)) {
        dog.addImage(img)
    }
        
    drawSprites();
 }

 function readStock(data) {
     foods=data.val()
 }
 function writeStock(x) {
     if(x<=0){
         x=0
     }
     else{
         x=x-1
     }
     database.ref('/').update({
         food:x
     })
 }

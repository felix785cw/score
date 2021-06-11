var gameState = 0;
var game;

//Ampere11
var Mbappe,Harry,Anthony;
var Willian,Douglas,Bernardo;
var Ronaldo,Rashford,Sterling;
var Bruno,Gascoigne,Mardona;
var Paul,Kroos,Savic;
var Joshua,Xhaka,Omar;
var Hernandez,Davies,Reguilon;
var Bellerin,Alexander,Azpilicueta;
var Gomez,Boateng,Alderweireld;
var Beckenbauer,Sanchez,Sule;
var Neuer,David,Alisson;

//legends11  Playing 11 (npc)
var Frank,Mark,Norman;
var Remi,Bryan,Jesper;
var Clayton,McGrath,Michael,Arthur;
var Gary;

var ref1IMG,ref2IMG,ref1,ref2;
var yellow1,red1;
var yellow = 0;
var red = 0;
var page1,page2,page1Img,page2Img;
var ball,groundImg,ballImage,CardImg1,cardImg2;
var  player1Img,player2Img,goalKeeper2,goalkeeper;

var bar1,bar2,bar3,bar4;

function preload(){
 groundImg = loadImage("images/pitch.jpg");
 ballImage = loadImage("images/football.jpg");
 cardImg2 = loadImage("images/red card.png");
 CardImg1 = loadImage("images/yellow card.png");
 page1Img =loadImage("images/ronaldo.png");
 page2Img = loadImage("images/page2.jpg");
 player1Img = loadImage("images/player2.jpg");
 player2Img = loadImage("images/player1.jpg");
 player3Img = loadImage("images/player3.jpg");
 goalKeeper2 = loadImage("images/goalkeeper2.jpg");
 goalkeeper = loadImage("images/goalKeeper.jpg");
 ref1IMG = loadImage("images/ref1.jpg");
 ref2IMG = loadImage("images/ref2.jpg");
}
function setup() {
  createCanvas(1220,660);

bar1 = createSprite(30,286,120,10);
bar1.shapeColor = "red";
bar1.visible = false;

bar2 = createSprite(30,380,120,10);
bar2.shapeColor = "red";
bar2.visible = false;

bar3 = createSprite(1200,375,120,10);
bar3.shapeColor = "red";
bar3.visible = false;

bar4 = createSprite(1200,286,120,10);
bar4.shapeColor = "red";
bar4.visible = false;


yellow1 = createSprite(20,75,20,20);
yellow1.addImage("yellow card",CardImg1);
yellow1.scale = 0.1;
red1 = createSprite(20,125,20,20);
red1.addImage("yellow card",cardImg2);
red1.scale = 0.2;


 ball = createSprite(613,318);
 ball.addImage(ballImage);
 ball.scale = 0.1;



  // Playing 11 (pc)

  Mbappe = createSprite(658,322,20,20);
  Mbappe.addImage("Mbappe",player2Img);
  Mbappe.scale = 0.3;

  Bruno = createSprite(450,330,20,20);
 Bruno.addImage("bruno",player1Img);
 Bruno.scale = 0.3;

  Ronaldo = createSprite(580,90,20,20);
  Ronaldo.addImage("ronaldo",player1Img);
  Ronaldo.scale = 0.3;

  Bernardo = createSprite(580,570,20,20);
  Bernardo.addImage("benardo",player1Img);
  Bernardo.scale = 0.3;

Paul = createSprite(370,230,20,20);
Paul.addImage("Pogba",player1Img);
Paul.scale = 0.3;

Joshua = createSprite(370,450,20,20);
Joshua.addImage("Joshua",player1Img);
Joshua.scale = 0.3;

Gomez = createSprite(220,428,20,20);
Gomez.addImage("Gomez",player1Img);
Gomez.scale = 0.3;

Sule = createSprite(220,217,20,20);
Sule.addImage("Sule",player1Img);
Sule.scale = 0.3;

Alexander = createSprite(220,570,20,20);
Alexander.addImage("alexander",player1Img);
Alexander.scale = 0.3;

Davies = createSprite(220,90,20,20);
Davies.addImage("Alphonso",player1Img);
Davies.scale = 0.3;


David = createSprite(50,330,20,20);
David.addImage("De Gea",goalKeeper2);
David.scale = 0.3;
David.velocityY = -2;

Frank = createSprite(680,200,20,20);
Frank.addImage("Frank",player3Img);
Frank.scale = 0.3;

Mark = createSprite(700,90,20,20);
Mark.addImage("Mark",player2Img);
Mark.scale = 0.3;

Norman = createSprite(700,570,20,20);
Norman.addImage("Norman",player2Img);
Norman.scale = 0.3;

Remi = createSprite(860,330,20,20);
Remi.addImage("Remi",player2Img);
Remi.scale = 0.3;

Bryan = createSprite(790,230,20,20);
Bryan.addImage("bryan",player2Img);
Bryan.scale = 0.3;

Jesper = createSprite(790,450,20,20);
Jesper.scale = 0.3;
Jesper.addImage("Jesper",player2Img);

Clayton = createSprite(1000,428,20,20);
Clayton.addImage("Clayton",player2Img);
Clayton.scale = 0.3;

McGrath = createSprite(1000,217,20,20);
McGrath.addImage("McGrath",player2Img);
McGrath.scale = 0.3;

Michael = createSprite(1000,570,20,20);
Michael.addImage("Micheal",player2Img);
Michael.scale = 0.3;

Arthur = createSprite(1000,90,20,20);
Arthur.addImage("Arthur",player2Img);
Arthur.scale = 0.3;

Gary = createSprite(1173,330,20,20);
Gary.addImage("Gary",goalkeeper);
Gary.scale = 0.3;
Gary.velocityY = -2;


}
function draw() {
  background(groundImg);

Mbappe.bounceOff(Frank);

David.bounceOff(bar2)
David.bounceOff(bar1);



if(Mbappe.isTouching(Frank)){
  yellow = yellow+1;
}


  fill("orange");
  textSize(20);
  strokeWeight(25);
  text("Ampere11 vs Legends11",80,20);
   text("time: 00:00",80,50); 
   fill("orange");
text("0-0",310,20);

   fill("red");
   strokeWeight(21);
   textSize(15);
   text("K.Mbappe",Mbappe.x-40,Mbappe.y-20);
   text("m",Mbappe.x-40,Mbappe.y-35)

   fill("white");
   textSize(15);
   strokeWeight(21);
   text("Frank",Frank.x-25,Frank.y-15);

   fill("red");
   textSize(15);
   strokeWeight(21);
   text("B.Fernandes",Bruno.x-40,Bruno.y-20);
   text("b",Bruno.x-40,Bruno.y-35)

   fill("red");
   textSize(15);
   strokeWeight(21);
   text("C.Ronaldo",Ronaldo.x-40,Ronaldo.y-19);
   text("r",Ronaldo.x-40,Ronaldo.y-35)

   fill("red");
   textSize(15);
   strokeWeight(21);
   text("B.Silva",Bernardo.x-30,Bernardo.y-18);
   text("s",Bernardo.x-30,Bernardo.y-35)

   fill("red");
   textSize(15);
   strokeWeight(21);
   text("P.Pogba",Paul.x-30,Paul.y-21);
   text("p",Paul.x-30,Paul.y-40)

   fill("red");
   textSize(15);
   strokeWeight(21);
   text("J.Kimmich",Joshua.x-30,Joshua.y-19);
   text("k",Joshua.x-30,Joshua.y-35)

   fill("red");
   textSize(15);
   strokeWeight(21);
   text("J.Gomez",Gomez.x-40,Gomez.y-20);
   text("g",Gomez.x-35,Gomez.y-40)

   fill("red");
   textSize(15);
   strokeWeight(21);
   text("N.Sule",Sule.x-30,Sule.y-18);
   text("n",Sule.x-30,Sule.y-35)

   fill("red");
   textSize(15);
   strokeWeight(21);
   text("T.Alexander-Arnold",Alexander.x-50,Alexander.y-17);
   text("t",Alexander.x-40,Alexander.y-35)
 
   fill("red");
   textSize(15);
   strokeWeight(21);
   text("A.Davies",Davies.x-30,Davies.y-20);
   text("d",Davies.x-30,Davies.y-35)

   fill("blue");
   textSize(15);
   strokeWeight(2);
   text("D.De Gea",David.x-30,David.y-25);

   fill("white");
   textSize(15);
   strokeWeight(21);
   text("Mark",Mark.x-22,Mark.y-15);

   fill("white");
   textSize(15);
   strokeWeight(21);
   text("Norman",Norman.x-30,Norman.y-25);

   fill("white");
   textSize(15);
   strokeWeight(21);
   text("Remi",Remi.x-15,Remi.y-15);

   fill("white");
   textSize(15);
   strokeWeight(21);
   text("Bryan",Bryan.x-15,Bryan.y-18);

   fill("white");
   textSize(15);
   strokeWeight(21);
   text("Jesper",Jesper.x-20,Jesper.y-20);

   fill("white");
   textSize(15);
   strokeWeight(21);
   text("Clayton",Clayton.x-30,Clayton.y-16);

   fill("white");
   textSize(15);
   strokeWeight(21);
   text("McGrath",McGrath.x-25,McGrath.y-15);

   fill("white");
   textSize(15);
   strokeWeight(21);
   text("Arthur",Arthur.x-20,Arthur.y-15);

   fill("white");
   textSize(15);
   strokeWeight(21);
   text("Micheal",Michael.x-20,Michael.y-15);

   fill("white");
   textSize(15);
   strokeWeight(21);
   text("Gary",Gary.x-18,Gary.y-28);

   textSize(20)
   fill("white")
   text("-0",35,75);

textSize(20)
   fill("white")
   text("-0",35,125);

Gary.bounceOff(bar4)
Gary.bounceOff(bar3);
 
//Mbappe movement
   if(keyDown("UP_ARROW")&& keyDown("m")) {
    Mbappe.velocityX = 0;
    Mbappe.velocityY = -2;
  }
  if (keyDown("DOWN_ARROW")&& keyDown("m")) {
    Mbappe.velocityX=0;
    Mbappe.velocityY=2;
  }
  if (keyDown("LEFT_ARROW")&& keyDown("m")) {
    Mbappe.velocityX=-2;
    Mbappe.velocityY=0;  
  }
  if (keyDown("RIGHT_ARROW")&& keyDown("m")) {
    Mbappe.velocityX=2;
    Mbappe.velocityY=0;
  }

//Ronaldo movement
 if(keyWentDown("UP_ARROW")&& keyDown("r")) {
    Ronaldo.velocityX = 0;
    Ronaldo.velocityY = -2;
  }
  if (keyDown("DOWN_ARROW")&& keyDown("r")) {
    Ronaldo.velocityX=0;
    Ronaldo.velocityY=2;
  }
  if (keyDown("LEFT_ARROW")&& keyDown("r")) {
    Ronaldo.velocityX=-2;
    Ronaldo.velocityY=0;
  }
  if (keyDown("RIGHT_ARROW")&& keyDown("r")) {
    Ronaldo.velocityX=2;
    Ronaldo.velocityY=0;
    }

//bruno movement
    if(keyWentDown("UP_ARROW")&& keyDown("b")) {
      Bruno.velocityX = 0;
      Bruno.velocityY = -2;
    }
    if (keyDown("DOWN_ARROW")&& keyDown("b")) {
      Bruno.velocityX=0;
      Bruno.velocityY=2;
    }
    if (keyDown("LEFT_ARROW")&& keyDown("b")) {
      Bruno.velocityX=-2;
      Bruno.velocityY=0;
    }
    if (keyDown("RIGHT_ARROW")&& keyDown("b")) {
      Bruno.velocityX=2;
      Bruno.velocityY=0;
      }
  
// benardo movement
      if(keyWentDown("UP_ARROW")&& keyDown("s")) {
        Bernardo.velocityX = 0;
        Bernardo.velocityY = -2;
      }
      if (keyDown("DOWN_ARROW")&& keyDown("s")) {
        Bernardo.velocityX=0;
        Bernardo.velocityY=2;
      }
      if (keyDown("LEFT_ARROW")&& keyDown("s")) {
        Bernardo.velocityX=-2;
        Bernardo.velocityY=0;
      }
      if (keyDown("RIGHT_ARROW")&& keyDown("s")) {
        Bernardo.velocityX=2;
        Bernardo.velocityY=0;
        }
    
// Paul movement
if(keyWentDown("UP_ARROW")&& keyDown("p")) {
  Paul.velocityX = 0;
  Paul.velocityY = -2;
}
if (keyDown("DOWN_ARROW")&& keyDown("p")) {
  Paul.velocityX=0;
  Paul.velocityY=2;
}
if (keyDown("LEFT_ARROW")&& keyDown("p")) {
  Paul.velocityX=-2;
  Paul.velocityY=0;
}
if (keyDown("RIGHT_ARROW")&& keyDown("p")) {
  Paul.velocityX=2;
  Paul.velocityY=0;
  }

  //kimmich movement
if(keyWentDown("UP_ARROW")&& keyDown("k")) {
Joshua.velocityX = 0;
Joshua.velocityY = -2;
}
if (keyDown("DOWN_ARROW")&& keyDown("k")) {
Joshua.velocityX=0;
Joshua.velocityY=2;
}
if (keyDown("LEFT_ARROW")&& keyDown("k")) {
Joshua.velocityX=-2;
Joshua.velocityY=0;
}
if (keyDown("RIGHT_ARROW")&& keyDown("k")) {
  Joshua.velocityX=2;
  Joshua.velocityY=0;
  }

    //Sule movement
if(keyWentDown("UP_ARROW")&& keyDown("n")) {
  Sule.velocityX = 0;
  Sule.velocityY = -2;
  }
  if (keyDown("DOWN_ARROW")&& keyDown("n")) {
  Sule.velocityX=0;
  Sule.velocityY=2;
  }
  if (keyDown("LEFT_ARROW")&& keyDown("n")) {
  Sule.velocityX=-2;
  Sule.velocityY=0;
  }
  if (keyDown("RIGHT_ARROW")&& keyDown("n")) {
    Sule.velocityX=2;
    Sule.velocityY=0;
    }
  
      //gomez movement
if(keyWentDown("UP_ARROW")&& keyDown("g")) {
  Gomez.velocityX = 0;
  Gomez.velocityY = -2;
  }
  if (keyDown("DOWN_ARROW")&& keyDown("g")) {
  Gomez.velocityX=0;
  Gomez.velocityY=2;
  }
  if (keyDown("LEFT_ARROW")&& keyDown("g")) {
  Gomez.velocityX=-2;
  Gomez.velocityY=0;
  }
  if (keyDown("RIGHT_ARROW")&& keyDown("g")) {
    Gomez.velocityX=2;
    Gomez.velocityY=0;
    }

      //Davies movement
if(keyWentDown("UP_ARROW")&& keyDown("d")) {
  Davies.velocityX = 0;
  Davies.velocityY = -2;
  }
  if (keyDown("DOWN_ARROW")&& keyDown("d")) {
  Davies.velocityX=0;
  Davies.velocityY=2;
  }
  if (keyDown("LEFT_ARROW")&& keyDown("d")) {
  Davies.velocityX=-2;
  Davies.velocityY=0;
  }
  if (keyDown("RIGHT_ARROW")&& keyDown("d")) {
    Davies.velocityX=2;
    Davies.velocityY=0;
    }

      //Alexander movement
if(keyWentDown("UP_ARROW")&& keyDown("t")) {
  Alexander.velocityX = 0;
  Alexander.velocityY = -2;
  }
  if (keyDown("DOWN_ARROW")&& keyDown("t")) {
  Alexander.velocityX=0;
  Alexander.velocityY=2;
  }
  if (keyDown("LEFT_ARROW")&& keyDown("t")) {
  Alexander.velocityX=-2;
  Alexander.velocityY=0;
  }
  if (keyDown("RIGHT_ARROW")&& keyDown("t")) {
    Alexander.velocityX=2;
    Alexander.velocityY=0;
    }
  

if(keyWentUp("UP_ARROW") ||keyWentUp("DOWN_ARROW") || keyWentUp("LEFT_ARROW") || keyWentUp("RIGHT_ARROW") ) {
  Ronaldo.velocityX = 0;
      Ronaldo.velocityY = 0;
  Bruno.velocityX = 0;
  Bruno.velocityY = 0;
      Mbappe.velocityX = 0;
      Mbappe.velocityY = 0;
      Bernardo.velocityX = 0;
      Bernardo.velocityY = 0;
      Paul.velocityX = 0;
      Paul.velocityY = 0;
      Joshua.velocityX = 0;
      Joshua.velocityY = 0;
      Davies.velocityX = 0;
      Davies.velocityY = 0;
      Sule.velocityX = 0;
      Sule.velocityY = 0;
      Gomez.velocityX = 0;
      Gomez.velocityY = 0;
      Alexander.velocityX = 0;
      Alexander.velocityY = 0;
    }

  drawSprites();
}
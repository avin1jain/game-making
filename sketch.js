var level1;
var level2;
var level3;
var gameState= 0;
var score= 0;
var question,option1,option2,option3,option4;
function preload() {
  
}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    question= createElement('h3');
    option1= createElement('h4');
    option2= createElement('h4');
    option3= createElement('h4');
    option4= createElement('h4'); 
    level1= new Level1()
    level2= new Level2();
    level3= new Level3();
   
}
function draw(){
background("red");
if (gameState==0){
    level1.display();
 
}
 if (gameState==1){
  level1.showquestion();
    
 }
 
 if (gameState==2){
     background("blue")
  level2.showquestion();

 }
 if (gameState==3){
    level3.showquestion();
  
   }
}
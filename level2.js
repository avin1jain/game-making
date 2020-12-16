class Level2 {

    constructor() {
    
      this.count=11 ;
      this.question= createElement('h3');
      this.option1= createElement('h4');
      this.option2= createElement('h4');
      this.option3= createElement('h4');
      this.option4= createElement('h4');
      this.button2= createButton('next');
      this.input2 = createInput("choose option")
      this.answer=["c","d"];
    }
   
  
    display(){
    
  
  
  
  
    }
    showquestion(){
    if(this.count==11){
    question.html('Q1)Who invented the telescope?')
    question.position(50,displayHeight/2-50)
    option1.html('A) Galileo')
    option1.position(100,displayHeight/2+50);
    option2.html('B) Hypatia')
    option2.position(displayWidth/2,displayHeight/2+50);
    option3.html('c) Hans Lippershey*')
    option3.position(100,displayHeight/2+150);
    option4.html(' D) Johannes Kepler')
    option4.position(displayWidth/2,displayHeight/2+150);

    }else if(this.count==12){
      this.question.html('Q2)Which of these objects is the farthest from the Sun? ')
      this.question.position(50,displayHeight/2-50)
      this.option1.html('A) Saturn')
      this.option1.position(100,displayHeight/2+50);
      this.option2.html('B) Neptune')
      this.option2.position(displayWidth/2,displayHeight/2+50);
      this.option3.html('C) Kuiper belt')
      this.option3.position(100,displayHeight/2+150);
      this.option4.html('D) 90377 Sedna*')
      this.option4.position(displayWidth/2,displayHeight/2+150);
  
    }else if(this.count==13){
        this.question.html('Q3)What is the smallest planet in the solar system by mass? ')
        this.question.position(50,displayHeight/2-50)
        this.option1.html('A) Mars')
        this.option1.position(100,displayHeight/2+50);
        this.option2.html('B) Earth')
        this.option2.position(displayWidth/2,displayHeight/2+50);
        this.option3.html('C) Jupiter')
        this.option3.position(100,displayHeight/2+150);
        this.option4.html(' D) Mercury*')
        this.option4.position(displayWidth/2,displayHeight/2+150);
    
      }else if(this.count==14){
        this.question.html('Q4)Approximately how many miles (or kilometres) are there in a light-year?')
        this.question.position(50,displayHeight/2-50)
        this.option1.html('A) 590,000 (950,000 km) ')
        this.option1.position(100,displayHeight/2+50);
        this.option2.html('B) 5.9 trillion (9.5 trillion km)* ')
        this.option2.position(displayWidth/2,displayHeight/2+50);
        this.option3.html('C) 5.9 billion (9.5 billion km)')
        this.option3.position(100,displayHeight/2+150);
        this.option4.html('D) 5.9 million (9.5 million km)')
        this.option4.position(displayWidth/2,displayHeight/2+150);
    
      }else if(this.count==15){
        this.question.html('Q5) How much gravity an object has depends on its _______.')
        this.question.position(50,displayHeight/2-50)
        this.option1.html('A) Weight')
        this.option1.position(100,displayHeight/2+50);
        this.option2.html('B) Speed')
        this.option2.position(displayWidth/2,displayHeight/2+50);
        this.option3.html('C) Momentum')
        this.option3.position(100,displayHeight/2+150);
        this.option4.html('D) Mass*')
        this.option4.position(displayWidth/2,displayHeight/2+150);
    
      }else if(this.count==16){
        this.question.html('Q6) Which of the following is used in pencils ? ')
        this.question.position(50,displayHeight/2-50)
        this.option1.html('A) Graphite*')
        this.option1.position(100,displayHeight/2+50);
        this.option2.html('B) Silicon')
        this.option2.position(displayWidth/2,displayHeight/2+50);
        this.option3.html('C) Charcoal')
        this.option3.position(100,displayHeight/2+150);
        this.option4.html('D) Phosphorous')
        this.option4.position(displayWidth/2,displayHeight/2+150);
    
      }else if(this.count==17){
        this.question.html('Q7)Athlete’s Foot or Tinia Pedis is caused by which of the following ?')
        this.question.position(50,displayHeight/2-50)
        this.option1.html('A) Bacteria')
        this.option1.position(100,displayHeight/2+50);
        this.option2.html('B) Virus')
        this.option2.position(displayWidth/2,displayHeight/2+50);
        this.option3.html(' C) Fungi*' )
        this.option3.position(100,displayHeight/2+150);
        this.option4.html('D) Protozoan ');
        this.option4.position(displayWidth/2,displayHeight/2+150);
    
      }else if(this.count==18){
        this.question.html('Q8) Eardrum is a part of')
        this.question.position(50,displayHeight/2-50)
        this.option1.html('A)  Sound producing organ ')
        this.option1.position(100,displayHeight/2+50);
        this.option2.html('B)  Skeletal system')
        this.option2.position(displayWidth/2,displayHeight/2+50);
        this.option3.html('C)  Hearing organ* ')
        this.option3.position(100,displayHeight/2+150);
        this.option4.html('D) Heart')
        this.option4.position(displayWidth/2,displayHeight/2+150);
    
      }else if(this.count==19){
        this.question.html('Q9) Which among the following is called antisterility vitamin ?')
        this.question.position(50,displayHeight/2-50)
        this.option1.html('A) Vitamin A')
        this.option1.position(100,displayHeight/2+50);
        this.option2.html('B) Vitamin D')
        this.option2.position(displayWidth/2,displayHeight/2+50);
        this.option3.html('C) Vitamin E*')
        this.option3.position(100,displayHeight/2+150);
        this.option4.html('D) Vitamin K')
        this.option4.position(displayWidth/2,displayHeight/2+150);
    
      }else if(this.count==20){
        this.question.html('Q10) Chemical formula for water is ')
        this.question.position(50,displayHeight/2-50)
        this.option1.html('A) NaA1O2');
        this.option1.position(100,displayHeight/2+50);
        this.option2.html('B) H2O*');
        this.option2.position(displayWidth/2,displayHeight/2+50);
        this.option3.html('C) Al2O3');
        this.option3.position(100,displayHeight/2+150);
        this.option4.html('D) CaSiO3');
        this.option4.position(displayWidth/2,displayHeight/2+150);
    
      }
    
   this.button2.position(displayWidth-100, displayHeight-100)
   
   this.input2.position(displayWidth/2-50,displayHeight-200)

   this.button2.mousePressed(()=>{
    for(var i=0;i<this.answer.length;i++){
      if(this.count-1==i){
        if(this.answer[i]==this.input2.value()){
        alert("Correct Answer")
        score++;
        }
        else{alert ("Incorrct Answer")}
      }
    }
    console.log(this.answer);
    this.count++;
    this.input2.html('');
    if(this.count==12){
      var scoreString="Your score is "+score;
      alert(scoreString);
      gameState=3;
      score=0;
    }
  })
    } 
  }
  
class Level1 {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('submit');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.count=1 ;
      this.button2= createButton('next');
      this.input2 = createInput("choose option")
      this.answer=["a","d"];
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("Quiz Master");
      this.title.position(displayWidth/2 - 50, 0);
  
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 30, displayHeight/2);
   
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        this.greeting.html("Hello " + this.input.value())
        gameState=1;
        this.greeting.position(displayWidth/2 - 70, displayHeight/6);
      });
     
  
  
  
  
    }
    showquestion(){
    if(this.count==1){
    question.html('Q1) How is COVID-19 passed on?')
    question.position(50,displayHeight/2-50)
    option1.html('A) Through droplets that come from your mouth and nose when you cough or breathe out')
    option1.position(100,displayHeight/2+50);
    option2.html('B) wear mask')
    option2.position(displayWidth/2,displayHeight/2+50);
    option3.html('C) washing hands')
    option3.position(100,displayHeight/2+150);
    option4.html('D) All of the above ')
    option4.position(displayWidth/2,displayHeight/2+150);

    }else if(this.count==2){
    question.html('Q2)What are the common symptoms of COVID-19? ')
    question.position(50,displayHeight/2-50)
    option1.html('A) A new and continuous cough')
    option1.position(100,displayHeight/2+50);
    option2.html('B) Fever')
    option2.position(displayWidth/2,displayHeight/2+50);
    option3.html('C) Tiredness')
    option3.position(100,displayHeight/2+150);
    option4.html('D) All of the above ')
    option4.position(displayWidth/2,displayHeight/2+150);
  
    }else if(this.count==3){
        this.question.html('Q3)Can you always tell if someone has COVID-19? ')
        this.question.position(50,displayHeight/2-50)
        this.option1.html('A) No – not everyone with COVID-19 has symptoms')
        this.option1.position(100,displayHeight/2+50);
        this.option2.html('B) Yes – it will be obvious, a person with COVID-19 coughs a lot')
        this.option2.position(displayWidth/2,displayHeight/2+50);
        this.option3.html('C) Yes – you can tell just by where a person comes from, their race and ethnicity')
        this.option3.position(100,displayHeight/2+150);
        this.option4.html('D) All of the above *')
        this.option4.position(displayWidth/2,displayHeight/2+150);
    
      }else if(this.count==4){
        this.question.html('Q4)Can washing your hands protect you from COVID-19?')
        this.question.position(50,displayHeight/2-50)
        this.option1.html('A) Yes – but only if you use a strong bleach')
        this.option1.position(100,displayHeight/2+50);
        this.option2.html('B) Yes – normal soap and water or hand sanitizer is enough*')
        this.option2.position(displayWidth/2,displayHeight/2+50);
        this.option3.html('C) No – Washing your hands doesn’t stop COVID-19 ')
        this.option3.position(100,displayHeight/2+150);
        this.option4.html('D) All of the above *')
        this.option4.position(displayWidth/2,displayHeight/2+150);
    
      }else if(this.count==5){
        this.question.html('Q5)Which of the following people is COVID-19 more dangerous for?')
        this.question.position(50,displayHeight/2-50)
        this.option1.html('A) Older people – especially those aged 70 and above*')
        this.option1.position(100,displayHeight/2+50);
        this.option2.html('B) With good immune system ')
        this.option2.position(displayWidth/2,displayHeight/2+50);
        this.option3.html('C) who wear mask')
        this.option3.position(100,displayHeight/2+150);
        this.option4.html('who washes there hands*')
        this.option4.position(displayWidth/2,displayHeight/2+150);
    
      }else if(this.count==6){
        this.question.html('Q6)When should fabric face masks be worn? ')
        this.question.position(50,displayHeight/2-50)
        this.option1.html('A) On public transport')
        this.option1.position(100,displayHeight/2+50);
        this.option2.html('B) In confined or crowded spaces')
        this.option2.position(displayWidth/2,displayHeight/2+50);
        this.option3.html('C) In small shops')
        this.option3.position(100,displayHeight/2+150);
        this.option4.html('D) All of the above* ')
        this.option4.position(displayWidth/2,displayHeight/2+150);
    
      }else if(this.count==7){
        this.question.html('Q7)Which of the following is an example of physical distancing?')
        this.question.position(50,displayHeight/2-50)
        this.option1.html('A) You stop going to crowded places and visiting other people’s houses*')
        this.option1.position(100,displayHeight/2+50);
        this.option2.html('B) You stop talking to the people you live with')
        this.option2.position(displayWidth/2,displayHeight/2+50);
        this.option3.html('C) You stop speaking to your friends on the phone')
        this.option3.position(100,displayHeight/2+150);
        this.option4.html('D) None')
        this.option4.position(displayWidth/2,displayHeight/2+150);
    
      }else if(this.count==8){
        this.question.html('Q8)How can people living with HIV protect themselves from COVID-19?')
        this.question.position(50,displayHeight/2-50)
        this.option1.html('A) Wash their hands regularly and follow the physical distancing advice')
        this.option1.position(100,displayHeight/2+50);
        this.option2.html('B) Keep taking their antiretroviral treatment')
        this.option2.position(displayWidth/2,displayHeight/2+50);
        this.option3.html('C) Exercise regularly, eat well and look after their mental health')
        this.option3.position(100,displayHeight/2+150);
        this.option4.html('D) All of the above *')
        this.option4.position(displayWidth/2,displayHeight/2+150);
    
      }else if(this.count==9){
        this.question.html('Q9)The first case of novel corona virus was identified in')
        this.question.position(50,displayHeight/2-50)
        this.option1.html('A) Beijing')
        this.option1.position(100,displayHeight/2+50);
        this.option2.html('B) Shanghai')
        this.option2.position(displayWidth/2,displayHeight/2+50);
        this.option3.html('C) Wuhan, Hubei*')
        this.option3.position(100,displayHeight/2+150);
        this.option4.html('D) Tianjin')
        this.option4.position(displayWidth/2,displayHeight/2+150);
    
      }else if(this.count==10){
        this.question.html('Q10)How many countries, areas or territories are suffering from novel coronavirus outbreak in the World?')
        this.question.position(50,displayHeight/2-50)
        this.option1.html('A). More than 50')
        this.option1.position(100,displayHeight/2+50);
        this.option2.html('B) More than 100')
        this.option2.position(displayWidth/2,displayHeight/2+50);
        this.option3.html('C) More than 150')
        this.option3.position(100,displayHeight/2+150);
        this.option4.html('D) More than 200*  ')
        this.option4.position(displayWidth/2,displayHeight/2+150);
    
      }
    
   this.button2.position(displayWidth-100, displayHeight-100)
   
   this.input2.position(displayWidth/2-50,displayHeight-200)

   this.button2.mousePressed(()=>{
   // this.answer.push(this.input2.value());
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
   if(this.count==3){
     var scoreString="Your score is "+score;
     alert(scoreString);
     gameState=2;
     score=0;
   }
  })
    } 
  }
  
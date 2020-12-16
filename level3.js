class Level3 {

    constructor() {
    
      this.count=11 ;
      this.question= createElement('h3');
      this.option1= createElement('h4');
      this.option2= createElement('h4');
      this.option3= createElement('h4');
      this.option4= createElement('h4');
      this.button2= createButton('next');
      this.input2 = createInput("choose option")
      this.answer=[];
    }
   
  
    display(){
    
  
  
  
  
    }
    showquestion(){
    if(this.count==21){
    this.question.html('Q1) MS-Word is an example of _____ ')
    this.question.position(50,displayHeight/2-50)
    this.option1.html('A) An operating system')
    this.option1.position(100,displayHeight/2+50);
    this.option2.html('B) A processing device')
    this.option2.position(displayWidth/2,displayHeight/2+50);
    this.option3.html('C) Application software*')
    this.option3.position(100,displayHeight/2+150);
    this.option4.html('D) An input device')
    this.option4.position(displayWidth/2,displayHeight/2+150);

    }else if(this.count==22){
      this.question.html('Q2) The state of Assam has')
      this.question.position(50,displayHeight/2-50)
      this.option1.html('A) 5 National Parks & 11 wildlife sanctuaries*')
      this.option1.position(100,displayHeight/2+50);
      this.option2.html(' B) 3 National Parks & 9 wildlife sanctuaries')
      this.option2.position(displayWidth/2,displayHeight/2+50);
      this.option3.html('C) 3 National Parks & 8 wildlife sanctuaries')
      this.option3.position(100,displayHeight/2+150);
      this.option4.html('D) 2 National Parks & 11 wildlife sanctuaries')
      this.option4.position(displayWidth/2,displayHeight/2+150);
  
    }else if(this.count==23){
        this.question.html('Q3) Which one of the following types of waves are used in a night vision apparatus?')
        this.question.position(50,displayHeight/2-50)
        this.option1.html('A) Radio waves')
        this.option1.position(100,displayHeight/2+50);
        this.option2.html('B) Microwaves')
        this.option2.position(displayWidth/2,displayHeight/2+50);
        this.option3.html('C) Infra-red waves*')
        this.option3.position(100,displayHeight/2+150);
        this.option4.html('D) None of the above')
        this.option4.position(displayWidth/2,displayHeight/2+150);
    
      }else if(this.count==24){
        this.question.html('Q4) In which of the following festivals are boat races a special feature?')
        this.question.position(50,displayHeight/2-50)
        this.option1.html('A) Rongali Bihu')
        this.option1.position(100,displayHeight/2+50);
        this.option2.html('B) Onam*')
        this.option2.position(displayWidth/2,displayHeight/2+50);
        this.option3.html('C) Pongal')
        this.option3.position(100,displayHeight/2+150);
        this.option4.html('D) Navratri')
        this.option4.position(displayWidth/2,displayHeight/2+150);
    
      }else if(this.count==25){
        this.question.html('Q5) Which industry makes a lot of money in the entertainment industry?')
        this.question.position(50,displayHeight/2-50)
        this.option1.html('A) Avengers: Endgame')
        this.option1.position(100,displayHeight/2+50);
        this.option2.html(' B) Grand Theft Auto V*')
        this.option2.position(displayWidth/2,displayHeight/2+50);
        this.option3.html(' C) Friends')
        this.option3.position(100,displayHeight/2+150);
        this.option4.html(' D)  None of the above')
        this.option4.position(displayWidth/2,displayHeight/2+150);
    
      }else if(this.count==26){
        this.question.html('Q6) India lies in the hemisphere ')
        this.question.position(50,displayHeight/2-50)
        this.option1.html('A) Northern and eastern*')
        this.option1.position(100,displayHeight/2+50);
        this.option2.html('B) Southern and eastern')
        this.option2.position(displayWidth/2,displayHeight/2+50);
        this.option3.html('C) Northern and western	')
        this.option3.position(100,displayHeight/2+150);
        this.option4.html(' D) Southern and western')
        this.option4.position(displayWidth/2,displayHeight/2+150);
    
      }else if(this.count==27){
        this.question.html('Q7)Golf player Vijay Singh belongs to which country?')
        this.question.position(50,displayHeight/2-50)
        this.option1.html('A) USA')
        this.option1.position(100,displayHeight/2+50);
        this.option2.html('B) Fiji*')
        this.option2.position(displayWidth/2,displayHeight/2+50);
        this.option3.html('C) India	' );
        this.option3.position(100,displayHeight/2+150);
        this.option4.html('D) UK ');
        this.option4.position(displayWidth/2,displayHeight/2+150);
    
      }else if(this.count==28){
        this.question.html('Q8)World Tourism Day is celebrated on- ')
        this.question.position(50,displayHeight/2-50)
        this.option1.html('A) September 12')
        this.option1.position(100,displayHeight/2+50);
        this.option2.html('B) September 25')
        this.option2.position(displayWidth/2,displayHeight/2+50);
        this.option3.html('C) September 27*')
        this.option3.position(100,displayHeight/2+150);
        this.option4.html('D) September 29')
        this.option4.position(displayWidth/2,displayHeight/2+150);
    
      }else if(this.count==29){
        this.question.html('Q9) Which among the following cities in India, is not located in Golden Quadrilateral Road Network? ')
        this.question.position(50,displayHeight/2-50)
        this.option1.html('A) Kolkata')
        this.option1.position(100,displayHeight/2+50);
        this.option2.html('B) Mumbai')
        this.option2.position(displayWidth/2,displayHeight/2+50);
        this.option3.html('C) New Delhi')
        this.option3.position(100,displayHeight/2+150);
        this.option4.html('D) Chandigarh*')
        this.option4.position(displayWidth/2,displayHeight/2+150);
    
      }else if(this.count==30){
        this.question.html('Q10) Which among the following countries whose National Anthem has only music not words -')
        this.question.position(50,displayHeight/2-50)
        this.option1.html('A) India');
        this.option1.position(100,displayHeight/2+50);
        this.option2.html('B) Bahrain*');
        this.option2.position(displayWidth/2,displayHeight/2+50);
        this.option3.html('C) Germany');
        this.option3.position(100,displayHeight/2+150);
        this.option4.html('D) Spain');
        this.option4.position(displayWidth/2,displayHeight/2+150);
    
      }
    
   this.button2.position(displayWidth-100, displayHeight-100)
   
   this.input2.position(displayWidth/2-50,displayHeight-200)

   this.button2.mousePressed(()=>{
   this.answer.push(this.input2.value());
   console.log(this.answer);
   this.count++;
   this.input2.html('');
  })
    } 
  }
  
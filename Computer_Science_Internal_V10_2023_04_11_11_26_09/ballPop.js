/******************************************************************************************
	Written by Deepak.J 2019
    
    Develop an Advanced JS programme internal assesment
    Ball Pop game, user needs to click and pop all the balls in a set amount of time to complete   .   the level, the game will consist of 3 Level with each level getting harder.  
    
	Development history:
    V01: Created Ball array and made gloabl variables
    V02: Added Ball Speed
    V03: Added boundaries for ball 
    V04: Added Level Buttons and reset button with code 
    V05: Added Levels 
    V06: Added changeing ball colour depending on level
    V07: Added changable velocity
    V08: Added Hit and Miss Counter
    V09: Added timer 
    V10: Added UserName
/******************************************************************************************/
/******************************************************************************************
// Global variables
/******************************************************************************************/

var timerValue = 30;
var timerValue2 = 25;
var timerValue3 = 20;
var bottomLine = 50;
var topLine = 50;
var hits = 0;
var misses = 0;
var score = 0;
var userName;
var balls = []
var ballCount = 10;
var started = (false);
var mouse = (false);
var home = true;
var level1 = (false)
var level2 = (false)
var level3 = (false)
var count = 0
var firstTime = true;

/******************************************************************************************
  Function setup

  draws the canvas and has framerate
/******************************************************************************************/

function setup() {
  colorMode(HSB, 255)
  setInterval(timeIt, 1000);
  createCanvas(windowWidth, windowHeight);
  //console.log(windowWidth) 686
  frameRate(60)
  //balls array start
  for (i = 0; i < ballCount; i++)
    balls[i] = {

      /******************************************************************************************
          Ball size Variables
      /******************************************************************************************/

      dia: 80,
      x: random(width),
      y: random(height),
      velY: random(5),
      velX: random(5),

      //ball RGB colours
      col1: (0, 255, 120),
      col2: (0, 255, 80),
      col3: (0, 255, 40),
      col4: (0, 255, 180),
      /******************************************************************************************
          Display Function, Display the ball with the variables stated in the object array
      /******************************************************************************************/

      disp: function() {
        if (home) {
          fill(this.col4, 255, 255, 155)
        }
        if (level1) {
          fill(this.col1, 255, 255, 155)
        }
        if (level2) {
          fill(this.col2, 255, 255, 155)
        }
        if (level3) {
          fill(this.col3, 255, 255, 155)
        }
        ellipse(this.x, this.y, this.dia);
      },

      /******************************************************************************************
          Check Function, Checks to see if the object is still in the boudaries of the canv and if not teleports the ball back into the screen 
      /******************************************************************************************/

      check: function() {

        if (this.x > width - this.dia / 2) {
          this.velX = this.velX * -1;
          this.x = width - this.dia / 2 - 3;
        }
        if (this.x < this.dia / 2) {
          this.velX = this.velX * -1;
          this.x = this.dia / 2 + 3;
        }
        if (this.y > height - this.dia / 2) {
          this.velY = this.velY * -1;
          this.y = height - this.dia / 2 - 3;
        }
        if (this.y < this.dia / 2) {
          this.velY = this.velY * -1;
          this.y = this.dia / 2 + 3;
        }
        if (started) {
          if (this.y < topLine + this.dia / 2) {
            this.y = topLine + this.dia / 2;
            this.velY = this.velY * -1;

          }
        }
      },

      /******************************************************************************************
          Move Function, Moves the ball with teh velocity stated
      /******************************************************************************************/

      move: function() {
        this.x = this.x + this.velX;
        this.y = this.y + this.velY;
      },
      /******************************************************************************************
          clicked function, checks if the users mosue is above the ball and if so it will remove a ball and adds 1 to the hitt variable, also if the user misses the ball and adds. one to misses variable
      /******************************************************************************************/
      clicked: function(_i) {
        var distball = dist(mouseX, mouseY, this.x, this.y)
        if (distball <= this.dia / 2) {
          balls.splice(i, 1);
          console.log("Nice Hit!")
          hits += 1;
          console.log(hits)
        } else {
          count = count + 1
          if (count == balls.length) {
            misses++
          }
        }
      },
      /******************************************************************************************
          Timer function creates a timer and display the timervalue
      /******************************************************************************************/
      timer: function() {
        if (timerValue >= 10) {
          text("0:" + timerValue, width / 2, height / 2);
        }
        if (timerValue < 10) {
          text('0:0' + timerValue, width / 2, height / 2);
        }
        if (timerValue == 0 || misses == ballCount + 1) {
          timerValue = 0;

          mouse = false;
          this.velX = 0
          this.velY = 0
        }
      },
      /******************************************************************************************
	Level speed function checks what level the user has sleected and changes the ball speed according to the appropriate level
/******************************************************************************************/

      levelSpeed: function() {
        if (home) {
          this.velX = random(10)
          this.velY = random(10)
        }
        if (level1) {
          this.velX = random(5)
          this.velY = random(5)
        }
        if (level2) {
          this.velX = random(7)
          this.velY = random(7)
        }
        if (level3) {
          this.velX = random(9)
          this.velY = random(9)
        }
      }
    }
}
/******************************************************************************************
	MAIN CODE	Draw Function
/******************************************************************************************/

function draw() {
  if (started) {

    background("black")
    line(0, topLine, width, topLine);
    textSize(28);
    text(hits + " Hits", 15, 35);
    text(misses + " Misses", 120, 35);
    text("Welcome " + userName, 265, 35);
    stroke("white");
    line(110, 0, 110, 50);
    line(255, 0, 255, 50);
    for (i = 0; i < balls.length; i++) {
      balls[i].timer();
    }

  } else {
    document.getElementById("start").style.visibility = "visible";
    document.getElementById("reset").style.visibility = "hidden";
    background("black");
  }
  for (i = 0; i < balls.length; i++) {
    balls[i].move();
    balls[i].check();
    balls[i].disp();

  }
  if (hits == ballCount) {
    winText = text("You Bet The Game On Easy", "Press RESET To Try On A Harder Difficulty",windowWidth/2 -1/2, windowHeight/2 -1/2); 
  }
}
/******************************************************************************************
	FUNCTIONS
/****************************************÷**************************************************/
/******************************************************************************************
	Function timeIt
    
	If started, checks if timer value is more than 0 and if true timer value --
    
	Input:	N/A
	Return: N/A
/******************************************************************************************/
function timeIt() {
  if (started) {
    if (timerValue > 0) {
      if (firstTime == true) {
        timerValue--;
      }
    }
  }
}
/******************************************************************************************
	Function mouse Pressed 
    
	identifys is variable mouse is set to true, and if so runs function clicked once the mouse  .   is pressed 
	
    Input:	N/A
	Return: N/A
/******************************************************************************************/
function mousePressed() {
  if (mouse) {
    count = 0
    for (i = 0; i < balls.length; i++) {
      balls[i].clicked()
    }
  }
}
/******************************************************************************************
	Function askName
    
	asks the user its name and validtaes if its alphabetic
    
	Input:	N/A
	Return: N/A
/******************************************************************************************/
function askName() {

  //local variables
  var invalidReply = true;
  var valExp = /^[a-z A-Z]+$/ //Validate Alpahbetic 

  //debug console.log(loop until user enters a valid reply)
  while (invalidReply) {
    userName = prompt("What Is Your Name?", "Bob");
    console.log("What Is Your Name")
    console.log(userName)
    userName = userName.trim();
    if (valExp.test(userName) && userName != null) {
      invalidReply = false;

    } else {
      alert("Invalid Reply Click CLOSE To Dismiss This Message")
      console.log("invalid reply Try again")


    }
  }
  alert("Hi " + userName + ".", "Press OK To Contiue.", "success")
  console.log("Hi " + userName + ".")
}
/******************************************************************************************
	Function runProg
    
	Linked to html buttons start and will run programe when html button is clicked, sets   global var to started, hides start button and shows reset button
    
	Input:	N/A
	Return: N/A
/******************************************************************************************/
function runProg1() {
  home = false;
  level1 = true;
  askName();
  document.getElementById("start3").style.visibility = "hidden";
  document.getElementById("start2").style.visibility = "hidden";
  document.getElementById("start").style.visibility = "hidden";
  document.getElementById("reset").style.visibility = "visible";
  started = true;
  mouse = true;
  timerValue = 30;
  ballCol = (0, 255, 120)
  for (i = 0; i < balls.length; i++) {
    balls[i].levelSpeed();
  }
}

function runProg2() {
  home = false;
  level2 = true;
  askName();
  document.getElementById("start3").style.visibility = "hidden";
  document.getElementById("start2").style.visibility = "hidden";
  document.getElementById("start").style.visibility = "hidden";
  document.getElementById("reset").style.visibility = "visible";
  started = true;
  mouse = true;
  timerValue = 25;
  ballCol = (0, 255, 80)
  for (i = 0; i < balls.length; i++) {
    balls[i].levelSpeed();
  }
}

function runProg3() {
  home = false;
  level3 = true;
  askName();
  document.getElementById("start3").style.visibility = "hidden";
  document.getElementById("start2").style.visibility = "hidden";
  document.getElementById("start").style.visibility = "hidden";
  document.getElementById("reset").style.visibility = "visible";
  started = true;
  mouse = true;
  timerValue = 20;
  ballCol = (0, 255, 40)
  for (i = 0; i < balls.length; i++) {
    balls[i].levelSpeed();
  }
}
/******************************************************************************************
	Function Reset
    
	function linked to html button id reset, refreshes page
	
    Input:	N/A
	Return: N/A
/******************************************************************************************/
function reset() {
  document.location.reload()
}
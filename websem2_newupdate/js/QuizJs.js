var seconds;
var mins;   // here I declare the minutes and seconds variables outside to use them in the DURATION function.

function countdown(minutes) {
     seconds = 60; //60 seconds per min.
    mins = minutes // Here I get the minutes as a parameter. I set this in the start function
    function clock() {
        var counter = document.getElementById("counter");
        var current_minutes = mins-1
        seconds--;
        counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        if( seconds > 0 ) {
            setTimeout(clock, 1000);
        } else {

            if(mins > 1){

                countdown(mins-1);           

            }
        }
    }
    clock();
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




var timeout;
function start(){
	
	
    
    timeout = setTimeout(Timeout, 180000);//this is a statement which calls Timeout function after 3 minutes. 180000 miliseconds=3 minutes. There is no connection with the                                                 countdown function with this statement. In this function Duration method is not called.

	document.getElementById("description").style.display = 'none'; //After clicking start button description and the start button at the initial page will disapper
    document.getElementById("startButton").style.visibility = 'hidden';  
    
    countdown(3); //calling the countdown function by setting minutes for 3 will start timer
	var Timeshow = document.getElementById("time");    //In this statement hidden 'time' will appear.
		if (Timeshow) {
			Timeshow.className=(Timeshow.className=='hidden')?'unhidden':'hidden';
	}
    

	var item = document.getElementById("Question1");   //here also the question 1 will appear which was hidden untill clicking the start button
		if (item) {
			item.className=(item.className=='hidden')?'unhidden':'hidden';
 }
}




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// There are 10 functions for all 10 questions to check the correct answer and to setup the the question in the marks table.
var Score1 = 0; //here I initialize the score outside of the function to use it in total function
function firstAnswer()

  {

	
    for (i=0 ; i<document.Q1.quiz.length ; i++) //this is the method of checking which radio button is checked by the user
         {
              if (document.Q1.quiz[i].checked==true) 
           {
              var Answer = document.Q1.quiz[i].value
           }
 }

      
//validation -- whether a radio button is checked      
var Quiz = document.Q1.quiz;   
       for(j=0; j<Quiz.length; j++){
          if(Quiz[j].checked)
              break;
}
if (j==Quiz.length) //if the user don't pick a radio button this loop will execute again and ask a answer from user untill he checked a one.
return alert("Please select an answer ");

 
      
      // this is the nested if else statements to do some activities with the radio button which clicked by user    
if (Answer == "1" )
 { 
  
  	Score1 = 2; //this is the correct answer which placed in radio button 1.if he check this this will add 2 marks to the total
	
	var item = document.getElementById("ImageIDCorrect1"); //in this statement the image for the correct one(between 2 images) at the marks table  
        if (item) {                                                                   //will appear which was hidden already.
			item.className=(item.className=='hidden')?'unhidden':'hidden';
 }
	}

else if (Answer == "2"){ //if the user don't check the first answer then this will check this one and so on untill answer 4.
  
   Score1 = -1;     //if he check this one it will deduct 1 mark from total.
    
   document.getElementById("A12").style.color="#ff0000";    //this wrong answer's font color which selected by user will be turned into red and display in marks table.
    	
		var item = document.getElementById("ImageIDWrong1"); //And the image for a wrong answer will also display in the marks table
		if (item) {
			item.className=(item.className=='hidden')?'unhidden':'hidden';
 }
	}
      
else if (Answer =="3"){ //same comment as in the Answer 2

	Score1 = -1;
	document.getElementById("A13").style.color="#ff0000";  
	
	var item = document.getElementById("ImageIDWrong1");
		if (item) {
			item.className=(item.className=='hidden')?'unhidden':'hidden';
 }
}
      else if (Answer == "4"){   //same comment as in the Answer 2
   
   Score1 = -1;
   document.getElementById("A14").style.color="#ff0000";
    	
		var item = document.getElementById("ImageIDWrong1");
		if (item) {
			item.className=(item.className=='hidden')?'unhidden':'hidden';
 }
    
}
    
var item = document.getElementById("Question1");    //here I use these statements to hide the question 1 after the user calls next question
 if (item) {
 item.className=(item.className=='unhidden')?'hidden':'unhidden';
 }      
      
      
       var item = document.getElementById("Question2"); // And after disappearing the Question1 next question, Question2 will appear.
 if (item) {
 item.className=(item.className=='hidden')?'unhidden':'hidden';
 }

      }
 


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//same method as in the function firstanswer
var Score2 = 0;
function secondAnswer()
  {
	  
	  

    for (i=0 ; i<document.Q2.quiz.length ; i++)
         {
              if (document.Q2.quiz[i].checked==true) 
           {
              var Answer = document.Q2.quiz[i].value
           }
 }
 
//validation -- whether radio button is checked      
var Quiz = document.Q2.quiz;   
       for(j=0; j<Quiz.length; j++){
          if(Quiz[j].checked)
              break;
}
if (j==Quiz.length)
return alert("Please select an answer ");

 
if (Answer == "1" )
 { 

  Score2 = -1;
     document.getElementById("A21").style.color="#ff0000";
     
  var item = document.getElementById("ImageIDWrong2");
		if (item) {
			item.className=(item.className=='hidden')?'unhidden':'hidden';
 }
  }
else if (Answer == "2"){ 
 
   Score2 = -1;
   document.getElementById("A22").style.color="#ff0000";
   
   var item = document.getElementById("ImageIDWrong2");
		if (item) {
			item.className=(item.className=='hidden')?'unhidden':'hidden';
 }

}else if (Answer =="3"){
	
	Score2 = 2;
	
	var item = document.getElementById("ImageIDCorrect2");
    if (item) {
			item.className=(item.className=='hidden')?'unhidden':'hidden';
 }
}else if (Answer == "4"){ 
 
   Score2 = -1;
   document.getElementById("A24").style.color="#ff0000";
   
   var item = document.getElementById("ImageIDWrong2");
		if (item) {
			item.className=(item.className=='hidden')?'unhidden':'hidden';
 }
}

 var item = document.getElementById("Question3");
 if (item) {
 item.className=(item.className=='hidden')?'unhidden':'hidden';
 }

 var item = document.getElementById("Question2");
 if (item) {
 item.className=(item.className=='unhidden')?'hidden':'unhidden';
 }
     
 }



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var Score3 = 0;
function thirdAnswer()
  {
	  
	  

    for (i=0 ; i<document.Q3.quiz.length ; i++)
         {
              if (document.Q3.quiz[i].checked==true) 
           {
              var Answer = document.Q3.quiz[i].value
           }
 }
 
//validation -- whether radio button is checked      
var Quiz = document.Q3.quiz;   
       for(j=0; j<Quiz.length; j++){
          if(Quiz[j].checked)
              break;
}
if (j==Quiz.length)
return alert("Please select an answer ");

      

if (Answer == "1" )
 { 

  Score3 = -1;
      document.getElementById("A31").style.color="#ff0000";
     
  var item = document.getElementById("ImageIDWrong3");
		if (item) {
			item.className=(item.className=='hidden')?'unhidden':'hidden';
 }
  }
else if (Answer == "2"){ 
 
   Score3 = 2;
  
   var item = document.getElementById("ImageIDCorrect3");
		if (item) {
			item.className=(item.className=='hidden')?'unhidden':'hidden';
 }

}else if (Answer =="3"){
	
	Score3 = -1;
    var item = document.getElementById("ImageIDWrong3");
	
	 document.getElementById("A33").style.color="#ff0000";
    if (item) {
			item.className=(item.className=='hidden')?'unhidden':'hidden';
 }
}else if (Answer == "4"){ 
 
   Score3 = -1;
   document.getElementById("A34").style.color="#ff0000";
   
   var item = document.getElementById("ImageIDWrong3");
		if (item) {
			item.className=(item.className=='hidden')?'unhidden':'hidden';
 }
}

 var item = document.getElementById("Question4");
 if (item) {
 item.className=(item.className=='hidden')?'unhidden':'hidden';
 }

 var item = document.getElementById("Question3");
 if (item) {
 item.className=(item.className=='unhidden')?'hidden':'unhidden';
 }
}





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




var Score4 = 0;
function forthAnswer()
  {
	  
	  

    for (i=0 ; i<document.Q4.quiz.length ; i++)
         {
              if (document.Q4.quiz[i].checked==true) 
           {
              var Answer = document.Q4.quiz[i].value
           }
 }
 
//validation -- whether radio button is checked      
var Quiz = document.Q4.quiz;   
       for(j=0; j<Quiz.length; j++){
          if(Quiz[j].checked)
              break;
}
if (j==Quiz.length)
return alert("Please select an answer ");

      
      

if (Answer == "1" )
 { 

  Score4 = 2;
    var item = document.getElementById("ImageIDCorrect4");
		
		if (item) {
			item.className=(item.className=='hidden')?'unhidden':'hidden';
 }
  }
else if (Answer == "2"){ 
 
   Score4 = -1;
   document.getElementById("A42").style.color="#ff0000";
   
   var item = document.getElementById("ImageIDWrong4");
		if (item) {
			item.className=(item.className=='hidden')?'unhidden':'hidden';
 }

}else if (Answer =="3"){
	
	Score4 = -1;
	 document.getElementById("A43").style.color="#ff0000";
   
    
	var item = document.getElementById("ImageIDWrong4");
    if (item) {
			item.className=(item.className=='hidden')?'unhidden':'hidden';
 }
}else if (Answer == "4"){ 
 
   Score4 = -1;
   document.getElementById("A44").style.color="#ff0000";
   
   var item = document.getElementById("ImageIDWrong4");
		if (item) {
			item.className=(item.className=='hidden')?'unhidden':'hidden';
 }
}

 var item = document.getElementById("Question5");
 if (item) {
 item.className=(item.className=='hidden')?'unhidden':'hidden';
 }

 var item = document.getElementById("Question4");
 if (item) {
 item.className=(item.className=='unhidden')?'hidden':'unhidden';
 }
}




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





var Score5 = 0;
function fifthAnswer()
  {
	  
	  

    for (i=0 ; i<document.Q5.quiz.length ; i++)
         {
              if (document.Q5.quiz[i].checked==true) 
           {
              var Answer = document.Q5.quiz[i].value
           }
 }
 

      
      //validation -- whether radio button is checked      
var Quiz = document.Q5.quiz;   
       for(j=0; j < Quiz.length; j++){
          if(Quiz[j].checked)
              break;
}
if (j == Quiz.length)
return alert("Please select an answer ");


if (Answer == "1" )
 { 

  Score5 = 2;
 var item = document.getElementById("ImageIDCorrect5");
		if (item) {
			item.className=(item.className=='hidden')?'unhidden':'hidden';
 }
  }
else if (Answer == "2"){ 
 
   Score5 = -1;
   document.getElementById("A52").style.color="#ff0000";
   
   var item = document.getElementById("ImageIDWrong5");
		if (item) {
			item.className=(item.className=='hidden')?'unhidden':'hidden';
 }

}else if (Answer =="3"){
	
	Score5 = -1;
	document.getElementById("A53").style.color="#ff0000";
    
	var item = document.getElementById("ImageIDWrong5");
    if (item) {
			item.className=(item.className=='hidden')?'unhidden':'hidden';
 }
}
      else if (Answer == "4"){ 
 
   Score5 = -1;
   document.getElementById("A54").style.color="#ff0000";
   
   var item = document.getElementById("ImageIDWrong5");
		if (item) {
			item.className=(item.className=='hidden')?'unhidden':'hidden';
 }
}

 var item = document.getElementById("Question6");
 if (item) {
 item.className=(item.className=='hidden')?'unhidden':'hidden';
 }

 var item = document.getElementById("Question5");
 if (item) {
 item.className=(item.className=='unhidden')?'hidden':'unhidden';
 }
}






////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






var Score6 = 0;
function sixthAnswer()
  {
	  
	  

    for (i=0 ; i<document.Q6.quiz.length ; i++)
         {
              if (document.Q6.quiz[i].checked==true) 
           {
              var Answer = document.Q6.quiz[i].value
           }
 }
 

      
      //validation -- whether radio button is checked      
var Quiz = document.Q6.quiz;   
       for(j=0; j<Quiz.length; j++){
          if(Quiz[j].checked)
              break;
}
if (j==Quiz.length)
return alert("Please select an answer ");


if (Answer == "1" )
 { 

  Score6 = -1;
     document.getElementById("A61").style.color="#ff0000";
     
  var item = document.getElementById("ImageIDWrong6");
		if (item) {
			item.className=(item.className=='hidden')?'unhidden':'hidden';
 }
  }
else if (Answer == "2"){ 
 
   Score6 = -1;
   document.getElementById("A62").style.color="#ff0000";
   
   var item = document.getElementById("ImageIDWrong6");
		if (item) {
			item.className=(item.className=='hidden')?'unhidden':'hidden';
 }

}else if (Answer =="3"){
	
	Score6 = -1;
	 document.getElementById("A63").style.color="#ff0000";
   
   var item = document.getElementById("ImageIDWrong6");
	
    if (item) {
			item.className=(item.className=='hidden')?'unhidden':'hidden';
 }
}else if (Answer == "4"){ 
 
   Score6 = 2;
  var item = document.getElementById("ImageIDCorrect6");
		if (item) {
			item.className=(item.className=='hidden')?'unhidden':'hidden';
 }
}

 var item = document.getElementById("Question7");
 if (item) {
 item.className=(item.className=='hidden')?'unhidden':'hidden';
 }

 var item = document.getElementById("Question6");
 if (item) {
 item.className=(item.className=='unhidden')?'hidden':'unhidden';
 }
}






////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////









var Score7 = 0;
function seventhAnswer()
  {
	  
	  

    for (i=0 ; i<document.Q7.quiz.length ; i++)
         {
              if (document.Q7.quiz[i].checked==true) 
           {
              var Answer = document.Q7.quiz[i].value
           }
 }
 
      
      //validation -- whether radio button is checked      
var Quiz = document.Q7.quiz;   
       for(j=0; j<Quiz.length; j++){
          if(Quiz[j].checked)
              break;
}
if (j==Quiz.length)
return alert("Please select an answer ");



if (Answer == "1" )
 { 

  Score7 = -1;
  var item = document.getElementById("ImageIDWrong7");
        document.getElementById("A71").style.color="#ff0000";
     
		if (item) {
			item.className=(item.className=='hidden')?'unhidden':'hidden';
 }
  }
else if (Answer == "2"){ 
 
   Score7 = 2;
    
    var item = document.getElementById("ImageIDCorrect7");
		if (item) {
			item.className=(item.className=='hidden')?'unhidden':'hidden';
 }

}else if (Answer =="3"){
	
	Score7 = -1;
       document.getElementById("A73").style.color="#ff0000";
	
	var item = document.getElementById("ImageIDWrong7");
    if (item) {
			item.className=(item.className=='hidden')?'unhidden':'hidden';
 }
}else if (Answer == "4"){ 
 
   Score7 = -1;
   document.getElementById("A74").style.color="#ff0000";
   
   var item = document.getElementById("ImageIDWrong7");
		if (item) {
			item.className=(item.className=='hidden')?'unhidden':'hidden';
 }
}

 var item = document.getElementById("Question8");
 if (item) {
 item.className=(item.className=='hidden')?'unhidden':'hidden';
 }

 var item = document.getElementById("Question7");
 if (item) {
 item.className=(item.className=='unhidden')?'hidden':'unhidden';
 }
}




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





var Score8 = 0;
function eighthAnswer()
  {
	  
	  

    for (i=0 ; i<document.Q8.quiz.length ; i++)
         {
              if (document.Q8.quiz[i].checked==true) 
           {
              var Answer = document.Q8.quiz[i].value
           }
 }
 
      //validation -- whether radio button is checked      
var Quiz = document.Q8.quiz;   
       for(j=0; j<Quiz.length; j++){
          if(Quiz[j].checked)
              break;
}
if (j==Quiz.length)
return alert("Please select an answer ");

      


if (Answer == "1" )
 { 

  Score8 = -1;
     
     document.getElementById("A81").style.color="#ff0000"
     
  var item = document.getElementById("ImageIDWrong8");
		if (item) {
			item.className=(item.className=='hidden')?'unhidden':'hidden';
 }
  }
else if (Answer == "2"){ 
 
   Score8 = -1;
   document.getElementById("A82").style.color="#ff0000";
   
   var item = document.getElementById("ImageIDWrong8");
		if (item) {
			item.className=(item.className=='hidden')?'unhidden':'hidden';
 }

}else if (Answer =="3"){
	
	Score8 = 2;
	 var item = document.getElementById("ImageIDCorrect8");
    
    if (item) {
			item.className=(item.className=='hidden')?'unhidden':'hidden';
 }
}else if (Answer == "4"){ 
 
   Score8 = -1;
   document.getElementById("A84").style.color="#ff0000";
   
   var item = document.getElementById("ImageIDWrong8");
		if (item) {
			item.className=(item.className=='hidden')?'unhidden':'hidden';
 }
}

 var item = document.getElementById("Question9");
 if (item) {
 item.className=(item.className=='hidden')?'unhidden':'hidden';
 }

 var item = document.getElementById("Question8");
 if (item) {
 item.className=(item.className=='unhidden')?'hidden':'unhidden';
 }
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





var Score9 = 0;
function ninethAnswer()
  {
	  
	  

    for (i=0 ; i<document.Q9.quiz.length ; i++)
         {
              if (document.Q9.quiz[i].checked==true) 
           {
              var Answer = document.Q9.quiz[i].value
           }
 }
 
//validation -- whether radio button is checked      
var Quiz = document.Q9.quiz;   
       for(j=0; j<Quiz.length; j++){
          if(Quiz[j].checked)
              break;
}
if (j==Quiz.length)
return alert("Please select an answer ");


if (Answer == "1" )
 { 

  Score9 = -1;
  var item = document.getElementById("ImageIDWrong9");
     
     document.getElementById("A91").style.color="#ff0000";
		if (item) {
			item.className=(item.className=='hidden')?'unhidden':'hidden';
 }
  }
else if (Answer == "2"){ 
 
   Score9 = 2;
 
    var item = document.getElementById("ImageIDCorrect9");
  
		if (item) {
			item.className=(item.className=='hidden')?'unhidden':'hidden';
 }

}else if (Answer =="3"){
	
	Score9 = -1;
    document.getElementById("A93").style.color="#ff0000";
	
	var item = document.getElementById("ImageIDWrong9");
    if (item) {
			item.className=(item.className=='hidden')?'unhidden':'hidden';
 }
}else if (Answer == "4"){ 
 
   Score9 = -1;
   document.getElementById("A94").style.color="#ff0000";
   
   var item = document.getElementById("ImageIDWrong9");
		if (item) {
			item.className=(item.className=='hidden')?'unhidden':'hidden';
 }
}

 var item = document.getElementById("Question10");
 if (item) {
 item.className=(item.className=='hidden')?'unhidden':'hidden';
 }

 var item = document.getElementById("Question9");
 if (item) {
 item.className=(item.className=='unhidden')?'hidden':'unhidden';
 }
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




var Score10 = 0;
function TenthAnswer()
  {
  
    for (i=0 ; i<document.Q10.quiz.length ; i++)
         {
              if (document.Q10.quiz[i].checked==true) 
           {
              var Answer = document.Q10.quiz[i].value
           }
       }
	   
	   
      //validation -- whether radio button is checked      
var Quiz = document.Q10.quiz;   
       for(j=0; j<Quiz.length; j++){
          if(Quiz[j].checked)
              break;
}
if (j==Quiz.length)
return alert("Please select an answer ");


if (Answer == "1" )
 { 
  
  Score10 = -1;
     document.getElementById("A101").style.color="#ff0000";
  
  var item = document.getElementById("ImageIDWrong10");
		if (item) {
			item.className=(item.className=='hidden')?'unhidden':'hidden';
 }
  }
else if (Answer == "2"){ 
   
	Score10 = -1;
    document.getElementById("A102").style.color="#ff0000";
   var item = document.getElementById("ImageIDWrong10");
		if (item) {
			item.className=(item.className=='hidden')?'unhidden':'hidden';
 }

}else if (Answer =="3"){

	Score10 = -1;
	document.getElementById("A103").style.color="#ff0000";
	var item = document.getElementById("ImageIDWrong10");
		if (item) {
			item.className=(item.className=='hidden')?'unhidden':'hidden';
        }
 }else if (Answer == "4"){ 
   
	Score10 = 2;
   var item = document.getElementById("ImageIDCorrect10");
		if (item) {
			item.className=(item.className=='hidden')?'unhidden':'hidden';
 }
}
   
      
//The submit button in this tenth answer calls another 3 methods for setup the marks page
 
      
clearTimeout(timeout);  //if the user submitted the quiz before right time this statement will clear the timeout. So then there will be no timeout 
Duration(); //this calls the duration function which shows the duration of the quiz that the user spends

total(); //calling the total function
}

   
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    
function Timeout(){ // this function will be called if the user is not able to submit the quiz ontime. after 3 minutes this function will be called automatically and shows the                         marks page
    total();
    var TextDuration = document.getElementById("DurationText");//this will hide the countdown timing text from the resul page
    if (TextDuration) {
    TextDuration.className=(TextDuration.className=='unhidden')?'hidden':'unhidden';
    }
    clearTimeout(timeout);
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function Duration(){        //this function is for calculate the time that the user spends to finish the quiz
	var TotalTime = 180;
	var NowMinutes = mins-1;       //in this function i get current time on the countdown function and convert that to seconds.then I deduct that number from total seconds.
	var NowSeconds = seconds;
	
	var durationMin;   
	var durationSec;
	var durationFinal;

	var RemaingTime = NowMinutes*60 + NowSeconds;
	var duration = TotalTime - RemaingTime;
	if (duration > 60 ){
		durationMin = duration/60;
		durationSec = duration%60;
		
		durationFinal = "You have took " + durationMin + " minutes and " + durationSec + " seconds to complete the Quiz";
		document.getElementById("DurationText").innerHTML = durationFinal;
	}
	else {
		durationSec = duration;
		durationFinal = "You have took " + durationSec + " seconds to complete the Quiz";
		document.getElementById("DurationText").innerHTML = durationFinal;
		
	}
	
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
      
      
      


var totalMarks;
function total()
{
    
    document.getElementById("questionTable").style.display = 'none'; // when calling this function it will hide the question table.
    
    //here I get the Id of the correct answers from marks table and change the font color to green. bcz they are always correct answers
	//changing the font color of correct answers
	document.getElementById("A11").style.color="#00ff00";
	document.getElementById("A23").style.color="#00ff00";
    document.getElementById("A32").style.color="#00ff00";
    document.getElementById("A41").style.color="#00ff00";
    document.getElementById("A51").style.color="#00ff00";
	document.getElementById("A64").style.color="#00ff00";
    document.getElementById("A72").style.color="#00ff00";
    document.getElementById("A83").style.color="#00ff00";
    document.getElementById("A92").style.color="#00ff00";
    document.getElementById("A104").style.color="#00ff00";
	
    
    // summing all scores from first-tenth answers
 totalMarks = parseInt(Score1) + parseInt(Score2) + parseInt(Score3)+ parseInt(Score4) + parseInt(Score5) + parseInt(Score6) + parseInt(Score7) 
     + parseInt(Score8) + parseInt(Score9) + parseInt(Score10);

var printResult = "Your Score is " + totalMarks + " Out Of 20.";

document.getElementById("Results").innerHTML = printResult; // setting results to the text in the marks table

alert("your score is "+ totalMarks +" out of 20");

    
    
var Timeshow = document.getElementById("time");//this will hide the countdown timing text from the resul page
 if (Timeshow) {
 Timeshow.className=(Timeshow.className=='unhidden')?'hidden':'unhidden';
 }

	
var Marks = document.getElementById("MarksPage"); //this will unhide the markspage which is already hidden

 if (Marks) {
 Marks.className=(Marks.className=='hidden')?'unhidden':'hidden';
 }

    
BlinkingBack(); // calling the blinking scrren according to marks
}


      

      
      
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
      
      
      
      
      
      

function BlinkingBack(){ //this function will blink the background of marks table accoding to marks achieved by user
	
	var ofsec = 0;
	var A = document.getElementById('marksTable');
	if (totalMarks<=5){

		window.setInterval(function(){
		A.style.background = 'rgba(255,0,0,'+Math.abs(Math.sin(ofsec))+')';
								ofsec += 0.01; //red
		}, 10);

	} else if (totalMarks <=10 && totalMarks>5) {
		window.setInterval(function(){
		A.style.background = 'rgba(229, 148, 43,'+Math.abs(Math.sin(ofsec))+')';
								ofsec += 0.01; //dark orange
		}, 10);

		
	}else if (totalMarks <=15 && totalMarks>10) {
		window.setInterval(function(){
		A.style.background = 'rgba(225, 229, 43,'+Math.abs(Math.sin(ofsec))+')';
								ofsec += 0.01; //yellow
		}, 10);
		
	}else {
		window.setInterval(function(){
		A.style.background = 'rgba(163, 229, 43,'+Math.abs(Math.sin(ofsec))+')';
								ofsec += 0.01; //green
		}, 10);
		
	}
}
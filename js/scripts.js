function quiz(){

    var score = 0;
    var newScore = 0;
    var questionOne = document.forms["myForm"]["questionOne"].value;
    var questionTwo = document.forms["myForm"]["questionTwo"].value;
    var questionThree = document.forms["myForm"]["questionThree"].value;
    var questionFour = document.forms["myForm"]["questionFour"].value;
    var questionFive = document.forms["myForm"]["questionFive"].value;

    for(i=0; i<=5; i++){
      if(questionOne == "2"){
        newScore = score+1;
      }
      if(questionTwo == "1"){
        newScore=newScore+1;
      }
      if(questionThree == "2") {
        newScore=newScore+1;
      }
      if (questionFour == "3"){
        newScore=newScore+1;
      }
      if (questionFive == "2"){
        newScore=newScore+1;
      }

    }

      var percentageScore = (newScore/5) * 100;

    document.getElementById("message").innerHTML="You scored " + percentageScore + "%";
    document.getElementById("result").style.visibility = "visible";
    e.preventDefault();
}

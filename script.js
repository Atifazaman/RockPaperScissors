function computer(){
      let comPlay = Math.random();
      if (comPlay <= 1/2){
         return "Rock";
      }else if (comPlay <= 2/3){
         return "Paper";
      }else{
         return "Scissors";
      }
    }
  function rock(){
     let userMove = "Rock";
     let CompMove = computer();
     getResult(userMove,CompMove);
  }
  function paper(){
     let userMove = "Paper";
     let CompMove = computer();
     getResult(userMove,CompMove);
  }
  function scissors(){
     let userMove = "Scissors";
     let CompMove = computer();
     getResult(userMove,CompMove);
  }
  function getResult(userMove, compMove){
    const imageMap = {
     "Rock" : "Rock.png",
     "Paper" : "Paper.png",
     "Scissors" : "Scissors.png"
    };
    document.querySelector("h2").innerHTML = `Computer's Move = <img src="${imageMap[compMove]}" class="images" style="width:3vw;height:5vh;"> &nbsp;&nbsp;
    Your's Move = <img src="${imageMap[userMove]}" class="images" style="width:3vw;height:5vh;">`;
    if (compMove === userMove){
      document.querySelector("h2.result").innerHTML="Tie!";
    }else if((compMove === "Rock" && userMove === "Paper") || ( compMove === "Paper" &&userMove === "Scissors") || (compMove === "Scissors" && userMove === "Rock")){
      document.querySelector("h2.result").innerHTML="You Win!!";
    }else{
      document.querySelector("h2.result").innerHTML="Computer Win!!";
    }
  }
let rules = document.querySelector('footer button'), 
    modal = document.querySelector('.modal'), 
    close = document.querySelector('.close-btn');

let picks = document.querySelector('.picks'),
    pickContainer = document.querySelectorAll('.pick-container');



// modal rules event
window.addEventListener('click', (e)=>{
  if(e.target === rules){
    modal.classList.add('active');
  }
  if(e.target === close){
    modal.classList.remove('active');
  }
})

// pick event
pickContainer.forEach(pick=>{
  pick.addEventListener('click', (e)=>{
    let pickType = pick.lastElementChild.lastElementChild.className;
        e.target= pick;
    removeOtherPicks(pickType);
    shiftPick(pick);
    displayMyChoice();
    displayComputerChoice();
    setTimeout(()=>{
      document.querySelector('.computer-choice >.pick-container').style.visibility = 'visible';
      document.querySelector('.computer-choice >.pick-container').style.opacity= '1';
    }, 3000)
    setTimeout(() => comparePicks(), 3600);
    setTimeout(() => updateScore(), 3700);
  })
})

function removeOtherPicks(myPick) {
  let triangle = document.querySelector('.triangle')
  pickContainer.forEach(pick=>{
    let pickType = pick.lastElementChild.lastElementChild.className;
    if(myPick !== pickType){
      pick.style.display = 'none';
      triangle.style.visibility = 'hidden';
    }  
  })
}


function shiftPick(pick) {
  pick.classList.add('shift');
  let circleContainer = document.querySelector('.my-choice > .circle-container');
  let choiceTop = circleContainer.getBoundingClientRect().top;
  let choiceLeft = circleContainer.getBoundingClientRect().left;
  let pickTop = pick.getBoundingClientRect().top;
  let pickLeft = pick.getBoundingClientRect().left;
  
  pick.style.transform = `translate(${choiceLeft-pickLeft}px, ${choiceTop-pickTop}px)`
  pick.style.transition = '1s ease';
}

function displayMyChoice(){
  let myChoice = document.querySelector('.choice.my-choice');
  myChoice.style.visibility = 'visible';
  myChoice.style.transition = '1s ease-in-out 1s';
}

function displayComputerChoice(){
    let computerChoice = document.querySelector('.choice.computer-choice');
  computerChoice.style.visibility = 'visible';
  computerChoice.style.transition = '1s ease-in-out 2.4s';
}

computerRandomChoice();
restartGame();

function computerRandomChoice() {
  let computerChoice = document.querySelector('.choice.computer-choice');
  let pickArray = [];
  pickContainer.forEach(pick=>{
    let pickType = pick;
    pickArray.push(pick)
  }) 
  let pickIndex = Math.floor(Math.random() * 3);
  let randomChoice = pickArray[pickIndex];
  let computerPick = randomChoice.cloneNode(true);
  computerChoice.appendChild(computerPick);
}

function comparePicks(){
  let winLoseTie = document.querySelector('.win-lose-tie')
  let winner = document.querySelector('.win-lose-tie >strong')
  let theHousePick = document.querySelector('.computer-choice >.pick-container').lastElementChild.lastElementChild.className;
  let myPick = document.querySelector('.pick-container.shift').lastElementChild.lastElementChild.className;
  let win = 'YOU WIN';
  let lose = 'YOU LOSE';
  let tie = 'IT\'S A TIE'; 
  winLoseTie.style.opacity = '1';

  
  // tie
  if(myPick == theHousePick){
    winner.textContent = tie;
    return;
  }

  //rock
  if(myPick === 'rock'){
    if(theHousePick === 'scissors'){
      winner.textContent = win;
      return;
    }else{
      winner.textContent = lose;
      return;
    }
  }

  // paper
  if(myPick === 'paper'){
    if(theHousePick === 'rock'){
      winner.textContent = win;
      return;
    }else{
      winner.textContent = lose;
      return;
    }
  }  

  // scissors
  if(myPick === 'scissors'){
    if(theHousePick === 'paper'){
      winner.textContent = win;
      return;
    }else{
      winner.textContent = lose;
      return;
    }
  }
}


function restartGame() {
  let restartBtn = document.querySelector('.win-lose-tie button');
  restartBtn.addEventListener('click', (e)=>{
    window.location.reload(false);
  })
}

function updateScore() {
  let winner = document.querySelector('strong').innerText;
  let scoreContainer = document.querySelector('.score');
  let shift = document.querySelector('.shift');
  let computer = document.querySelector('.computer-choice >.pick-container');
  let score = parseInt(scoreContainer.innerText);

  if(winner === 'YOU WIN'){
    score++;
    scoreContainer.innerText = String(score);
    shift.classList.add('radiate');
  }
  if(winner === 'YOU LOSE'){
    score--;
    scoreContainer.innerText = String(score);
    computer.classList.add('radiate');
  }
  if(winner === 'IT\'S A TIE'){
    score;
    scoreContainer.innerText = String(score);
  }
  
  localStorage.setItem('score', score);

}

getScore();

function getScore(){
  let currentScore = localStorage.getItem('score');
  let score = document.querySelector('.score');

  // if the localStorage data is deleted/tampered with
  if(localStorage.getItem('score') == 'NaN' || '' || score.innerText == 'NaN' || ''){
    localStorage.setItem('score', '12');
    score.innerText = 12;
  }

  score.innerText = currentScore;
}
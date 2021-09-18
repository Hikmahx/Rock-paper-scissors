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
  
  console.log(`circle Left: ${choiceLeft}`)
  console.log(`circle Top: ${choiceTop}`)
  console.log(`pick top: ${pickTop}`)
  console.log(`pick left: ${pickLeft}`)
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


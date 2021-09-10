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
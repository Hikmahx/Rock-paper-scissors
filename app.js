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


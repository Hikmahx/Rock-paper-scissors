let rules = document.querySelector('footer button'), 
    modal = document.querySelector('.modal'), 
    close = document.querySelector('.close-btn');


// modal rules event
window.addEventListener('click', (e)=>{
  if(e.target === rules){
    modal.classList.add('active');
  }
  if(e.target === close){
    modal.classList.remove('active');
  }
})
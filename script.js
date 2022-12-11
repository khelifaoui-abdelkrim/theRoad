Array.from(document.querySelectorAll(".switch-btn")).forEach(btn=>{
  btn.onclick = ()=>{
    btn.parentElement.parentElement.classList.toggle("change")
  }
})

// navbar colors 
let colors = ['#0033cc', '#0099cc', '#ff6600', '#ff0000', '#00ff99'];
let i=0;

Array.from(document.querySelectorAll('.navlink')).forEach(item=>{
  item.style.cssText = `background-color :${colors[i++]}`
})

// btn 
document.querySelector('.nav-btn').addEventListener('click',()=>{
  document.querySelector('.container').classList.toggle('change')
})
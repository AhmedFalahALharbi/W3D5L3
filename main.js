let stoplight = document.getElementById('stopLight')
let slowlight = document.getElementById('slowLight')
let golight = document.getElementById('goLight')
let stopbutton = document.getElementById('stopButton')
let slowbutton = document.getElementById('slowButton')
let gobutton = document.getElementById('goButton')

stopbutton.addEventListener('click', ()=>{
    stoplight.style.backgroundColor = 'red'
    slowlight.style.backgroundColor = 'black'
    golight.style.backgroundColor = 'black'
})
slowbutton.addEventListener('click', ()=>{
    stoplight.style.backgroundColor = 'black'
    slowlight.style.backgroundColor = 'orange'
    golight.style.backgroundColor = 'black'
})
gobutton.addEventListener('click', ()=>{ 
    stoplight.style.backgroundColor = 'black'
    slowlight.style.backgroundColor = 'black'
    golight.style.backgroundColor = 'green'
})
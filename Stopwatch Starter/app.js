const timerMs = document.querySelector('.timer__milliseconds');
const timerS = document.querySelector('.timer__seconds')
const timerM = document.querySelector('.timer__minutes')

let cancelId
let startTime 
let savedTime = 0

function startTimer(){
  startTime = Date.now()
  cancelId = requestAnimationFrame(updateTimer)
}

function stopTimer(){
  savedTime += Date.now() - startTime
  cancelAnimationFrame(cancelId)
}

function resetTimer(){
  startTime = Date.now();
  savedTime = 0

  timerMs.innerHTML = '00'
  timerS.innerHTML = '00'
  timerM.innerHTML = '00'
}

function updateTimer(){
  let msElapsed = savedTime + Date.now() - startTime
  let sElapsed = msElapsed / 1000
  let mElapsed = sElapsed / 60

  let minText = Math.floor(mElapsed)
  let secText = Math.floor(sElapsed % 60)
  let milliText = msElapsed % 1000

  if(minText.toString().length === 1){
    minText += '00'
  }
  if(secText.toString().length === 1){
    secText += '00'
  }
  if(milliText.toString().length === 1){
    secText = milliText.toString().padStart(3, '00')
  }

  timerMs.innerHTML = msElapsed % 1000
  timerS.innerHTML = Math.floor(sElapsed % 60)
  timerM.innerHTML = Math.floor(mElapsed)
  cancelId = requestAnimationFrame(updateTimer)
}
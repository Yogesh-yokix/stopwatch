let hr = 0, min = 0, sec = 0, mill = 0;
let timerInterval = null;

function start() {
  console.log("hi");
  
  if (timerInterval !== null) return;

  timerInterval = setInterval(() => {
    mill += 1;
    
    if (mill === 100) {
      sec++;
      mill = 0;
    }
    if (sec === 60) {
      min++;
      sec = 0;
    }
    if (min === 60) {
      hr++;
      min = 0;
    }

    update();
  }, 10); 
}

function stop() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function reset() {
  stop(); 
  hr = min = sec = mill = 0;
  update(); 
}

function update() {
  const pad = (num) => String(num).padStart(2, '0');

  let time = `${pad(hr)}:${pad(min)}:${pad(sec)}:${pad(mill)}`;
  
  const displayElement = document.querySelector('.display');
  if (displayElement) {
    displayElement.innerText = time;
  }
}

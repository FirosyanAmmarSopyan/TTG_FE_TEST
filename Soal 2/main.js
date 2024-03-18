const startPauseButton = document.getElementById('start-pause');
const stopButton = document.getElementById('stop');
const flagButton = document.getElementById('flag');
const timeDisplay = document.getElementById('time');
const lapsList = document.getElementById('laps');

let elapsedTime = 0;
let intervalId;
let isRunning = false;

startPauseButton.addEventListener('click', () => {
 if (isRunning) {
    clearInterval(intervalId);
    isRunning = false;
    startPauseButton.textContent = 'Start';
 } else {
    intervalId = setInterval(() => {
      elapsedTime += 10;
      const minutes = Math.floor(elapsedTime / 60000);
      const seconds = Math.floor((elapsedTime % 60000) / 1000);
      const milliseconds = Math.floor((elapsedTime % 1000) / 10);
      timeDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
    }, 10);
    isRunning = true;
    startPauseButton.textContent = 'Pause';
 }
});

stopButton.addEventListener('click', () => {
 clearInterval(intervalId);
 elapsedTime = 0;
 timeDisplay.textContent = '00:00.000';
 startPauseButton.textContent = 'Start';
 lapsList.innerHTML = '';
 isRunning = false;
});

flagButton.addEventListener('click', () => {
 const minutes = Math.floor(elapsedTime / 60000);
 const seconds = Math.floor((elapsedTime % 60000) / 1000);
 const milliseconds = Math.floor((elapsedTime % 1000) / 10);
 const lapTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
 const li = document.createElement('li');
 li.textContent = lapTime;
 lapsList.appendChild(li);
});

// const refs = {
//   days: document.querySelector('[data-value="days"]'),
//   hours: document.querySelector('[data-value="hours"]'),
//   mins: document.querySelector('[data-value="mins"]'),
//   secs: document.querySelector('[data-value="secs"]'),
// };
// const timer = {
//   start() {
//     const endTime = new Date('Jul 17, 2021');   
//     setInterval(() => {
//       const startTime = Date.now();
//       const finishedTime = endTime - startTime;
//       const remainingTime = getTimeComponents(finishedTime);
//       updateClock(remainingTime);
//     }, 1000);
//   },
// };
// timer.start();
//   function updateClock({days, hours, mins, secs}) {
//     refs.days.textContent = `${days}`;
//     refs.hours.textContent = `${hours}`;
//     refs.mins.textContent = `${mins}`;
//     refs.secs.textContent = `${secs}`;
//   }

  class EndTimer {
    constructor({ selector, targetDate }) {
      this.selector = selector;
      this.targetDate = targetDate;
    }
    
    start() {
      const endTime = this.targetDate;
      
      setInterval(() => {
        const startTime = Date.now();
        const finishedTime = endTime - startTime;
        const {days, hours, mins, secs} = getTimeComponents(finishedTime);
        
        const timer1 = document.querySelector('#timer-1');
        
        const day = timer1.querySelector('[data-value="days"]');
        day.textContent = days;
        
        const hour = timer1.querySelector('[data-value="hours"]');
        hour.textContent = hours;
        
        const min = timer1.querySelector('[data-value="mins"]');
        min.textContent = mins;
        
        const sec = timer1.querySelector('[data-value="secs"]');
        sec.textContent = secs;
        
      }, 1000);
    }   
  }
  
  const timer = new EndTimer ({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2021'),
  })
  timer.start();

  function pad(value) {
    return String(value).padStart(2, '0');
  }
  
  function getTimeComponents(time) {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    return {days, hours, mins, secs};
    
  }
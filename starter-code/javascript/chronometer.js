class Chronometer {
  constructor() {
    // event emitter as per https://stackoverflow.com/questions/15308371/custom-events-model-without-using-dom-events-in-javascript
    var target = document.createTextNode(null);

    // Pass EventTarget interface calls to DOM EventTarget object
    this.addEventListener = target.addEventListener.bind(target);
    this.dispatchEvent = target.dispatchEvent.bind(target);

    this.seconds = 0;
    this.milis = 0
    this.minutes = 0
    this.intervalId = 0;
  }

  start = () => {
    this.intervalId = setInterval(() => {
      this.milis++;
      if (this.milis % 100 == 0) {
        this.seconds++;
      }
      if (this.seconds === 1000) {
        this.seconds = 0;
      }
      if (this.milis === 100) {
        this.milis = 0;
      }
      if (this.seconds > 59) {
        this.seconds = 0
        this.minutes++
      }

      let milisWithMask = this.milis < 10 ? `0${this.milis}` : this.milis
      let secondsWithMask = this.seconds < 10 ? `0${this.seconds}` : this.seconds
      let minutesWithMask = this.minutes < 10 ? `0${this.minutes}` : this.minutes

      this.dispatchEvent(new CustomEvent('timeChanged', { detail: { milis: milisWithMask, seconds: secondsWithMask, minutes: minutesWithMask } }))
    }, 10)
  };

  stop = () => {
    clearInterval(this.intervalId)
  };

  reset = () => {
    this.seconds = 0;
    this.milis = 0;
  };
}



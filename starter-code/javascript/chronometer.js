class Chronometer {
  constructor(){
    this.currentTime = 0;
    this.intervalId = 0;
    this.milis = 0
  }


start = () => {
  this.intervalId = setInterval(()=>{
    // this.setTime()
    // printTime()
    this.milis ++;
    if(this.milis%100==0){
      this.currentTime++;
    }
    if(this.currentTime === 1000){
      this.currentTime = 0;
    }
    if(this.milis === 100){
      this.milis = 0;
    }
  },10)

};

getMinutes = () => {
  return Math.floor(this.currentTime/60);
  
};

getSeconds = () => {
  return this.currentTime%60
};

twoDigitsNumber = (num) => {
  num = num.toString()
  if(num.length<2){
    return `0${num}`
  }else{
    return num
  }
};

getTime = () => {
  var minutes = this.twoDigitsNumber(this.getMinutes())
  var seconds = this.twoDigitsNumber(this.getSeconds())
  var mili = this.twoDigitsNumber(this.getMilliseconds())
  return [minutes, seconds, mili]
};

getMilliseconds = () => {
  return this.milis
};

stopClick = () => {
  clearInterval(this.intervalId)
};

resetClick = () => {
  this.currentTime = 0;
  this.milis = 0;
};
}



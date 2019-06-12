var chronometer = new Chronometer();

function printTime (){
  Array(10).fill().forEach(() => new ChronoGUI())
  
  var allClocks = document.querySelectorAll(".clock")
  var chrono = new Chronometer()
  chrono.start()

  setInterval(() => {
    for (var i = 0 ; i < allClocks.length; i++){
      allClocks[i].querySelector(".sphere").innerHTML = chrono.getSeconds().toString()
    }
  }, 10)
}


// var btnLeft     = document.getElementById('btnLeft');
// var btnRight    = document.getElementById('btnRight');
// var minDec      = document.getElementById('minDec');
// var minUni      = document.getElementById('minUni');
// var secDec      = document.getElementById('secDec');
// var secUni      = document.getElementById('secUni');
// var milDec      = document.getElementById('milDec');
// var milUni      = document.getElementById('milUni');
// var splits      = document.getElementById('splits');
// var splitsCont  = document.getElementById('splits-container');
// // var intervalDom = 0;
// // var intervalCount = 0;

// function printTime() {
//   var time = 0;

//   var intervalDom = setInterval(()=>{
//     time = chronometer.getTime()


//       printMinutes(time[0]);
//       printSeconds(time[1]);
//       printMilliseconds(time[2]);
//   },10)
// }

// function printMinutes(minus) {
//   minUni.innerHTML=minus[1]
//   minDec.innerHTML=minus[0]
// }

// function printSeconds(secs) {
//   secUni.innerHTML=secs[1]
//   secDec.innerHTML=secs[0]
// }

// function printMilliseconds(milis) {
//   milUni.innerHTML=milis[1]
//   milDec.innerHTML=milis[0]
// }

// function printSplit(time) {
//   var text = `${time[0][0]}${time[0][1]} : ${time[1][0]}${time[1][1]} , ${time[2][0]}${time[2][1]}`;
//   var line = document.createElement('li')
//   line.textContent = text;
//   splits = document.getElementById('splits');
//   splits.appendChild(line)
// }

// function clearSplits() {
//   document.querySelectorAll('li').forEach(elem=>{
//     elem.remove()
//   })
// }

// function setStopBtn() {
//   // clearInterval(intervalDom)
//   chronometer.stopClick()
// }

// function setSplitBtn() {
//   printSplit(chronometer.setTime())
// }

// function setStartBtn() {
//   chronometer.start();
//   printTime();
// }

// function setResetBtn() {
//   chronometer.resetClick();
//   secDec.innerHTML="0"
//   secUni.innerHTML="0"
//   minDec.innerHTML="0"
//   minUni.innerHTML="0"
//   milDec.innerHTML="0"
//   milUni.innerHTML="0"
//   clearSplits()
// }

// // Start/Stop Button
// btnLeft.addEventListener('click', function () {
//   if(document.getElementById("btnLeft").className.includes("start")){
//     document.getElementById("btnLeft").setAttribute("class", "btn stop");
//     document.getElementById("btnLeft").innerHTML = "STOP";
//     document.getElementById("btnRight").setAttribute("class", "btn split");
//     document.getElementById("btnRight").innerHTML = "SPLIT";
//     setStartBtn();
//   }else{
//     document.getElementById("btnLeft").setAttribute("class", "btn start")
//     document.getElementById("btnLeft").innerHTML = "START"
//     document.getElementById("btnRight").setAttribute("class", "btn reset")
//     document.getElementById("btnRight").innerHTML = "RESET" 
//     setStopBtn();
//   }
// });
// // Reset/Split Button
// btnRight.addEventListener('click', function () {
//   if(document.getElementById("btnRight").className.includes("reset")){
//     setResetBtn();
//   }else{
//     setSplitBtn();
//   }
// });

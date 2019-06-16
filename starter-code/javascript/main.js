const chrono = new Chronometer();
Array(3).fill().forEach(() => new ChronoGUI(chrono))

var allClocks = document.querySelectorAll(".clock")

chrono.addEventListener("timeChanged", function (timeChangedEvent) {
  for (var i = 0; i < allClocks.length; i++) {
    allClocks[i].querySelector(".sphere .minutes").innerHTML = timeChangedEvent.detail.minutes
    allClocks[i].querySelector(".sphere .seconds").innerHTML = timeChangedEvent.detail.seconds
    allClocks[i].querySelector(".sphere .milis").innerHTML = timeChangedEvent.detail.milis
  }
})
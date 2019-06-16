class ChronoGUI {
  constructor(chronoInstance) {
    this.chronoInstance = chronoInstance

    var container = document.createElement("section");
    container.className = "clock";
    container.innerHTML = `
    <div class="sphere">
      <span class="minutes" class="number">00</span>:</span><span class="seconds" class="number">00</span>

      <div class="milliseconds">
        <span class="milis">00</span>
      </div>

      <div class="buttons">
        <button class="start">START</button> 
        <button class="stop">STOP</button> 
        <button class="reset">RESET</button>
      </div>
    </div>
  `;
    document.body.appendChild(container);

    container.querySelector(".start").onclick = () => {
      this.chronoInstance.start()
    }

    container.querySelector(".stop").onclick = () => {
      this.chronoInstance.stop()
    }

    container.querySelector(".reset").onclick = () => {
      this.chronoInstance.reset()
    }
  }
}

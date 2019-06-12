class ChronoGUI {
  constructor() {
    var container = document.createElement("section");
    container.className = "clock";
    container.innerHTML = `
    <div class="sphere">
      <span class="minDec" class="number">0</span><span class="minUni" class="number">0</span><span>:</span><span class="secDec" class="number">0</span><span class="secUni" class="number">0</span>

      <div class="milliseconds">
        <span class="milDec">0</span><span class="milUni">0</span>
      </div>

      <button class="btnLeft" class="btn start">START</button> <button class="btnRight" class="btn reset">RESET</button>
    </div>
  `;
    document.body.appendChild(container);
  }
}

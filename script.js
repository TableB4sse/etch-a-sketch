const SMALL = 8;
const STANDARD = 16;
const BIG = 32;

function toogleButtonBackgroundColor(button) {
  button.classList.toggle("button-active");
};

function drawGrid(size){
  const drawingContainer = document.getElementById("drawing-container");
  drawingContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  drawingContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const gridCase = document.createElement("div");
    gridCase.classList.add('grid-case');
    gridCase.addEventListener('mousedown', (e) => {
      e.currentTarget.style.backgroundColor = 'gray';
    });
    gridCase.addEventListener('mouseover', (e) => {
      if((e.buttons & 1) == 0) return; // if button mouse 1 is not pressed
      e.currentTarget.style.backgroundColor = 'gray';
    });
    drawingContainer.appendChild(gridCase);
  }

};

function eraseGrid(){
  const drawingContainer = document.getElementById("drawing-container");
  drawingContainer.innerHTML = "";
};

function main(){
  const smallButton = document.getElementById("small");
  const standardButton = document.getElementById("standard");
  const bigButton = document.getElementById("big");
  const clickButton = document.getElementById("click");
  const eraseButton = document.getElementById("erase");

  let currentActiveButton = smallButton;

  toogleButtonBackgroundColor(currentActiveButton);

  drawGrid(SMALL);

  smallButton.addEventListener("click", (e) => {
    eraseGrid();
    drawGrid(SMALL);
    toogleButtonBackgroundColor(currentActiveButton);
    toogleButtonBackgroundColor(e.currentTarget);
    currentActiveButton = smallButton;
  });

  standardButton.addEventListener("click", (e) => {
    eraseGrid();
    drawGrid(STANDARD);
    toogleButtonBackgroundColor(currentActiveButton);
    toogleButtonBackgroundColor(e.currentTarget);
    currentActiveButton = standardButton;
  });

  bigButton.addEventListener("click", (e) => {
    eraseGrid();
    drawGrid(BIG);
    toogleButtonBackgroundColor(currentActiveButton);
    toogleButtonBackgroundColor(e.currentTarget);
    currentActiveButton = bigButton;
  });

  eraseButton.addEventListener("click", (e) => {
    eraseGrid();
    if (currentActiveButton == smallButton) {
      drawGrid(SMALL);
    } else if (currentActiveButton == standardButton) {
      drawGrid(STANDARD);
    } else {
      drawGrid(BIG);
    }
  });

};

main();



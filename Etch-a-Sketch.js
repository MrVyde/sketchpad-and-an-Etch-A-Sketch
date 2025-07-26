const container = document.querySelector("#container")
// for (let i = 0; i < 256; i++) {
//     const cell = document.createElement("div")
//     cell.classList.add("cell")
//     container.appendChild(cell)
// }

// container.addEventListener('mouseover', function(e) {
//   if (e.target.classList.contains('cell')) {
//     e.target.classList.add('colored');
//   }
// });

const button = document.querySelector('#resizeGrid');

createGrid(16);

button.addEventListener('click', () => {
  let input = prompt("Enter grid size per side (max 100):", "16");
  let size = parseInt(input, 10);
  if (!size || size < 1 || size > 100) {
    alert("Invalid input—using default size 16.");
    size = 16;
  }
  container.innerHTML = '';     // Clear existing grid
  createGrid(size);
});

function createGrid(n) {
  const percent = 100 / n;
  for (let i = 0; i < n * n; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.style.width = `${percent}%`;
    cell.style.height = `${percent}%`;
    container.appendChild(cell);
  }
}

container.addEventListener('mouseover', e => {
  if (e.target.classList.contains('cell')) {
    e.target.classList.add('colored');
  }
});


container.addEventListener('mouseover', e => {
  if (!e.target.classList.contains('cell')) return;
  const cell = e.target;

  let light = parseInt(cell.dataset.lightness) || 100;

  if (!cell.dataset.base) {
    // First interaction: pick random RGB
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    cell.dataset.base = `${r},${g},${b}`;
    cell.dataset.lightness = 100;
    cell.style.backgroundColor = `rgb(${r},${g},${b})`;
  } else if (light > 0) {
    light -= 10;
    cell.dataset.lightness = light;
    const [r,g,b] = cell.dataset.base.split(',');
    cell.style.backgroundColor = `rgb(${Math.floor(r*light/100)},${Math.floor(g*light/100)},${Math.floor(b*light/100)})`;
  }
});



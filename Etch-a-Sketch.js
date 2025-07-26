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





const container = document.querySelector("#container")
for (let i = 0; i < 256; i++) {
    const cell = document.createElement("div")
    cell.classList.add("cell")
    container.appendChild(cell)
}





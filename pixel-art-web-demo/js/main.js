import { state  } from "./state.js";
import { createGrid } from "./grid.js";

const createBtn = document.getElementById("create-btn");
const rows = document.getElementById("row");
const columns = document.getElementById("column");
const board = document.getElementById("pixel-table");
const colorPickBtn = document.getElementById("color-picker");
const penBtn = document.getElementById("pen-btn");
const eraserBtn = document.getElementById("eraser-btn");

createBtn.addEventListener('click', () => {
    const row = Number(rows.value);
    const column = Number(columns.value);
    if (row && column) {
        createGrid(row, column);
    } else {
        alert("Vui lòng chọn hàng cột hợp lệ");
    }
})

colorPickBtn.addEventListener("input", (e) => {
    state.currentColor = e.target.value;
    state.currentTool = "pen";
    board.className = "cursor-pen";
})

penBtn.addEventListener('click', () => {
    state.currentTool = "pen";
    board.className = "cursor-pen";

})

eraserBtn.addEventListener('click', () => {
    state.currentTool = "eraser";
    board.className = "cursor-eraser";
})

window.addEventListener("mouseup", () => {
    state.isMouseDown = false;
})
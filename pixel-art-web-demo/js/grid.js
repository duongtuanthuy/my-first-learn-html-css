import { state } from "./state.js";

export function createGrid(rows, columns) {
    const board = document.getElementById("pixel-table");
    board.innerHTML = "";
    board.className = "cursor-pen";
    board.style.display = "inline-grid";
    board.style.gridTemplateColumns= `repeat(${columns}, 15px)`;
    const total = rows*columns;
    for (let i=0; i<total; i++) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixel-cell");
        pixel.dataset.color = "";

        pixel.addEventListener("mousedown", () => {
            state.isMouseDown = true;
            applyColor(pixel);
        })

        pixel.addEventListener("mouseenter", () => {
            if (state.isMouseDown) {
                applyColor(pixel);
            } else {
                applyPreviewColor(pixel);
            }
        })

        pixel.addEventListener("mouseleave", () => {
            if (!state.isMouseDown) {
                pixel.style.backgroundColor = pixel.dataset.color;
            }
        })

        pixel.addEventListener("dragstart", (e) => {
            e.preventDefault();
        })

        board.appendChild(pixel);
    }
}

function applyColor(pixel) {
    if (state.currentTool === "pen") {
        pixel.style.backgroundColor = state.currentColor;
        pixel.dataset.color = state.currentColor;
    } else if (state.currentTool === "eraser") {
        pixel.style.backgroundColor = "";
        pixel.dataset.color = "";
    }
}

function applyPreviewColor(pixel) {
    if (state.currentTool === "pen") {
        pixel.style.backgroundColor = state.currentColor + "80";
    } else if (state.currentTool === "eraser") {
        pixel.style.backgroundColor = "#D1D5DB";
    }
}
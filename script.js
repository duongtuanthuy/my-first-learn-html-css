const inputNewTask = document.getElementById("input-new-task")
const addBtn = document.getElementById("add-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")

function renderList() {
    let newTask = `
    <li class="todo-task">
        <span>
            <span class="checked-icon">&#10003;</span>
            <span class="task-text">
                ${inputNewTask.value}
            </span>
        </span>
        <button class="delete-btn">&times;</button>    
    </li>
    `
    ulEl.innerHTML += newTask
}

addBtn.addEventListener("click", () => {
    if (inputNewTask.value === "") {
        alert("You must to write something")
    }
    else {
        renderList()
        inputNewTask.value = ""
    }
})

ulEl.addEventListener("click", function(object) {
    if (object.target.classList.contains("delete-btn")) {
        const taskItem = object.target.parentElement
        taskItem.remove()
    }
    else if (object.target.closest(".todo-task")) {
        object.target.closest(".todo-task").classList.toggle("isChecked")
    }
})
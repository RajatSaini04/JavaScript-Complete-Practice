

// // todo app

// // 
// let taskinput = document.getElementById('taskInput')
// let addbtn = document.getElementById('addBtn')
// let ul = document.querySelector("ul")
// // 

// function getTasks() {
//     return JSON.parse(localStorage.getItem("tasks")) || [];
// }

// function saveTasks(tasks) {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
// }


// function addtask() {
//     // console.log('add work');
//     let inputvalue = taskinput.value.trim();
//     // console.log('inputvalue :>> ', inputvalue);
//     if (inputvalue.length > 0) {
//         let li = document.createElement('li');
//         li.innerHTML = `<input type="checkbox">
//         <span class="task"> ${inputvalue}</span>
//         <button class="edit-btn">Edit</button>
//         <button class="delete-btn">Delete</button>`;
//         ul.appendChild(li)
//         taskinput.value = ""

//     }
//     else {
//         let alertmsg = document.getElementById("alertMsg")
//         alertmsg.style.display = "block";
//         taskinput.addEventListener('input', () => { alertmsg.style.display = "none" })
//     }

// }

// function deletetask(deletebtn) {
//     // ul.removeChild(this.parentNode);
//     ul.removeChild(deletebtn.parentNode);
// }

// function editTask(editBtn) {
//     let taskSpan = editBtn.parentElement.querySelector(".task");

//     if (editBtn.textContent === "Edit") {
//         // make editable
//         taskSpan.contentEditable = "true";
//         taskSpan.focus();
//         editBtn.textContent = "Save";
//     } else {
//         // save changes
//         taskSpan.contentEditable = "false";
//         editBtn.textContent = "Edit";

//         // LOCALSTORAGE

//     }
// }



// ul.addEventListener('click', (e) => {
//     //e.target means jispe click hoga vo element
//     //3 e.target class ha isme = delete-btn, edit-btn, task
//     // agr delete-btn pe click hoga tb ye condition true hoga
//     if (e.target.classList.contains('delete-btn')) {
//         deletetask(e.target)
//     }
//     if (e.target.classList.contains("edit-btn")) {
//         editTask(e.target);
//     }

// })


// // deletebtn.addEventListener("click", deletetask)
// addbtn.addEventListener("click", addtask)






// helpers for localStorage
function getTasks() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
}

function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// references
let taskinput = document.getElementById("taskInput");
let addbtn = document.getElementById("addBtn");
let ul = document.querySelector("ul");

// render tasks from storage on load
window.addEventListener("DOMContentLoaded", () => {
    getTasks().forEach(task => renderTask(task));
});

function renderTask(task) {
    let li = document.createElement("li");
    li.dataset.id = task.id; // attach unique id to DOM element
    li.innerHTML = `
    <input type="checkbox" ${task.completed ? "checked" : ""}>
    <span class="task">${task.text}</span>
    <button class="edit-btn">Edit</button>
    <button class="delete-btn">Delete</button>
  `;
    ul.appendChild(li);
}

// add task
function addtask() {
    let inputvalue = taskinput.value.trim();
    if (inputvalue.length > 0) {
        let newTask = {
            id: Date.now().toString(), // unique id
            text: inputvalue,
            completed: false
        };

        // save to storage
        let tasks = getTasks();
        tasks.push(newTask);
        saveTasks(tasks);

        // render in UI
        renderTask(newTask);
        taskinput.value = "";
    } else {
        let alertmsg = document.getElementById("alertMsg");
        alertmsg.style.display = "block";
        taskinput.addEventListener("input", () => {
            alertmsg.style.display = "none";
        });
    }
}

// delete task
function deletetask(deleteBtn) {
    let li = deleteBtn.parentNode;
    let id = li.dataset.id;

    // update storage
    let tasks = getTasks().filter(t => t.id !== id);
    saveTasks(tasks);

    // remove from DOM
    li.remove();
}

// edit task
function editTask(editBtn) {
    let li = editBtn.parentElement;
    let taskSpan = li.querySelector(".task");
    let id = li.dataset.id; // stable id from DOM

    if (editBtn.textContent === "Edit") {
        taskSpan.contentEditable = "true";
        taskSpan.focus();
        editBtn.textContent = "Save";
    } else {
        taskSpan.contentEditable = "false";
        editBtn.textContent = "Edit";

        // --- FIX HERE ---
        let newText = taskSpan.textContent.trim();

        // update storage
        let tasks = getTasks();
        let taskIndex = tasks.findIndex(t => t.id === id);
        if (taskIndex !== -1) {
            tasks[taskIndex].text = newText; // update with latest text
            saveTasks(tasks);
            console.log("Updated tasks:", getTasks()); // ✅ check console
        }
    }
}


// event delegation
ul.addEventListener("click", e => {
    if (e.target.classList.contains("delete-btn")) {
        deletetask(e.target);
    }
    if (e.target.classList.contains("edit-btn")) {
        editTask(e.target);
    }
});

addbtn.addEventListener("click", addtask);

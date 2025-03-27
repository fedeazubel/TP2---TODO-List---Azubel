const task = document.getElementById("task-input");
const taskBtn = document.getElementById("task-btn");
const msg = document.getElementById("msg");
var i = 0;
let arrayTasks = [];

taskBtn.addEventListener("click", (e) => {
    console.log(task.value);
    if(task.value == "") {
        msg.innerHTML = "El campo esta vacío";
        msg.classList = "red";
    } else {
        msg.innerHTML = "";
        msg.classList = "";
        let task = {
            content: task.value,
            id: i,
            createDate: tiempoActual,
            finishDate,
            finished: null
        }
        arrayTasks.unshift(task);
    }
    console.log(msg.value);
});

// Seguir lógica JS

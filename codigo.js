const task = document.getElementById("task-input");
const taskBtn = document.getElementById("task-btn");
const msg = document.getElementById("msg");
const list = document.getElementById("list");
var i = 0;
let arrayTasks = [];

taskBtn.addEventListener("click", (e) => {
    i = 0;

    if (task.value == "") {
        msg.innerHTML = "El campo esta vacío";
        msg.classList = "red";
    } else {
        msg.innerHTML = "";
        msg.classList = "";
        let task1 = {
            content: task.value,
            id: i,
            finished: false
        }
        arrayTasks.push(task1);
        list.innerHTML = "";
        arrayTasks.forEach((element) => {
            if (element.finished) {
                list.innerHTML += `
                <li class="elemento">
                    <div class="input">
                        <input type="checkbox" class="task_input" id="${i}" checked style="text-decoration: line-through";>
                        <label class="task_name" id="${i}">${element.content}</label>
                    </div>
                    <div class="date">
                        <p id="CreateDate">X/X/XXXX</p>
                    </div>
                </li>`;
            } else {
                list.innerHTML += `
                <li class="elemento">
                    <div class="input">
                        <input type="checkbox" class="task_input" id="${i}">
                        <label class="task_name" id="${i}">${element.content}</label>
                    </div>
                    <div class="date">
                        <p id="CreateDate">X/X/XXXX</p>
                    </div>
                </li>`;
            }
            i++;
        });
        const checkbox = document.querySelectorAll(".task_input");
        const taskName = document.querySelectorAll(".task_name");
        checkbox.forEach(element => {
            element.addEventListener("click", () => {
                if (arrayTasks[element.id].finished == false && element.checked == true) {
                    arrayTasks[element.id].finished = true;
                    taskName[element.id].classList = "task_input line";
                    
                } else if (arrayTasks[element.id].finished == true && element.checked == false) {
                    arrayTasks[element.id].finished = false;
                    taskName[element.id].classList = "task_input";
                }
            });
        });

    }
});

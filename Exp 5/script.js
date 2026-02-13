const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const container = document.getElementById("taskContainer");

// Add Task Function
function addTask() {

    const taskText = input.value.trim();

    if(taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const taskCard = document.createElement("div");
    taskCard.classList.add("task-card");

    taskCard.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button onclick="this.parentElement.parentElement.classList.toggle('completed')">✔</button>
            <button class="delete-btn" onclick="this.parentElement.parentElement.remove()">❌</button>
        </div>
    `;

    container.appendChild(taskCard);
    input.value = "";
}

// Button Click Event
addBtn.addEventListener("click", addTask);

// Enter Key Event (keydown)
input.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        addTask();
    }
});

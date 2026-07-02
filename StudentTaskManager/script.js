const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
const totalTasks=document.getElementById("totalTasks");
const completedTasks =document.getElementById("completedTasks");
const pendingTasks=document.getElementById("pendingTasks");
const searchTask = document.getElementById("searchTask");
const clearAllButton =document.getElementById("clearAll");

addTaskButton.addEventListener("click", () => {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    // Create LI
    const taskItem = document.createElement("li");

    // Create Span
    const taskData = document.createElement("span");
    taskData.textContent = taskText;

    // Create Complete Button
    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";

    // Create Delete Button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    const editButton=document.createElement("button");
    editButton.textContent="Edit";

    // Complete Button Logic
    completeButton.addEventListener("click", () => {

        taskData.classList.toggle("completed");

        if (taskData.classList.contains("completed")) {
            completeButton.textContent = "Undo";
        } else {
            completeButton.textContent = "Complete";
        }
        updateTaskCount();

    });

    editButton.addEventListener("click",()=>{
        if (editButton.textContent === "Edit") {
            const editInput = document.createElement("input");
            editInput.value = taskData.textContent;
            taskData.style.display = "none";
            taskItem.insertBefore(editInput, taskData);
            editButton.textContent = "Save";

        }
        else {
            const editInput = taskItem.querySelector("input");
            const updatedTask = editInput.value.trim();

             if(updatedTask === "")
                {

                alert("Task cannot be empty.");

                return;

                }

            taskData.textContent = updatedTask;
            taskData.style.display = "inline";
            editInput.remove();
            editButton.textContent = "Edit";

        }
        
    })

    // Delete Button Logic
    deleteButton.addEventListener("click", () => {

        taskItem.remove();
        updateTaskCount();

    });

    // Append Elements
    taskItem.appendChild(taskData);
    taskItem.appendChild(completeButton);
    taskItem.appendChild(editButton);
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);
    updateTaskCount();
    


    // Clear Input
    taskInput.value = "";

});
function updateTaskCount(){

    const total = taskList.children.length;

    const completed =
    document.querySelectorAll(".completed").length;

    const pending = total - completed;

    totalTasks.textContent = total;

    completedTasks.textContent = completed;

    pendingTasks.textContent = pending;
}
searchTask.addEventListener("input", () => {


    const searchTerm = searchTask.value.toLowerCase();

    const tasks = taskList.getElementsByTagName("li");  

    for (let i = 0; i < tasks.length; i++) {
        const taskText =tasks[i].querySelector("span").textContent.toLowerCase();
        if (taskText.includes(searchTerm)) {
            tasks[i].style.display = "";
        } else {
            tasks[i].style.display = "none";
        }
    }



});

clearAllButton.addEventListener("click", () => {

    if (taskList.children.length === 0) {
        alert("No tasks to clear!");
        return;
    }

    const confirmDelete = confirm("Are you sure you want to clear all tasks?");

    if (confirmDelete) {
        taskList.innerHTML = "";
        updateTaskCount();
    }

});
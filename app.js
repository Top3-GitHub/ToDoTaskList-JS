document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("task-form");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    const loadTasks = () => {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.forEach(task => addTaskToDOM(task.text, task.completed));
    };

    const saveTasks = () => {
        const tasks = [];
        taskList.querySelectorAll("li").forEach(taskItem => {
            tasks.push({
                text: taskItem.querySelector("span").textContent,
                completed: taskItem.classList.contains("completed"),
            });
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
    };

    // DODAJEMY TASKA/ZADANIE DO STRONY

    const addTaskToDOM = (text, completed = false) => {
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = text;

        if (completed) {
            li.classList.add("completed");
        }

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
            li.remove();
            saveTasks(); // TA FUNKCJA ZAPISUJE / PUSHUJE ZADANIA DO LocalStorage'a
        });

        li.addEventListener("click", () => {
            li.classList.toggle("completed"); // To dodaje lub usuwa klase completed w zaleznosci od statementu
            saveTasks();
        });

        li.appendChild(span);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    };

    taskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        addTaskToDOM(taskInput.value);
        saveTasks();
        taskInput.value = "";
    });

    loadTasks(); // Ładuje zadania z local storage'a
});

// Nie zrobilem z uzyciem reacta bo napisal pan JS/React a react to framework dla JS :D
const taskInput = document.getElementById('taskInput'); //input
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');


function addTask() {
    const taskText = taskInput.value;

    if (taskText === '') {
        alert('Por favor, escribe una tarea.'); // Validación para evitar tareas vacías
        return;
    }

    const listItem = document.createElement('li'); // Crea un elemento <li>
    listItem.textContent = taskText;  // Añade texto al <li>
    taskList.appendChild(listItem);// Inserta el <li> en la lista
    taskInput.value = ''; // Limpia el campo de texto
}

// Escucha el clic en el botón y llama a la función addTask
addTaskButton.addEventListener('click', addTask);
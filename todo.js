function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const taskList = document.getElementById('taskList');

    const listItem = document.createElement('li');
    listItem.innerText = taskText;

    listItem.addEventListener('click', function() {
        listItem.classList.toggle('completed');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(listItem);
    });

    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);

    taskInput.value = '';
}

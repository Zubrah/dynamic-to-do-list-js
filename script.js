document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Retrieve and trim task input value
        const taskText = taskInput.value.trim();

        // Check if taskText is not empty
        if (taskText !== '') {
            // Create new list item
            const listItem = document.createElement('li');
            listItem.textContent = taskText;

            // Create remove button
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('remove-btn');

            // Attach onclick event to remove button
            removeButton.onclick = function() {
                listItem.remove();
            };

            // Append remove button to list item
            listItem.appendChild(removeButton);

            // Append list item to task list
            taskList.appendChild(listItem);

            // Clear task input field
            taskInput.value = '';
        } else {
            // Alert if task input is empty
            alert('Please enter a task.');
        }
    }

    // Event listener for 'click' on add button
    addButton.addEventListener('click', addTask);

    // Event listener for 'keypress' on task input
    taskInput.addEventListener('keypress', function(event) {
        // Check if Enter key is pressed
        if (event.key === 'Enter') {
            addTask();
        }
    });
});

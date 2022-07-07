
const task = document.getElementById('new-task-input');
const addBtn = document.getElementById('new-task-btn');
const taskList = document.getElementById('all-task-list');

addBtn.addEventListener('click', () => {
    let newTask = task.value;

    if (!newTask) {
        alert('Please enter a task');
        return;
    }

    const taskElement = document.createElement('div');
    taskElement.classList.add('first-task');

    const taskElementContent = document.createElement('div');
    taskElementContent.classList.add('task');

    taskElement.appendChild(taskElementContent);

    const task_Ele_input = document.createElement('input');
    task_Ele_input.classList.add('text');
    task_Ele_input.type = 'text';
    task_Ele_input.value = newTask;
    task_Ele_input.setAttribute('readonly', 'readonly');
    
    taskElementContent.appendChild(task_Ele_input);

    const task_Btn = document.createElement('div');
    task_Btn.classList.add('btn-container');

    const task_Btn_Edit = document.createElement('button')
    task_Btn_Edit.classList.add('edit');
    task_Btn_Edit.innerHTML = 'Edit';

    const task_Btn_Remove = document.createElement('button');
    task_Btn_Remove.classList.add('remove');
    task_Btn_Remove.innerHTML = 'Remove';

    task_Btn.appendChild(task_Btn_Edit);
    task_Btn.appendChild(task_Btn_Remove);

    
    taskElement.appendChild(task_Btn);
    taskList.appendChild(taskElement);

    task.value = "";


    task_Btn_Edit.addEventListener('click', ()=> {
        if (task_Btn_Edit.innerHTML == 'Edit') {
            task_Ele_input.removeAttribute('readonly');
            task_Ele_input.focus();
            task_Btn_Edit.innerHTML = 'Save';
        } 
        else {
            task_Ele_input.setAttribute('readonly', 'readonly');
            task_Btn_Edit.innerHTML = 'Edit';
        }
    })

    task_Btn_Remove.addEventListener('click', ()=> {
        taskList.removeChild(taskElement);
    })
})
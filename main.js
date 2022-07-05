const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');

todoForm.addEventListener('submit', formFunc)

function formFunc(event) {
    
    event.preventDefault();

    const taskText = todoInput.value;
    const newTask = document.createElement('li');

    newTask.innerText = taskText;
    todoList.append(newTask);

    todoInput.value = '';
    todoInput.focus();

    

    const deleteItem = document.createElement('button');

    deleteItem.setAttribute('role', 'button');
    deleteItem.innerText = 'X';
    newTask.append(deleteItem);

    deleteItem.addEventListener('click', function() {
        this.closest('li').remove();
    })

    // const editItem = document.createElement('button');
    // editItem.setAttribute('role', 'button');
    // editItem.innerText = 'EDIT';
    // newTask.append(editItem);
    
    // editItem.addEventListener('click', function () {
    //     this.closest('li').replaceWith(todoInput.value)
    // })

    // if (newTask > 16) {
    //     event.preventDefault;}

    deleteItem.style.backgroundColor = 'rgba(10,10,10,0)';
    deleteItem.style.borderColor = 'rgba(10,10,10,0)';
    deleteItem.style.cssText += 'color: red';
    deleteItem.style.height = '20px';
    deleteItem.style.fontSize = '15px';
    // deleteItem.style.inset = 'right: 10px';
}

// formFunc() {
//     if (newTask > 16) {
//         event.preventDefault;
//     }
// }
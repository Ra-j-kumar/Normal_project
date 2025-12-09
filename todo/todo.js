let todolist = [{item: 'Buy Milk', dueDate:'14/12/2025'},];
displayItems();

function addTodo(){
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    todolist.push({item : todoItem , dueDate : todoDate});
    dateElement.value = '';
    inputElement.value = '';
    displayItems();
}

function displayItems(){
    let containerElement = document.querySelector('.todo-container');
    let newhtml = '';
    for(let i = 0; i < todolist.length; i++){
        let item = todolist[i].item;
        let dueDate = todolist[i].dueDate;
        newhtml += `        
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class="delbutton" onclick="todolist.splice(${i},1); displayItems();">Delete</button>        
        `;        
    }
    containerElement.innerHTML = newhtml;
}
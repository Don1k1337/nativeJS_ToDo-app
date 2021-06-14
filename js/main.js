let list = document.querySelector('ul');
list.addEventListener('click', event => {
    if(event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
    } else if(event.target.tagName === 'SPAN') {
        let div = event.target.parentNode;
        div.remove();
    }
}, false);

const addNewTask = () => {
    let li = document.createElement('li');
    let userInput = document.getElementById('toDoEl').value;
    let text = document.createTextNode(userInput);
    li.appendChild(text);
    if (userInput === '') {
        alert('To-Do list cannot be empty, please enter smthn');
    } else {
        document.getElementById('ToDo-list').appendChild(li);
    }
    document.getElementById('toDoEl').value = '';
    let deleteElement = document.createElement('SPAN');
    let textValue = document.createTextNode('Remove task');
    deleteElement.className = 'close';
    deleteElement.appendChild(textValue);
    li.appendChild(deleteElement);
};

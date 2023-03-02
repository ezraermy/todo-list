import MyTodo from './todo.js';

const UI = document.getElementById('todoList');

class TodoList {
  constructor() {
    this.list = [];
  }

  addTodo = (description) => {
    const todo = new MyTodo(description, false, this.list.length);
    this.list.push(todo);
    this.setLocalStorage(this.list);
  }

  deleteTodo = (index) => {
    this.list = this.list.filter((todo) => todo.index !== index);
    this.setLocalStorage(this.list);
  }

  updateTodo = (editValue, index) => {
    this.list[index].description = editValue;
    return this.list;
  }

  setLocalStorage = (li) => {
    localStorage.setItem('todo', JSON.stringify(li));
  };

  allTask = () => this.list;
}

const list = new TodoList();

const listRender = (item) => {
  const data = Array.isArray(item) ? item.map(
    (n) => `
  <li id="list" class="listInput"> <input id="${n.index}" type="text" value="${n.description}" readonly> 
  <i id="btn-${n.index}" onclick="deleteTodo(${n.index})" class="fa-regular fa-trash-can fa-lg"></i></li>`,
  ) : [];
  UI.innerHTML = data.join('');
  UI.addEventListener('dblclick', (e) => {
    e.preventDefault();
    e.target.removeAttribute('readonly');
  });
};

UI.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    const editValue = e.target.value;
    const index = e.target.id;
    list.updateTodo(editValue, index);
    e.target.setAttribute('readonly', 'readonly');
    list.setLocalStorage(list.allTask());
  }
});

UI.addEventListener('focusout', (e) => {
  const editValue = e.target.value;
  const index = e.target.id;
  list.updateTodo(editValue, index);
  e.target.setAttribute('readonly', 'readonly');
  e.target.parentElement.style = 'background-color:white';
  list.setLocalStorage(list.allTask());
  e.preventDefault();
});

const todoForm = document.getElementById('inputForm');
const todoInput = document.getElementById('inputField');

todoForm.addEventListener('submit', (event) => {
  event.preventDefault();
  list.addTodo(todoInput.value);
  todoInput.value = '';
  listRender(list.allTask());
});

window.deleteTodo = (index) => {
  list.deleteTodo(index);
  listRender(list.allTask());
};

export default listRender;
import './style.css';

const eachTodoList = [
  {
    description: 'cooking',
    completed: false,
    index: 0,
  },
  {
    description: 'Cleaning the house',
    completed: false,
    index: 1,
  },
  {
    description: 'Going to gym',
    completed: false,
    index: 2,
  },
];

const allTodoList = document.querySelector('#todoList');
for (let i = 0; i < eachTodoList.length; i += 1) {
  const todo = `
    <li><p><span>${eachTodoList[i].completed}</span> | <span>${eachTodoList[i].description}</span> | <span>${eachTodoList[i].index}</span></p></li>
    `;

  allTodoList.innerHTML += todo;
  allTodoList.innerHTML += '<hr>';
}

document.addEventListener('load', allTodoList);

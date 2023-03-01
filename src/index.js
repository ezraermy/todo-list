import './style.css';

function component() {
  const element = document.createElement('div');

  const eachTodoList = [
    {
      description: 'cooking',
    },
    {
      description: 'Cleaning the house',
    },
    {
      description: 'Going to gym',
    },
  ];

  const allTodoList = document.querySelector('#todoList');
  for (let i = 0; i < eachTodoList.length; i += 1) {
    const todo = `
    <li><input type="checkbox" id="checkbox" name="todo">
        <label for="scales">${eachTodoList[i].description}</label><button class="input-btn"><i class="fas fa-ellipsis-v"></i></button></li>
        `;

    allTodoList.innerHTML += todo;
    allTodoList.innerHTML += '<hr>';
  }

  return element;
}

document.body.appendChild(component());

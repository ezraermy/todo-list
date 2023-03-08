import { addTodo, removeList } from './todoUI.js';

document.body.innerHTML = `
<div class="container">
<div class="header">
    <h1 class="title">Today's todo list</h1>
    <button class="head-btn"><i class="fa">&#xf021;</i>   </button> 
</div><hr>
<form id="inputForm" class="input-field">
    <input type="text" id="inputField" class="input" placeholder="Add to your list..."><button id="addTodo" class="btn"><i class='fas fa-arrow-left'></i></button>
</form><hr>
<ul id="todoList" class="my-todos">         
</ul>
<div>
   <button id="clear" class="clr-btn"><p>Clear all complated</p></button>
</div>  
</div>
`;

describe('Adding and deleting todo list', () => {
  test('Adding one todo list, should have one todo list', () => {
    addTodo('Cooking pasta for lunch', true, 0); // Arrange
    const data = document.querySelectorAll('.myList'); // Act
    expect(data).toHaveLength(1); // Assert
  });

  test('If we add second todo list, it should have two todo list', () => {
    addTodo('Cleaning my room', false, 1); // Arrange
    const data = document.querySelectorAll('.myList'); // Act
    expect(data).toHaveLength(2); // Assert
  });

  test('when we remove a todo list it should remove one todo list', () => {
    removeList(0); // Arrange
    const data = document.querySelectorAll('.myList'); // Act
    expect(data).toHaveLength(1); // Assert
  });
});
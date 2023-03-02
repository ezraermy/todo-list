// import _ from 'lodash';
import './style.css';

import { getLocalStorage, addTodo, showTodo } from './modules/todoUI.js';
import clearCompleted from './modules/clearComplated.js';

const form = document.querySelector('#inputForm');
const inputForm = document.getElementById('inputField');
const clear = document.getElementById('clear');

window.addEventListener('load', () => {
  showTodo();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addTodo(inputForm.value, false, getLocalStorage().length + 1);
  showTodo();
});

clear.addEventListener('click', (e) => {
  e.preventDefault();
  clearCompleted();
  showTodo();
});
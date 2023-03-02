// import _ from 'lodash';
import './style.css';

import { getLocalStorage, addTodo, showTodo } from './modules/todoUI.js';

const form = document.querySelector('#inputForm');
const inputForm = document.getElementById('inputField');

window.addEventListener('load', () => {
  showTodo();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addTodo(inputForm.value, false, getLocalStorage().length + 1);
  showTodo();
});
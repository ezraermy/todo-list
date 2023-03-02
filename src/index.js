import './style.css';

import renderList from './modules/UI.js';

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('todo')) {
    renderList(JSON.parse(localStorage.todo));
  }
});
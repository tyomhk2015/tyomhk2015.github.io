const todoForm = document.querySelector(".js-todo-form");
const todoInput = document.querySelector(".js-todo-input");
const todoList = document.querySelector(".js-todo-lists");

const validateTodoForm = () => {
  return todoInput.value.trim().length <= 0;
}

const resetToDoInput = () => {
  todoInput.placeholder = "";
  todoInput.value = "";
}

const checkTodoExist = () => {
  if(!localStorage.getItem(USER_ID)) {
    const newTodos = {
      todo: []
    }
    USER_TODOS = newTodos;
    localStorage.setItem(USER_ID, JSON.stringify(USER_TODOS));
  };
}

const saveTodo = (task) => {
  USER_TODOS.todo.push(task);
  localStorage.setItem(USER_ID, JSON.stringify(USER_TODOS));
}

const resetTodo = () => {
  todoList.innerHTML = "";
}

const closeToDo = (e) => {
  const closeBtn = e.target.closest(".js-todo-close-button");
  if(!closeBtn) return;
  const id = +closeBtn.parentNode.id;
  const updatedTodos = USER_TODOS.todo.filter((todo) => id !== todo.id);

  USER_TODOS.todo = updatedTodos;
  localStorage.setItem(USER_ID, JSON.stringify(USER_TODOS));

  resetTodo();
  showTodo();
}

const showTodo = () => {
  checkTodoExist();
  USER_TODOS = JSON.parse(localStorage.getItem(USER_ID));

  const fragment = new DocumentFragment();

  USER_TODOS.todo.forEach((todo) => {
    const li = document.createElement("li");
    const p = document.createElement("p");
    const closeButton = document.createElement("button");

    p.innerText = todo.text;
    p.className = "todo-list-text";

    li.id = todo.id;
    li.className = "todo-list";
    
    closeButton.className = "todo-close-button js-todo-close-button";

    li.appendChild(p);
    li.appendChild(closeButton);

    fragment.appendChild(li);
  });

  todoList.appendChild(fragment);
}

const registerTodo = (e) => {
  e.preventDefault();

  if(validateTodoForm()) {
    todoInput.placeholder = "Enter a task";
    playAlarmSound();
    return;
  }

  const task = {
    id: new Date().getTime(),
    text: todoInput.value
  }

  saveTodo(task);
  resetTodo();
  showTodo();
  resetToDoInput();
}

showTodo();
todoForm.addEventListener("submit", registerTodo);
todoList.addEventListener("click", closeToDo);
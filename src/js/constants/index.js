import $ from 'jquery'

export const inputTodo = $('#inputTodo')
export const btnAddTodo = $('#btnAddTodo')
export const todoList = $('#todoList')

export const todoItem = (todo, id) => `
    <li>
        <button data-type="status" data-id="${id}" data-status="${todo.status}">${todo.status === 'open' ? 'закрыть' : 'открыть' }</button>
        <span class="todo ${todo.status === 'close' ? 'todo-close' : ''}">${todo.description}</span>
        <button data-type="remove" data-id="${id}">удалить</button>
    </li>
`
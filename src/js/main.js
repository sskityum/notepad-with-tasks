import $ from 'jquery'

import todoService from './TodoService'

import {
    todoItem,
    todoList,
    btnAddTodo,
    inputTodo
} from './constants'

function renderTodoList(list, container){
    container.html('')

    list.map((todo, id) => {
        const todoComponent = todoItem(todo, id)
        container.html(container.html() + todoComponent)
    })

    $('button[data-type="status"]').click((e) => {
        const id = $(e.currentTarget).attr('data-id')
        const status = $(e.currentTarget).attr('data-status') === 'open' ? 'close' : 'open'
        
        renderTodoList(todoService.changeTodo(id, status), container)
    })

    $('button[data-type="remove"]').click((e) => {
        const id = $(e.currentTarget).attr('data-id')
        
        renderTodoList(todoService.removeTodo(id), container)
    })

    btnAddTodo.click(() => {
        const todo = {
            description: inputTodo.val(),
            status: "open"
        }

        renderTodoList(todoService.addTodo(todo), container)
    })
}

$(document).ready(() => {
    renderTodoList(todoService.todoList, todoList)
})
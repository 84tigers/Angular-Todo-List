"use strict";
function TodoController() {
    const vm = this;
    vm.todos = [];
    vm.addTodo = (newTodo) => {
        console.log(newTodo);
        vm.todos.push({
            task: newTodo.task,
            complet: newTodo.complete
        });
        vm.todos.push(angular.copy(newTodo));
        
    };
    vm.removeTask = (index) => {
        vm.todos.splice(index, 1);
    };
}
angular
    .module("App")
    .controller("TodoController", TodoController);
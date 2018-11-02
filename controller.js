"use strict";
function TodoController() {
    const vm = this;
    vm.todos = ["Feed the Apatosaurus", "Clean the Stegasaurus litter", "Prove the existence of Brontosaurus", "Lock T-rex gate"];
    vm.addTodo = (newTodo) => {
        console.log(newTodo);
        vm.todos.push({
            task: newTodo.task,
            complete: newTodo.complete
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
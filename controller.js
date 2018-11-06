"use strict";
function TodoController() {
    const vm = this;
    vm.todos = [{
        task: "Feed the Apatosaurus",
        complete: false
    }, {
        task: "Clean the Stegasaurus litter", 
        complete: true
    }, {
        task: "Prove the existence of Brontosaurus", 
        complete: false
    }, {
        task: "Lock T-rex gate", 
        compplete: false
    },];

    vm.addTodo = (newTodo) => {
        console.log(newTodo);
        vm.todos.push({
            task: newTodo.task,
            complete: newTodo.complete
        });
    };

    vm.removeTask = (index) => {
        vm.todos.splice(index, 1);
    };
    
    vm.completeTask = (todo) => {
        todo.complete = true;
    };
}
angular
    .module("App")
    .controller("TodoController", TodoController);
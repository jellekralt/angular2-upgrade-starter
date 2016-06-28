(function () {
    'use strict';

    angular
        .module('todo')
        .directive('todo', Todo);

    Todo.$inject = [];

    /* @ngInject */
    function Todo() {

        var directive = {
            scope: {},
            restrict: 'E',
            templateUrl: 'todos/todo.html',
            controller: TodoController,
            controllerAs: 'vm'
        };

        return directive;
    }

    TodoController.$inject = [];

    /* @ngInject */
    function TodoController() {
        console.log('asdfasdfasdf');
        this.label = '';
        this.todos = [{
            label: 'Learn Angular',
            complete: false
        },{
            label: 'Deploy to S3',
            complete: true
        },{
            label: 'Rewrite Todo Component',
            complete: true
        }];
        this.updateIncomplete = function () {
            return this.todos.filter(function (item) {
                return !item.complete;
            }).length;
        };
        this.deleteItem = function (index) {
            this.todos.splice(index, 1);
        };
        this.onSubmit = function (event) {
            if (this.label.length) {
                this.todos.unshift({
                    label: this.label,
                    complete: false
                });
                this.label = '';
            }
            event.preventDefault();
        };
    }

})();

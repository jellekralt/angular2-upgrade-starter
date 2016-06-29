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
        var vm = this;

        vm.label = '';

        vm.todos = [{
            label: 'Convert this thing to Angular 2!',
            complete: false
        },{
            label: 'Listen to presentation',
            complete: true
        },{
            label: 'Eat Pizza',
            complete: true
        }];

        /**
         * Gets the number of incomplete tasks
         * @returns {Number}
         */
        vm.getIncomplete = function () {
            return this.todos.filter(function (item) {
                return !item.complete;
            }).length;
        };

        /**
         * Deletes an item
         * @param index
         */
        vm.deleteItem = function (index) {
            this.todos.splice(index, 1);
        };

        /**
         * Submit handler
         * @param event
         */
        vm.onSubmit = function (event) {
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

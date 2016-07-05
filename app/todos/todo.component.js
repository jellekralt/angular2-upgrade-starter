(function(app) {
    'use strict';

    app.TodoComponent =
        ng.core
        .Component({
            selector: 'todo',
            templateUrl: 'todos/todo.html'
        })
        .Class({
            constructor: function () {
                this.title = 'Todo app';
                this.titleEditable = false;
                this.label = '';
                this.todos = [{
                    label: 'Convert this thing to Angular 2!',
                    complete: false
                },{
                    label: 'Listen to presentation',
                    complete: true
                },{
                    label: 'Eat Pizza',
                    complete: true
                }];
            },
            editTitleToggle : function () {
                this.titleEditable = !this.titleEditable;
            },
            getIncomplete: function() {
                return this.todos.filter(function (item) {
                    return !item.complete;
                }).length;
            },
            onSubmit: function(event) {
                if (this.label.length) {
                    this.todos.unshift({
                        label: this.label,
                        complete: false
                    });
                    this.label = '';
                }
                event.preventDefault();
            },
            deleteItem: function (index) {
                this.todos.splice(index, 1);
            }
        });

})(window.app || (window.app = {}));

// angular
    //     .module('todo')
    //     .directive('todo', Todo);
    //
    // Todo.$inject = [];
    //
    // /* @ngInject */
    // function Todo() {
    //
    //     var directive = {
    //         scope: {},
    //         restrict: 'E',
    //         templateUrl: 'todos/todo.html',
    //         controller: TodoController,
    //         controllerAs: 'vm'
    //     };
    //
    //     return directive;
    // }
    //
    // TodoController.$inject = [];
    //
    // /* @ngInject */
    // function TodoController() {
    //     var vm = this;
    //
    //     vm.label = '';
    //
    //     vm.todos = [{
    //         label: 'Convert this thing to Angular 2!',
    //         complete: false
    //     },{
    //         label: 'Listen to presentation',
    //         complete: true
    //     },{
    //         label: 'Eat Pizza',
    //         complete: true
    //     }];
    //
    //     /**
    //      * Gets the number of incomplete tasks
    //      * @returns {Number}
    //      */
    //     vm.getIncomplete = function () {
    //         return this.todos.filter(function (item) {
    //             return !item.complete;
    //         }).length;
    //     };
    //
    //     /**
    //      * Deletes an item
    //      * @param index
    //      */
    //     vm.deleteItem = function (index) {
    //         this.todos.splice(index, 1);
    //     };
    //
    //     /**
    //      * Submit handler
    //      * @param event
    //      */
    //     vm.onSubmit = function (event) {
    //         if (this.label.length) {
    //             this.todos.unshift({
    //                 label: this.label,
    //                 complete: false
    //             });
    //             this.label = '';
    //         }
    //         event.preventDefault();
    //     };
    // }

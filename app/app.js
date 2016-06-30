(function(app) {

    document.addEventListener('DOMContentLoaded', function() {
        ng.platform.browser.bootstrap(app.TodoComponent);
    });

})(window.app || (window.app = {}));

// (function () {
//     'use strict';
//
//     angular.module('app', [
//         'todo'
//     ]);
//
// })();

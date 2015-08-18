angular.module('ToDo', [])
.controller('ToDoController', function ($scope, ToDoService) {
    $scope.items = ToDoService.items;
    $scope.add = function() {
        ToDoService.add($scope.todo);
    }
})
.factory('ToDoService', function () {
    return {
        items: [];
        add: function (todo) {
            this.items.push({todo: todo, time: new Date()});
        }
    };
});

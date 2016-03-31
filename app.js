angular.module('ToDo', [])
.controller('ToDoController', function ($scope, ToDoService) {
    $scope.items = ToDoService.items;
    $scope.add = function() {
        ToDoService.add($scope.todo);
    };
	$scope.remove = function(index) {
        $scope.items.splice(index, 1);
    }
})
.factory('ToDoService', function () {
    return {
        items: [],
        add: function (todo) {
            this.items.push({todo: todo, time: new Date()});
        }
    };
});

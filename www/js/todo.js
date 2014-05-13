//-- Author: Clare McSharry
// Assignment: WE3.0 Mobile Web Applications, Digital Skills Academy
// Student ID: D13126112
// Mobile: 086 8247236
// Email: clare.mcsharry@webelevate.ie
// Date : 2014/06/14
//Purpose:
// Build a single page to-do list, mobile web application using Angular.js, and package it with PhoneGap Build. //
// This code populates the list with two items - 1 is complate and 1 is still to be done.                      
// The foreach loops through the items that are yet to be done and returns a number which is assigned to the var count.

    function TodoCtrl($scope) {
    $scope.todos = [
    {text:'learn angular for my assignment', done:true},
    {text:'build an angular app for Daniel', done:false}];
     
    $scope.addTodo = function() {
    $scope.todos.push({text:$scope.todoText, done:false});
    $scope.todoText = '';
    };
     
    $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo) {
    count += todo.done ? 0 : 1;
    });
    return count;
    };
     
    $scope.archive = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo) {
    if (!todo.done) $scope.todos.push(todo);
    });
    };
    }


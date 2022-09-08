var app = angular.module("myApp",["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider.when("/todo",{
        templateUrl: "todo.html",
        controller: "listCtrl"
    })
    .when("/inprogress",{
        templateUrl: "inprogress.html",
        controller: "listCtrl"
    })
    .when("/inreview",{
        templateUrl: "inreview.html",
        controller: "listCtrl"
    })
    .when("/done",{
        templateUrl: "done.html",
        controller: "listCtrl"
    })
    .when("/all",{
        templateUrl: "all.html",
        controller: "listCtrl"
    });
});

app.controller("listCtrl", listCtrl);
function listCtrl($scope) {
    var todo = [{
        tast: "Task 1",
        content: "Analyze the new requirements gathered form the customer.",
    },
    {
        tast: "Task 3",
        content: "Arange a web meeting with the customer to get new requirements.",
    },
    {
        tast: "Task 10",
        content: "Show the retrieved data from the server in the grid control.",
    },
    {
        tast: "Task 20",
        content: "Inprove application performance.",
    }];
    $scope.todo = todo;

 
    var inprogress = [{
        tast: "Task 2",
        content: "Analyze the new requirements gathered form the customer.",
    },
    {
        tast: "Task 4",
        content: "Arange a web meeting with the customer to get new requirements.",
    },
    {
        tast: "Task 11",
        content: "Show the retrieved data from the server in the grid control.",
    },
    {
        tast: "Task 21",
        content: "Inprove application performance.",
    }];
    $scope.inprogress = inprogress;

    var inreview = [{
        tast: "Task 5",
        content: "Analyze the new requirements gathered form the customer.",
    },
    {
        tast: "Task 7",
        content: "Arange a web meeting with the customer to get new requirements.",
    },
    {
        tast: "Task 12",
        content: "Show the retrieved data from the server in the grid control.",
    },
    {
        tast: "Task 19",
        content: "Inprove application performance.",
    },
    {
        tast: "Task 23",
        content: "Inprove application performance.",
    }];
    $scope.inreview = inreview;

    var done = [{
        tast: "Task 8",
        content: "Analyze the new requirements gathered form the customer.",
    },
    {
        tast: "Task 13",
        content: "Arange a web meeting with the customer to get new requirements.",
    },
    {
        tast: "Task 15",
        content: "Show the retrieved data from the server in the grid control.",
    },
    {
        tast: "Task 16",
        content: "Inprove application performance.",
    }];
    $scope.done = done;

    var all = [{todo},{inprogress},{inreview},{done}];
    $scope.all = all;
};
var app = angular.module('myApp',[]);

app.controller('WelcomeCtrl',['$scope', '$http', function($scope, $http){

    $scope.note = {};
    $scope.nameArray = [];

//get
    $scope.getPeople = function(){
        $http.get('/people').then(function(response){
            $scope.nameArray = response.data;
        });
    };

//post
    $scope.clickButton = function(data){
        $http.post('/people', data).then(function(response){
            $scope.getPeople();
        });
    };




}]);
var myGamerApp = angular.module("myGamerApp", ['ngRoute']);

myGamerApp.config(['$routeProvider', function($routeProvider){

  $routeProvider
    .when('/home', {
      templateUrl: 'view/home.html'
    })
    .when('/directory', {
      templateUrl: 'view/directory.html'
      controller:'GamerController'
    }).otherwise({
      redirectTo:'/home'
    });

}]);

myGamerApp.controller("GamerController", ['$scope', function($scope){

//how to remove from array
$scope.removeGamer = function(gamer){
  var removeGamer = $scope.gamers.indexOf(gamer);
  $scope.gamers.splice(removeGamer, 1)
};

//how to add to array
$scope.addGamer = function(){
  $scope.gamers.push({
    name: $scope.newgamer.name,
    level: $scope.newgamer.level,
    bounty: parseInt($scope.newgamer.bounty),
    available: true,
  });

$scope.newgamer.name = "";
$scope.newgamer.level = "";
$scope.newgamer.bounty = "";


}


$scope.gamers = [
  {
    name:"Victor",
    belt:"green",
    level: "Pro",
    bounty: 10000000000,
    available: true,
    thumb: "img/mage.png"

  },
  {
    name:"Chris",
    level: "Noob",
    bounty: 2,
    available: true,
    thumb: "img/mush.png"
  },
  {
    name:"Nhu",
    level: "Expert",
    bounty: 30000,
    available: true,
    thumb:"img/thief.png"
  },
  {
    name:"Henry",
    level: "Noob",
    bounty: 1,
    available: false,
    thumb:"img/pig.png"
  }

];

}]);

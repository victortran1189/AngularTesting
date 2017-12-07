var myGamerApp = angular.module("myGamerApp", []);

//myGamerApp.config(['$routeProvider', function($routeProvider){

//  $routeProvider
//     .when('/home', {
//       templateUrl: 'view/home.html'
//     })
//     .when('/directory', {
//       templateUrl: 'view/directory.html'
//       controller:'GamerController'
//     }).otherwise({
//       redirectTo:'/home'
//     });
//
// }]);

myGamerApp.controller("GamerController", ['$scope', '$timeout', 'GamerService', 'TotalService', function($scope, $timeout, GamerService, TotalService) {





  //how to remove from array
  $scope.removeGamer = function(gamer) {
    var removeGamer = $scope.gamers.indexOf(gamer);
    $scope.gamers.splice(removeGamer, 1)
  };




  //how to add to array
  $scope.addGamer = function() {
    var newGamerName = $scope.newgamer.name;
    var matches = true;


    angular.forEach($scope.gamers, function(gamers) {
      if (newGamerName.toUpperCase() == gamers.name.toUpperCase()) {
        matches = false;
        $scope.message = 'This is a duplicate!';
      }
      $timeout(function() {
        $scope.message = "";
      }, 3000);
    });

    if (matches != false) {

      $scope.gamers.push(GamerService.createNewGamerObject($scope.newgamer));
      $scope.getTotal = TotalService.getTotalBounty($scope.gamers);


      $scope.newgamer.name = "";
      $scope.newgamer.level = "";
      $scope.newgamer.bounty = "";

    }
  }

// add total bounty together

// $scope.getTotal = function(){
//    var total = 0;
//    for(var i = 0; i < $scope.gamers.length; i++){
//        total += $scope.gamers[i].bounty;
//    }
//
//    return total;
//
// }


  $scope.gamers = GamerService.getGamersList();


  $scope.getTotal = TotalService.getTotalBounty($scope.gamers);




}]);

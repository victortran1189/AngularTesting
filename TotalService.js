myGamerApp.service('TotalService', function() {

  this.getTotalBounty = function (gamers){
      var total = 0;
      for(var i = 0; i < gamers.length; i++){
          total += gamers[i].bounty;
      }

      return total;

      }




});

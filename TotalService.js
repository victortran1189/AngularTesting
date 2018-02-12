myGamerApp.service('TotalService', function() {




  this.getTotalBounty = function (gamers){
      var total = 0;
      for(var i = 0; i < gamers.length; i++){
          total += gamers[i].bounty;
      }

      return total;

      }



      this.getTotalCount = function (gamers){


          return gamers.length;

          }


      this.getGamerNames = function (gamers) {

        var newArray = []

        for(var i = 0; i < gamers.length; i++){
          newArray.push(gamers[i].name);

        }

        return newArray;

        }


});

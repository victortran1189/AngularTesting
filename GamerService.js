myGamerApp.service('GamerService', function() {

    this.getGamersList = function (x) {
        return [
          {
            name:"Victor",
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
    }


    this.createNewGamerObject = function (newgamer){
      return {
        name: newgamer.name,
        level:newgamer.level,
        bounty:parseInt(newgamer.bounty),
  }
}


});

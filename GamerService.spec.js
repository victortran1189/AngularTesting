describe('Gamer Service', function() {
  var GamerService;

  beforeEach(angular.mock.module('myGamerApp'));


  beforeEach(inject(function(_GamerService_) {
      GamerService = _GamerService_;
    }));

    it('the array length should be 4', function() {
      var list = GamerService.getGamersList()
      expect(GamerService.getGamersList().length).toEqual(4);
    });


    it('Access the object, with the index of 0 within the array, with the property of name to have a string value to be Victor', function() {
      var list = GamerService.getGamersList()

      expect(list[0].name).toBe("Victor");
    });

    it('Access the object, with the index of 0 within the array, with the property of bounty to have a numerial value equal to 10000000000', function() {
      var list = GamerService.getGamersList()

      expect(list[0].bounty).toEqual(10000000000);
    });

    it('Access the object, with the index of 2 within the array, with the property of level to have a string value of Expert', function() {
      var list = GamerService.getGamersList()

      expect(list[2].level).toBe("Expert");
    });

    it('Check if the thumb property is equal to img/mage.png in the object array with the index of 0', function() {
      var list = GamerService.getGamersList()

      expect(list[0].thumb).toBe("img/mage.png");
    });

    it('Check if the thumb property is equal to img/pig.png in the object array with the index of 3', function() {
      var list = GamerService.getGamersList()

      expect(list[3].thumb).toBe("img/pig.png");
    });


    it('test if testValue equals to 4', function() {
      var list = GamerService.getGamersList()

      expect(GamerService.testValue).toEqual(4);
    });


    it('test the creatNewGamerObject method to return an empty string when a user adds a new gamer name', function() {
      expect(GamerService.createNewGamerObject.name).toBe('');
    });

    it('test the creatNewGamerObject method to return undefined when a user adds a new gamer level', function() {
      expect(GamerService.createNewGamerObject.level).toBe(undefined);
    });

    it('test the creatNewGamerObject method to return undefined when a user adds a new gamer bounty', function() {
      expect(GamerService.createNewGamerObject.bounty).toBe(undefined);
    });


});

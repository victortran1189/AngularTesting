describe('Total Service', function() {
  var TotalService;

  beforeEach(angular.mock.module('myGamerApp'));


  beforeEach(inject(function(_TotalService_) {
      TotalService = _TotalService_;
    }));

    

    it('testing if the getTotalCount function will return the length of gamers' , function() {
      console.log(TotalService.getTotalCount.length)
      expect(TotalService.getTotalCount.length).toEqual(1);
    });



  });

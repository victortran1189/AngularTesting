describe('Total Service', function() {
  var TotalService;

  beforeEach(angular.mock.module('myGamerApp'));


  beforeEach(inject(function(_TotalService_) {
      TotalService = _TotalService_;
    }));



    it('testing if the getTotalCount function will return the length of gamers' , function() {

      var testArray = [1,2];



      expect(TotalService.getTotalCount(testArray)).toEqual(2);
    });


    it('testing if the getTotalCount function will return the total count for bounty' , function() {

      var testArray = [
        {
          name:"Victor",
          level: "Pro",
          bounty: 1,
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
          bounty: 3,
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

     expect(TotalService.getTotalBounty(testArray)).toEqual(7);
    });


        it('testing if the function will retrieve the strings of the name property ' , function() {

          var testArray =  [
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


          expect(TotalService.getGamerNames(testArray)[0]).toBe("Victor");
          expect(TotalService.getGamerNames(testArray)[1]).toBe("Chris");
          expect(TotalService.getGamerNames(testArray).length).toBe(4);


        });


  });

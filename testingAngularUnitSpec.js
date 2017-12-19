describe('Hello World example',function(){

beforeEach(module('myGamerApp'));

var GamerController,
scope;

beforeEach(inject(function($rootScope, $controller){
  scope =$rootScope.$new();
  GamerController = $controller('GamerController',{
    $scope: scope
  });
}));

it('says hello world!', function(){
  expect(scope.greeting).toEqual("Hello World!");

});



it('says hi', function(){
  expect(scope.title).toEqual("hi");

});

it('message is undefined', function(){
  expect(scope.message).toEqual(undefined);
});

it('message will be targeted', function(){
  expect(scope.test).toEqual("target this");
});








});

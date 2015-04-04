describe("RenaissanceCtrl Unit test", function () {

    var scope,renaissanceCtrl;
    beforeEach(module('renaissance.controllers'));

    beforeEach(inject(function($rootScope, $controller){
        scope=$rootScope.$new();
        renaissanceCtrl=$controller('RenaissanceCtrl', {$scope: scope});
    }));

    it('should have a RenaissanceCtrl controller', function() {
        expect(renaissanceCtrl).toBeDefined();
    });

    it("should have a $scope variable", function() {
        expect(scope).toBeDefined();
    });

    it("should have a $scope.renaissance variable", function() {
        expect(scope.renaissance).toBeDefined();
    });

});

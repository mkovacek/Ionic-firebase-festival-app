describe("ContactCtrl Unit test", function () {

    var scope,contactCtrl;
    beforeEach(module('contact.controllers'));

    beforeEach(inject(function($rootScope, $controller){
        scope=$rootScope.$new();
        contactCtrl=$controller('ContactCtrl', {$scope: scope});
    }));

    it('should have a ContactCtrl controller', function() {
        expect(contactCtrl).toBeDefined();
    });

    it("should have a $scope variable", function() {
        expect(scope).toBeDefined();
    });

    it("should have a $scope.contacts variable", function() {
        expect(scope.contacts).toBeDefined();
    });

});

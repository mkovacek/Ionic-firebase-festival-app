describe("MapCtrl Unit test", function () {

    var scope,mapCtrl;
    beforeEach(module('maps.controllers'));

    beforeEach(inject(function($rootScope, $controller){
        scope=$rootScope.$new();
        mapCtrl=$controller('MapCtrl', {$scope: scope});
    }));

    /*
    it('should have a MapCtrl controller', function() {
        expect(mapCtrl).toBeDefined();
    });

    it("should have a $scope variable", function() {
        expect(scope).toBeDefined();
    });

    it("should have a $scope.markers variable", function() {
        expect(scope.markers).toBeDefined();
    });

    it("should have a $scope.map variable", function() {
        expect(scope.map).toBeDefined();
    });

    it("should have a $scope.options variable", function() {
        expect(scope.options).toBeDefined();
    });

    it("should have a $scope.windowOptions variable", function() {
        expect(scope.windowOptions).toBeDefined();
    });
*/
});

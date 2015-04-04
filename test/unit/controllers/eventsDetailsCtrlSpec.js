describe("EventsDetailsCtrl Unit test", function () {

    var scope,eventsDetailsCtrl,stateParams,day;
    beforeEach(module('eventsDetails.controllers'));

    beforeEach(inject(function($rootScope, $controller){
        scope=$rootScope.$new();
        stateParams =
        {
            description:'Opis eventa',
            time:'13.00 h',
            'title':'Renesansni ražanj'
        };
        eventsDetailsCtrl=$controller('EventsDetailsCtrl', {$scope: scope, $stateParams:stateParams});
    }));

    it('should have a EventsDetailsCtrl controller', function() {
        expect(eventsDetailsCtrl).toBeDefined();
    });

    it("should have a $scope variable", function() {
        expect(scope).toBeDefined();
    });

    it("should have a $scope.description variable", function() {
        expect(scope.description).toBeDefined();
    });

    it("value must be -> $scope.description='Opis eventa'", function() {
        expect(scope.description).toBe('Opis eventa');
    });

    it("should have a $scope.img variable", function() {
        expect(scope.img).toBeDefined();
    });

    it("should have a $scope.img2 variable", function() {
        expect(scope.img2).toBeDefined();
    });

    it("should have a $scope.time variable", function() {
        expect(scope.time).toBeDefined();
    });

    it("value must be -> $scope.time='13.00 h'", function() {
        expect(scope.time).toBe('13.00 h');
    });

    it("should have a $scope.title variable", function() {
        expect(scope.title).toBeDefined();
    });

    it("value must be -> $scope.title='Renesansni ražanj'", function() {
        expect(scope.title).toBe('Renesansni ražanj');
    });

    it("should have a $scope.detail variable", function() {
        expect(scope.detail).toBeDefined();
    });


});

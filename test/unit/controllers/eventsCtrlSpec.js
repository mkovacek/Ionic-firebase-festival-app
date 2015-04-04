describe("EventsCtrl Unit test", function () {

    var scope,eventsCtrl,stateParams,day;
    beforeEach(module('events.controllers'));

    beforeEach(inject(function($rootScope, $controller){
        scope=$rootScope.$new();
        stateParams = {day:1};
        eventsCtrl=$controller('EventsCtrl', {$scope: scope, $stateParams:stateParams});
    }));

    it('should have a EventsCtrl controller', function() {
        expect(eventsCtrl).toBeDefined();
    });

    it("should have a $scope variable", function() {
        expect(scope).toBeDefined();
    });

    it("should have a $scope.events variable", function() {
        expect(scope.events).toBeDefined();
    });

    it("should have a $scope.day variable", function() {
        expect(scope.day).toBeDefined();
    });

    it("value must be -> $scope.day=1", function() {
        expect(scope.day).toBe(1);
    });

});

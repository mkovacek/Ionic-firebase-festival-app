describe("DataService Unit test", function () {

    var dataService;
    beforeEach(module('data.services'));

    beforeEach(inject(function(DataService){
        dataService=DataService;
    }));

    it('should have a dataService service', function() {
        expect(dataService).toBeDefined();
    });

    it('should have a getData method', function() {
        expect(dataService.getData()).toBeDefined();
    });

    it("should have a getEventsData method", function() {
        expect(dataService.getEventsData).toBeDefined();
    });

    it("should have a getEventsDetailsData method", function() {
        expect(dataService.getEventsDetailsData()).toBeDefined();
    });

});

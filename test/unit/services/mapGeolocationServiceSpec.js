describe("MapGeolocationService Unit test", function () {

    var mapGeolocationService;
    beforeEach(module('mapGeolocation.services'));

    beforeEach(inject(function(MapGeolocationService){
        mapGeolocationService=MapGeolocationService;
    }));

    it('should have a mapGeolocationService service', function() {
        expect(mapGeolocationService).toBeDefined();
    });

    it('should have a getData method', function() {
        expect(mapGeolocationService.getLocation()).toBeDefined();
    });

});

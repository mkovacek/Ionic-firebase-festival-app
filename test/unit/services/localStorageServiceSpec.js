describe("LocalStorageService Unit test", function () {

    var localStorageService;
    beforeEach(module('localStorage.services'));

    beforeEach(inject(function(LocalStorageService){
        localStorageService=LocalStorageService;
    }));

    it('should have a localStorageService service', function() {
        expect(localStorageService).toBeDefined();
    });

    it('should have a setData method', function() {
        expect(localStorageService.setData).toBeDefined();
    });

    it("should have a getData method", function() {
        expect(localStorageService.getData).toBeDefined();
    });

    it('should have a setContacts method', function() {
        expect(localStorageService.setContacts).toBeDefined();
    });

    it("should have a getContacts method", function() {
        expect(localStorageService.getContacts).toBeDefined();
    });

    it('should have a setRenaissance method', function() {
        expect(localStorageService.setRenaissance).toBeDefined();
    });

    it("should have a getRenaissance method", function() {
        expect(localStorageService.getRenaissance).toBeDefined();
    });

    it('should have a setEvents method', function() {
        expect(localStorageService.setEvents).toBeDefined();
    });

    it("should have a getEvents method", function() {
        expect(localStorageService.getEvents).toBeDefined();
    });

    it('should have a setSponsors method', function() {
        expect(localStorageService.setSponsors).toBeDefined();
    });

    it("should have a getSponsors method", function() {
        expect(localStorageService.getSponsors).toBeDefined();
    });

    it('should have a setMapMarkers method', function() {
        expect(localStorageService.setMapMarkers).toBeDefined();
    });

    it("should have a getMapMarkers method", function() {
        expect(localStorageService.getMapMarkers).toBeDefined();
    });


    it('should have a setUserLocation method', function() {
        expect(localStorageService.setUserLocation).toBeDefined();
    });

    it("should have a getUserLocation method", function() {
        expect(localStorageService.getUserLocation).toBeDefined();
    });

    it('should have a setLanguage method', function() {
        expect(localStorageService.setLanguage).toBeDefined();
    });

    it("should have a getLanguage method", function() {
        expect(localStorageService.getLanguage).toBeDefined();
    });


});

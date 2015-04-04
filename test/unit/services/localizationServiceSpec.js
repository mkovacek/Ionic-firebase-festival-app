describe("LocalizationService Unit test", function () {

    var localizationService,lang;
    beforeEach(module('localization.services'));

    beforeEach(inject(function(LocalizationService){
        localizationService=LocalizationService;
        lang='hr';
    }));

    it('should have a localizationService service', function() {
        expect(localizationService).toBeDefined();
    });

    it('should have a getLanguage method', function() {
        expect(localizationService.getLanguage()).toBeDefined();
    });

    it("should have a setLanguage method", function() {
        expect(localizationService.setLanguage).toBeDefined();
    });

});

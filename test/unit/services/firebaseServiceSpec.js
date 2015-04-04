describe("FirebaseService Unit test", function () {

    var firebaseService;
    beforeEach(module('firebase.services'));

    beforeEach(inject(function(FirebaseService){
        firebaseService=FirebaseService;
    }));

    it('should have a firebaseService service', function() {
        expect(firebaseService).toBeDefined();
    });

    it('should have a getData method', function() {
        expect(firebaseService.getData()).toBeDefined();
    });

});

describe('vanilla js sudoku', function() {
    it('should open the start sudoku', function() {

        browser.ignoreSynchronization = true;

        browser.get('http://127.0.0.1:8080/');

        element(by.id('tableCreate')).click();

        var elements = element.all(protractor.By.css('.block'));
        expect(elements.count()).toEqual(9);
    });
});
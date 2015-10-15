describe('vanilla js sudoku', function() {
    it('should open the start sudoku', function() {

        browser.ignoreSynchronization = true;

        browser.get('http://127.0.0.1:8080/');

        element(by.id('tableCreate')).click();

        browser.sleep(1000);

        var blocks = element.all(protractor.By.css('.block'));
        expect(blocks.count()).toEqual(9);

        var cells = element.all(protractor.By.css('.cell'));
        expect(cells.count()).toEqual(81);

        expect(element(by.id('x1y1')).getText()).toEqual('1');
        expect(element(by.id('x9y1')).getText()).toEqual('3');
        expect(element(by.id('x5y2')).getText()).toEqual('6');
        expect(element(by.id('x3y3')).getText()).toEqual('3');
        expect(element(by.id('x6y3')).getText()).toEqual('1');

        expect(element(by.id('x2y4')).getText()).toEqual('7');
        expect(element(by.id('x4y4')).getText()).toEqual('1');
        expect(element(by.id('x3y5')).getText()).toEqual('8');
        expect(element(by.id('x7y5')).getText()).toEqual('5');
        expect(element(by.id('x6y6')).getText()).toEqual('3');
        expect(element(by.id('x8y6')).getText()).toEqual('4');

        expect(element(by.id('x4y7')).getText()).toEqual('8');
        expect(element(by.id('x7y7')).getText()).toEqual('6');
        expect(element(by.id('x5y8')).getText()).toEqual('1');
        expect(element(by.id('x1y9')).getText()).toEqual('6');
        expect(element(by.id('x9y9')).getText()).toEqual('7');

    });

});
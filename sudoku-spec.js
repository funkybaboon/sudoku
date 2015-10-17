describe('vanilla js sudoku', function() {
    var checkBackground = function(x,y) {
        var pos = 'x'+x+'y'+y;
        expect(element(by.id(pos))
            .getCssValue('background-color'))
            .toEqual('rgba(192, 255, 192, 1)');
    };

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

        checkBackground(3,1);
        checkBackground(5,1);
        checkBackground(6,1);
        checkBackground(8,1);

        checkBackground(3,2);
        checkBackground(5,2);
        checkBackground(6,2);
        checkBackground(9,2);

        checkBackground(1,3);
        checkBackground(2,3);
        checkBackground(8,3);
        checkBackground(9,3);

        checkBackground(1,4);
        checkBackground(6,4);
        checkBackground(7,4);
        checkBackground(9,4);

        checkBackground(2,5);
        checkBackground(3,5);
        checkBackground(4,5);
        checkBackground(5,5);

        checkBackground(2,6);
        checkBackground(5,6);
        checkBackground(7,6);
        checkBackground(8,6);

        checkBackground(1,7);
        checkBackground(4,7);
        checkBackground(7,7);
        checkBackground(9,7);

        checkBackground(4,8);
        checkBackground(6,8);
        checkBackground(7,8);
        checkBackground(8,8);

        checkBackground(1,9);
        checkBackground(2,9);
        checkBackground(3,9);
        checkBackground(4,9);
    });

});
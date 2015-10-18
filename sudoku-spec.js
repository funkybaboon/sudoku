describe('vanilla js sudoku', function() {
    // check if background color is green
    var checkBackground = function(x,y) {
        var pos = 'x'+x+'y'+y;
        expect(element(by.id(pos))
            .getCssValue('background-color'))
            .toEqual('rgba(192, 255, 192, 1)');
    };

    // check value of a sudoku cell
    var checkValue = function(x,y,expected) {
        var pos = 'x'+x+'y'+y;
        expect(element(by.id(pos)).getText()).toEqual(expected.toString());
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

        checkValue(1,1,1);
        checkValue(9,1,3);
        checkValue(5,2,6);
        checkValue(3,3,3);
        checkValue(6,3,1);

        checkValue(2,4,7);
        checkValue(4,4,1);
        checkValue(3,5,8);
        checkValue(7,5,5);
        checkValue(6,6,3);
        checkValue(8,6,4);

        checkValue(4,7,8);
        checkValue(7,7,6);
        checkValue(5,8,1);
        checkValue(1,9,6);
        checkValue(9,9,7);

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
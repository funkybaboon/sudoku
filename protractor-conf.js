exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['sudoku-spec.js'],
    framework: 'jasmine2'
};
var urlParams;

function createEmptySudoku() {
    var sudoku = [];
    for (var x = 1; x <= 9; x++) {
        sudoku[x] = [];
        for (var y = 1; y <= 9; y++) {
            sudoku[x][y] = [];
        }
    }
    return sudoku;
}

var sudoku = createEmptySudoku();
sudoku[1][1]['value'] = 1;
sudoku[9][1]['value'] = 3;
sudoku[5][2]['value'] = 6;
sudoku[3][3]['value'] = 3;
sudoku[6][3]['value'] = 1;

sudoku[2][4]['value'] = 7;
sudoku[4][4]['value'] = 1;
sudoku[3][5]['value'] = 8;
sudoku[7][5]['value'] = 5;
sudoku[6][6]['value'] = 3;
sudoku[8][6]['value'] = 4;

sudoku[4][7]['value'] = 8;
sudoku[7][7]['value'] = 6;
sudoku[5][8]['value'] = 1;
sudoku[1][9]['value'] = 6;
sudoku[9][9]['value'] = 7;


var background = '#C0FFC0';

sudoku[3][1]['background'] = background;
sudoku[5][1]['background'] = background;
sudoku[6][1]['background'] = background;
sudoku[8][1]['background'] = background;

sudoku[3][2]['background'] = background;
sudoku[5][2]['background'] = background;
sudoku[6][2]['background'] = background;
sudoku[9][2]['background'] = background;

sudoku[1][3]['background'] = background;
sudoku[2][3]['background'] = background;
sudoku[8][3]['background'] = background;
sudoku[9][3]['background'] = background;

sudoku[1][4]['background'] = background;
sudoku[6][4]['background'] = background;
sudoku[7][4]['background'] = background;
sudoku[9][4]['background'] = background;

sudoku[2][5]['background'] = background;
sudoku[3][5]['background'] = background;
sudoku[4][5]['background'] = background;
sudoku[5][5]['background'] = background;

sudoku[2][6]['background'] = background;
sudoku[5][6]['background'] = background;
sudoku[7][6]['background'] = background;
sudoku[8][6]['background'] = background;

sudoku[1][7]['background'] = background;
sudoku[4][7]['background'] = background;
sudoku[7][7]['background'] = background;
sudoku[9][7]['background'] = background;

sudoku[4][8]['background'] = background;
sudoku[6][8]['background'] = background;
sudoku[7][8]['background'] = background;
sudoku[8][8]['background'] = background;

sudoku[1][9]['background'] = background;
sudoku[2][9]['background'] = background;
sudoku[3][9]['background'] = background;
sudoku[4][9]['background'] = background;


window.onpopstate = function () {
    var match;
    var pl = /\+/g;  // Regex for replacing addition symbol with a space
    var search = /([^&=]+)=?([^&]*)/g;
    var decode = function (s) {
        return decodeURIComponent(s.replace(pl, " "));
    };
    var query = window.location.search.substring(1);

    urlParams = {};
    while ((match = search.exec(query)) !== null)
        urlParams[decode(match[1])] = decode(match[2]);
}();

window.onload = function () {
    document.getElementById('tableCreate').onclick = function () {
        tableCreate();
    };
    document.getElementById('seeGetParameters').onclick = function () {
        alert(JSON.stringify(urlParams, null, 4));
    };

    // create sudoku
    function tableCreate() {
        var body = document.getElementsByClassName("frame")[0];
        var containerDiv = body.appendChild(document.createElement('div'))
        containerDiv.className = 'container';

        // create big cells for 3x3 single cells
        for (var i = 0; i <= 6; i += 3) {
            for (var j = 0; j <= 6; j += 3) {
                var div = containerDiv.appendChild(document.createElement('div'))
                div.className = 'block';
                createInnnerCells(div, i, j);
            }
        }

        // create single cells with numbers
        function createInnnerCells(parent, xx, yy) {
            for (var x = 1; x <= 3; x++) {
                for (var y = 1; y <= 3; y++) {
                    var localScope = function () {
                        var div = parent.appendChild(document.createElement('div'))

                        var X = y + yy;
                        var Y = x + xx;
                        var id = 'x' + [X] + 'y' + [Y];

                        var cellValue = sudoku[X][Y]['value'] || '';

                        div.style.background = sudoku[X][Y]['background'] || 'white'
                        div.className = 'cell';
                        div.id = id;

                        var popup = createPopup(id);

                        div.onclick = function () {
                            popup.show();
                        };

                        div.appendChild(popup);
                        div.appendChild(document.createTextNode(cellValue));
                    };
                    localScope();
                }
            }
        }

        // create popup
        function createPopup(position) {
            var popup = document.createElement('dialog');
            popup.className = 'popup';
            popup.id = 'window_' + position;

            var dialogblock = popup.appendChild(document.createElement('div'));
            dialogblock.className = 'popupblock';

            for (var z = 1; z <= 9; z++) {
                var div = dialogblock.appendChild(document.createElement('div'));

                div.className = 'popupcell';
                div.id = position + 'z' + z;
                div.appendChild(document.createTextNode(z));

                div.onclick = function (e, z) {
                    document.getElementById(position).innerHTML = z;
                    e.stopPropagation();
                    popup.close();
                };
            }

            return popup;
        }
    }
};

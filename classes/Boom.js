var LivingCreature = require("./LivingCreature");

module.exports = class Boom extends  LivingCreature{
    constructor(x, y, id) {
        super(x,y)
        this.id = id

        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooselCell(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
					found.push(this.directions[i]);
				}
            }
        }

        return found;
    }

    boom() {
        var boomCells = this.chooselCell(1);
        for (var i in boomCells) {
            var x = boomCells[i][0];
            var y = boomCells[i][1];

            if (matrix[y][x] == 1) {
                for (var i in grassArr) {
                    if (grassArr[i].x == x && grassArr[i].y == y) {
                        grassArr.splice(i, 1)
                    }
                }
            } else if (matrix[y][x] == 2) {
                for (var i in grassEaterArr) {
                    if (grassEaterArr[i].x == x && grassEaterArr[i].y == y) {
                        grassEaterArr.splice(i, 1)
                    }
                }
            } else if (matrix[y][x] == 3) {
                for (var i in gishatichArr) {
                    if (gishatichArr[i].x == x && gishatichArr[i].y == y) {
                        gishatichArr.splice(i, 1)
                    }
                }
            } else if (matrix[y][x] == 4) {
                for (var i in BoomArr) {
                    if (BoomArr[i].x == x && BoomArr[i].y == y) {
                        BoomArr.splice(i, 1)
                    }
                }
            } else if (matrix[y][x] == 5) {
                for (var i in SoxakArr) {
                    if (SoxakArr[i].x == x && SoxakArr[i].y == y) {
                        SoxakArr.splice(i, 1)
                    }
                }
            }
            // matrix[y][x] = 0;
        }

        for (var i in this.BoomArr) {
            if (BoomArr[i].x == this.x && BoomArr[i].y == this.y) {
                BoomArr.splice(i, 1)
            }
        }
        // matrix[this.y][this.x] = 0
    }
}

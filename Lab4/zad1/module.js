/**
 * Class represeding an operation
*/
class Operation {
    /**
     * Create an instanve of operation
     * @constructor
     * @param {number} x - First number to sum
     * @param {number} y - Second number to sum
     */
    constructor(x,y) {
        this.x = parseInt(x);
        this.y = parseInt(y);
    }
    /**
     * Returns sum of operation arguments
     * @returns {number} Sum of arguments
     */
    sum() {
        return this.x+this.y;
    }
}

module.exports.Operation = Operation;
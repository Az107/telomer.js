"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.telomer = void 0;
class telomer {
    isOdd(n) {
        return (n % 2);
    }
    addTelomer(data) {
        let total = 0;
        data.forEach(n => {
            total += n;
        });
        data.unshift(this.isOdd(total));
        return data;
    }
    checkTelomer(data) {
        let result = false;
        if (data[0] == 0 || data[0] == 1) {
            let total = 0;
            for (let index = 1; index < data.length; index++) {
                total += data[index];
            }
            if (this.isOdd(total) == data[0])
                result = true;
        }
        return result;
    }
    constructor() {
    }
}
exports.telomer = telomer;

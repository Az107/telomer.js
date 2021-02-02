var telomer = require("../build/telomer");
var t = new telomer.telomer();

var data = [1,2,3,4,5];


test("add telomer to array", () => {
    expect([1,1,2,3,4,5]).toEqual(t.addTelomer(data));
})

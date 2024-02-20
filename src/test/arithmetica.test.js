const {add, subtract, multiply, divide} = require("../arithmetica")

test("2 + 3 is equal to 5", () => {
    expect(add(2,3)).toBe(5);
});

test("70 + 2000000000000000000000000 is equal to 2000000000000000000000070", () => {
    expect(add(70,2000000000000000000000000)).toBe(2000000000000000000000070);
});

test("975 + 25 is equal to 1000", () => {
    expect(add(975,25)).toBe(1000);
});

test("2 - 3 is equal to -1", () => {
    expect(subtract(2,3)).toBe(-1);
});

test("975 - 25 is equal to 950", () => {
    expect(subtract(975,25)).toBe(950);
});

test("2 * 3 is equal to 6", () => {
    expect(multiply(2,3)).toBe(6);
});

test("6 / 3 is equal to 2", () => {
    expect(divide(6,3)).toBe(2);
});
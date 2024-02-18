"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const drawing_book_1 = require("./drawing_book");
describe("pageCount", () => {
    it("Should return 0 for now", () => {
        expect((0, drawing_book_1.pageCount)(1, 2)).toBe(0);
    });
});

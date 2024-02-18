import { pageCount } from "./drawing_book";

describe("pageCount", () => {
    it("Should return 0 for now", () =>{
        expect(pageCount(1,2)).toBe(0);
    });
});
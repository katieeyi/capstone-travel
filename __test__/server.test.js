import "regenerator-runtime/runtime";

const request = require("supertest");
const app = require("../src/server/app.js");

describe("Testing root path", () => {
    test("Should respond to GET method", () => {
        return request(app)
            .get("/")
            .expect(200);
    });
});

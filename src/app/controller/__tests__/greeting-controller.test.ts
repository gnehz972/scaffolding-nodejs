import { getServer } from "../../../server";
import supertest = require("supertest");
import { ErrorResponse } from "../../../middleware/exception/error-response";

describe("API test for greeting", () => {
  const request = supertest(getServer());

  describe("POST /hello", () => {
    it("should return 200 for hello", () => {
      const payload = {
        hi: "Hi",
      };
      return request
        .post("/api/v1/greeting/hello")
        .send(payload)
        .expect(200)
        .then((response) => {
          expect(response.body).toEqual({ hiBack: "Hello! Hi" });
        });
    });

    it("should return 400 if no hi", () => {
      const payload = {};
      return request
        .post("/api/v1/greeting/hello")
        .send(payload)
        .expect(400)
        .then((response) => {
          const errorResponse = response.body as ErrorResponse;
          expect(errorResponse.errorCode).toEqual("01");
          expect(errorResponse.message).toEqual("'hi' is required");
        });
    });

    it("should return 404 if no path defined", () => {
      const payload = {
        hi: "hi",
      };
      return request
        .post("/api/v1/none-exist/hi")
        .send(payload)
        .expect(404)
        .then((response) => {
          const errorResponse = response.body as ErrorResponse;
          expect(errorResponse.message).toEqual("Not Found");
        });
    });
  });

  describe("GET /hi", () => {
    it("should return 200 for hi", () => {
      return request
        .get("/api/v1/greeting/hi")
        .send()
        .expect(200)
        .then((response) => {
          expect(response.body).toEqual("hi");
        });
    });
  });
});

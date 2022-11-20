import { helloThere } from "../greeting-service";

describe("test hello-service", () => {
  it("should return hello hi", () => {
    expect(helloThere("hi")).toBe("Hello! hi");
  });
});

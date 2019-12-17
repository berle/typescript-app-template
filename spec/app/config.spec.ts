import { Container } from "typedi";
//
import { Config } from "../../src/app/config";

describe("Config", () => {
  const config = Container.get(Config);

  describe("getWho", () => {
    it("should return 'world'", () => {
      expect(config.getWho()).toBe("world");
    });
  });
});

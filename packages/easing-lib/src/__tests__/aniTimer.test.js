import { describe, it, expect, beforeAll, afterAll } from "bun:test";
import aniTimer from "../aniTimer";

describe("Test aniTimer", () => {
  let keepRAF;
  beforeAll(() => {
    keepRAF = window.requestAnimationFrame;
    window.requestAnimationFrame = (func) => {
      setTimeout(() => {
        func(new Date().getTime());
      }, 1);
    };
  });
  afterAll(() => {
    window.requestAnimationFrame = keepRAF;
  });

  it("basic test", async () => {
    await new Promise((resolve) => {
      aniTimer(
        {
          isContinue: () => true,
          done: resolve,
        },
        5,
      );
    });
  });
});

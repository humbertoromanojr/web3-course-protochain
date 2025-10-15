import { describe, test, expect } from "@jest/globals";
import Block from "../src/lib/block";

describe("Block test", () => {
  test("should be valid", () => {
    const block = new Block(1, "abc", "block 02");
    const valid = block.isValid();
    expect(valid).toBeTruthy();
  });

  test("should NOT is valid (previous hash)", () => {
    const block = new Block(1, "", "block 02");
    const valid = block.isValid();
    expect(valid).toBeFalsy();
  });

  test("should NOT is valid (timestamp)", () => {
    const block = new Block(1, "abc", "block 02");
    block.timestamp = -1;
    const valid = block.isValid();
    expect(valid).toBeFalsy();
  });

  test("should NOT is valid (data)", () => {
    const block = new Block(1, "abd", "");
    const valid = block.isValid();
    expect(valid).toBeFalsy();
  });

  test("should NOT is valid (index)", () => {
    const block = new Block(-1, "abc", "block 02");
    const valid = block.isValid();
    expect(valid).toBeFalsy();
  });
});

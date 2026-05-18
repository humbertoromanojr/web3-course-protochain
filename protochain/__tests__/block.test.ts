import { describe, test, expect, beforeAll } from "@jest/globals";
import Block from "../src/lib/block";

describe("Block test", () => {
  let genesis: Block;

  beforeAll(() => {
    genesis = new Block(0, "", "genesis Block");
  });

  test("should be valid", () => {
    const block = new Block(1, genesis.hash, "block 02");
    const valid = block.isValid(genesis.hash, genesis.index);
    expect(valid).toBeTruthy();
  });

  test("should NOT is valid (previous hash)", () => {
    const block = new Block(1, "", "block 02");
    const valid = block.isValid(genesis.hash, genesis.index);
    expect(valid).toBeFalsy();
  });

  test("should NOT is valid (timestamp)", () => {
    const block = new Block(1, genesis.hash, "block 02");
    block.timestamp = -1;
    block.hash = block.getHash();
    const valid = block.isValid(genesis.hash, genesis.index);
    expect(valid).toBeFalsy();
  });

  test("should NOT is valid (data)", () => {
    const block = new Block(1, genesis.hash, "");
    const valid = block.isValid(genesis.hash, genesis.index);
    expect(valid).toBeFalsy();
  });

  test("should NOT is valid (index)", () => {
    const block = new Block(-1, genesis.hash, "block 02");
    const valid = block.isValid(genesis.hash, genesis.index);
    expect(valid).toBeFalsy();
  });
});

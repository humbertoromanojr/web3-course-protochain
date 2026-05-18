import { describe, test, expect } from "@jest/globals";
import Blockchain from "../src/lib/blockchain";
import Block from "../src/lib/block";

describe("Blockchain test", () => {
  test("should has genesis blocks", () => {
    const blockchain = new Blockchain();
    expect(blockchain.blocks.length).toEqual(1);
  });

  test("should be valid (genesis)", () => {
    const blockchain = new Blockchain();
    expect(blockchain.isValid()).toEqual(true);
  });

  test("should add block", () => {
    const blockchain = new Blockchain();
    const result = blockchain.addBlock(
      new Block(1, blockchain.blocks[0].hash, "Block 02"),
    );
    expect(result).toEqual(true);
  });

  test("should add block (two blocks)", () => {
    const blockchain = new Blockchain();
    blockchain.addBlock(new Block(1, blockchain.blocks[0].hash, "Block 02"));
    expect(blockchain.isValid()).toEqual(true);
  });

  test("should NOT add block", () => {
    const blockchain = new Blockchain();
    const block = new Block(-1, blockchain.blocks[0].hash, "Block 02");
    const result = blockchain.addBlock(block);
    expect(result).toEqual(false);
  });

  test("should NOT be valid", () => {
    const blockchain = new Blockchain();
    blockchain.addBlock(new Block(1, blockchain.blocks[0].hash, "Block 02"));
    blockchain.blocks[1].data = "a transfere 2 para b";
    expect(blockchain.isValid()).toEqual(false);
  });
});

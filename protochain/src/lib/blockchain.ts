import Block from "./block";

/**
 * Blockchain class
 */
export default class Blockchain {
  blocks: Block[];
  nextIndex: number = 0;

  /**
   * Creates an instance of Blockchain.
   */
  constructor() {
    this.blocks = [new Block(this.nextIndex, "", "genesis Block")];
    this.nextIndex++;
  }

  getLastBlock(): Block | undefined {
    return this.blocks[this.blocks.length - 1];
  }

  addBlock(block: Block): boolean {
    const lastBlock = this.getLastBlock();

    if (!block.isValid(lastBlock.hash, lastBlock.index)) return false;

    this.blocks.push(block);
    this.nextIndex++;

    return true;
  }
}

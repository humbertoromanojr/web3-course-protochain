import sha256 from "crypto-js/sha256";

/**
 * Block class
 */

export default class Block {
  index: number;
  hash: string;
  timestamp: number;
  previousHash: string;
  data: string | undefined;

  /**
   *
   * @param index The block index in blockchain
   * @param previousHash The hash of the previous block
   * @param data The block data
   * @timestamp The block timestamp
   */
  constructor(index: number, previousHash?: string, data?: string) {
    this.index = index;
    this.timestamp = Date.now();
    this.previousHash = previousHash;
    this.data = data;
    this.hash = this.getHash();
  }

  getHash(): string {
    return sha256(
      this.index + this.previousHash + this.timestamp + this.data
    ).toString();
  }

  /**
   * Validates the block
   * @returns Returns true if the block is valid
   */
  isValid(previousHash: string, previousIndex: number): boolean {
    if (previousIndex !== this.index - 1) return false;
    if (!this.hash) return false;
    if (!this.data) return false;
    if (this.previousHash !== previousHash) return false;
    if (this.timestamp < 1) return false;

    return true;
  }
}

/**
 * Validation class
 */
export default class Validation {
  success: boolean;
  message: string;

  /**
   * Creates a new validation objects
   * @param success if the validation was successful
   * @param message if tha validation message failed
   */
  constructor(success: boolean, message: string) {
    this.success = success;
    this.message = message;
  }
}

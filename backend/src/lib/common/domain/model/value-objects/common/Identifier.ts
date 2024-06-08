import { ValueObject } from './ValueObject';
import { v4 as uuidv4 } from 'uuid';

export class Identifier extends ValueObject {
  uuid: string;

  constructor(uuid: string) {
    super();
    this.uuid = uuid;
    // @TODO validate
  }

  static generate(): Identifier {
    return this.fromString(uuidv4());
  }

  toString(): string {
    return this.uuid;
  }

  static fromString(string: string): Identifier {
    return new this(string);
  }
}

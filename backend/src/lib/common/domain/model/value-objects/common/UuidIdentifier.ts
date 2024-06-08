import { ValueObject } from './ValueObject';
import { v4 as uuidv4 } from 'uuid';

export class UuidIdentifier extends ValueObject {
  uuid: string;

  constructor(uuid: string) {
    super();
    this.uuid = uuid;
    // @TODO validate
  }

  static generate(): UuidIdentifier {
    return this.fromString(uuidv4());
  }

  toString(): string {
    return this.uuid;
  }

  static fromString(string: string): UuidIdentifier {
    return new this(string);
  }
}

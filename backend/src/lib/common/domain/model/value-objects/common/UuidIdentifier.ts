import { ValueObject } from './ValueObject';
import { v4 as uuidv4 } from 'uuid';

export class UuidIdentifier extends ValueObject {
  constructor(private uuid: string) {
    super();
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

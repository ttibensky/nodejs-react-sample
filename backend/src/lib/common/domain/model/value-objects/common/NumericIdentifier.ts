import { ValueObject } from './ValueObject';

export class NumericIdentifier extends ValueObject {
  id: number;

  constructor(id: number) {
    super();
    this.id = id;
    // @TODO validate
  }

  toString(): string {
    return this.id.toString();
  }
}

import { ValueObject } from './ValueObject';

export class NumericIdentifier extends ValueObject {
  constructor(private id: number) {
    super();
    // @TODO validate
  }

  toString(): string {
    return this.id.toString();
  }
}

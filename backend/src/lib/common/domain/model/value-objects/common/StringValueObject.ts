import { ValueObject } from 'src/lib/common/domain/model/value-objects/common/ValueObject';

export abstract class StringValueObject extends ValueObject {
  constructor(private value: string) {
    super();
  }

  toString(): string {
    return this.value;
  }
}

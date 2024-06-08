import { ValueObject } from 'src/lib/common/domain/model/value-objects/common/ValueObject';

export abstract class StringValueObject extends ValueObject {
  value: string;

  constructor(value: string) {
    super();
    this.value = value;
  }

  toString(): string {
    return this.value;
  }
}

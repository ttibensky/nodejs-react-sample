import { formatISO, parseISO } from 'date-fns';
import { ValueObject } from 'src/lib/common/domain/model/value-objects/common/ValueObject';

export class DateValueObject extends ValueObject {
  constructor(protected date: Date) {
    super();
  }

  toString(): string {
    return formatISO(this.date);
  }

  static fromString(date: string): DateValueObject {
    return new this(parseISO(date));
  }
}

import { BaseEvent } from './event/BaseEvent';

export abstract class EventSourcedAggregateRoot {
  events: BaseEvent[];

  protected recordThat(event: BaseEvent): void {
    this.events.push(event);
    this.applyDomainEvent(event);
  }

  protected abstract applyDomainEvent(event: BaseEvent): void;
}

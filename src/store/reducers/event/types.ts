import { IUser } from '../../../models/IUser';
import { IEvent } from '../../../models/IEvent';

export interface EventState {
  guests: IUser[];
  events: IEvent[];
}

export enum EventActionsEnum {
  SET_GUESTS = 'SET_GUESTS',
  SET_EVENTS = 'SET_EVENTS',
}

export interface SetGuestsAction {
  type: EventActionsEnum.SET_GUESTS;
  payload: IEvent[];
}

export interface SetEventAction {
  type: EventActionsEnum.SET_EVENTS;
  payload: IUser[];
}

export type EventAction = SetGuestsAction | SetEventAction;

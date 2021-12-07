import { EventAction, EventState, EventActionsEnum } from './types';

const initialState: EventState = {
  guests: [],
  events: [],
};
/**
 *
 * @param state Current state
 * @param action
 * @returns
 */
export default function EventReducer(state = initialState, action: EventAction): EventState {
  //
  switch (action.type) {
    case EventActionsEnum.SET_EVENTS:
      return { ...state, events: action.payload };
    case EventActionsEnum.SET_GUESTS:
      return { ...state, guests: action.payload };
    default:
      return state;
  }
}

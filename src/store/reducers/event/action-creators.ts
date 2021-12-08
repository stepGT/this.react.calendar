import { EventActionsEnum, SetEventAction, SetGuestsAction } from './types';
import { IUser } from '../../../models/IUser';
import { IEvent } from '../../../models/IEvent';
import { AppDispatch } from '../../index';
import UserService from '../../../api/UserService';

export const EventActionCreators = {
  setGuests: (payload: IUser[]): SetGuestsAction => ({
    type: EventActionsEnum.SET_GUESTS,
    payload,
  }),
  setEvents: (payload: IEvent[]): SetEventAction => ({
    type: EventActionsEnum.SET_EVENTS,
    payload,
  }),
  fetchGuests: () => async (dispatch: AppDispatch) => {
    try {
      const response = await UserService.getUsers();
      dispatch(EventActionCreators.setGuests(response.data));
    } catch (e) {
      console.log(e);
    }
  },
  createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem('events') || '[]';
      const json = JSON.parse(events) as IEvent[];
      json.push(event);
      dispatch(EventActionCreators.setEvents(json));
      localStorage.setItem('events', JSON.stringify(json));
    } catch (e) {
      console.log(e);
    }
  },
};

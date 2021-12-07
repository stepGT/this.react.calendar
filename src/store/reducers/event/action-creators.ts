import { EventActionsEnum, SetEventAction, SetGuestsAction } from './types';
import { IUser } from '../../../models/IUser';
import { IEvent } from '../../../models/IEvent';
import { AppDispatch } from '../../index';
import axios from 'axios';
import UserService from '../../../api/UserService';

export const EventActionCreators = {
  setGuests: (payload: IUser[]): SetGuestsAction => ({
    type: EventActionsEnum.SET_GUESTS,
    payload,
  }),
  setEvents: (payload: IEvent[]): SetEventAction => ({
    type: EventActionsEnum.SET_GUESTS,
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
};

import {  UsertActionTypes } from './user.types';

export const setCurrentUser = user => ({
    type : UsertActionTypes.SET_CURRENT_USER,
    payload : user
});
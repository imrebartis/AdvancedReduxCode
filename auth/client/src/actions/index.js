import axios from 'axios'; // eslint-disable-next-line
import { AUTH_USER } from './types';

export const signup = (formProps) => dispatch => {
  axios.post('http://localhost:3090/signup', formProps);
};
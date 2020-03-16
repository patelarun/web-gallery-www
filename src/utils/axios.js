/* eslint-disable multiline-comment-style */
import axios from 'axios';
import store from '../appRedux/store/index';
import { setLoading } from '../appRedux/actions';
import { userSignOut } from '../appRedux/thunks/auth';
import get from 'lodash/fp/get';
import Promise from 'promise';

const configuredAxios = axios.create({
  baseURL: 'http:/localhost:4000',

  headers: {
    'Authorization': `Bearer  ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json',
  },
});

function onError (error) {
  store.dispatch(setLoading(false));
  if (get('response.status')(error) === 401) {
    store.dispatch(userSignOut());
  }
  return Promise.reject(error);
}

configuredAxios.interceptors.request.use((config) => {
  store.dispatch(setLoading(true));
  return config;
}, onError);

// Add a response interceptor
configuredAxios.interceptors.response.use((response) => {
  store.dispatch(setLoading(false));
  return response;
}, onError);

export default configuredAxios;

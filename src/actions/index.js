export const SET_APPLICATION_FIELDS = 'SET_APPLICATION_FIELDS';
export const SET_LOADING = 'SET_LOADING';

export const setApplicationFields = payload => ({ type: SET_APPLICATION_FIELDS, payload });
export const setLoading = isLoading => ({ type: SET_LOADING, isLoading });

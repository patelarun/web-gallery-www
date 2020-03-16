import { SET_LOADING, SET_APPLICATION_FIELDS } from 'actions';

const initialState = {
  isLoading: false,
};

function application (state = initialState, action) {
  switch (action.type) {
  case SET_APPLICATION_FIELDS:
    return {
      ...state,
      ...action.payload,
    };

  case SET_LOADING:
    if (state.isLoading === action.isLoading) return state;
    return {
      ...state,
      isLoading: action.isLoading,
    };
  default:
    return state;
  }
}

export default application;

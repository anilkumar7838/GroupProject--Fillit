import {
    FORM_FIELD_REQUEST,
    FORM_FIELD_SUCCESS,
    FORM_FIELD_FAILURE,
    CLEAR_ERRORS,
  } from "../constants/formConstants";
  
  export const formfieldReducer = (state = { fields: [] }, action) => {
    switch (action.type) {
      case FORM_FIELD_REQUEST:
        return {
          loading: true,
          fields: [],
        };
      case FORM_FIELD_SUCCESS:
        return {
          loading: false,
          fields: action.payload.fields,
        };
      case FORM_FIELD_FAILURE:
        return {
          loading: false,
          error: action.payload,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };
  
  
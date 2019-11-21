import { axiosWithAuth } from "../../common/utils/axiosWithAuth";

//slice contains, initialstate, action types, actions, and reducers

//strains action types
export const GET_STRAINS_START = "GET_STRAINS_START";
export const GET_STRAINS_SUCCESS = "GET_STRAINS_SUCCESS";
export const GET_STRAINS_FAILURE = "GET_STRAINS_FAILURE";

//strain actions
export const getStrains = () => dispatch => {
  dispatch({ type: GET_STRAINS_START });

  axiosWithAuth()
    .get("https://medicalcabinet.herokuapp.com/api/strains")
    .then(res => dispatch({ type: GET_STRAINS_SUCCESS, payload: res.data }))
    .catch(error => {
      dispatch({ type: GET_STRAINS_FAILURE, payload: error.response });
    });
};

//strain reducer
const initialState = {
  strains: [],
  isFetching: false,
  error: ""
};

export const strainReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_STRAINS_START:
      return { ...state, isFetching: true, error: "" };
    case GET_STRAINS_SUCCESS:
      return { ...state, error: "", isFetching: false, strains: payload };
    case GET_STRAINS_FAILURE:
      return { ...state, isFetching: false, error: payload };
    default:
      return state;
  }
};

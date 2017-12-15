import {GET_BANNER_LIST_REQUEST, GET_BANNER_LIST_SUCCESS, GET_BANNER_LIST_FAIL } from 'actions/Banner'
const initState = {
  isLoading: false,
  dataGrid: {},
  errorMsg: ''
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case GET_BANNER_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
        dataGrid: {},
        errorMsg: ''
      };
    case GET_BANNER_LIST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        dataGrid: action.result.data,
        errorMsg: ''
      }
    };
    case GET_BANNER_LIST_FAIL: {
      return {
        ...state,
        isLoading: false,
        dataGrid: {},
        errorMsg: '请求错误'
      }
    }
    default:
      return state
  }
}



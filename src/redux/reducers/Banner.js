import {GET_DATA_REQUEST, GET_DATA_FAIL, GET_DELETEADVERTPIC_SUCCESS, GET_ADVERTPICLIST_SUCCESS} from '../actions/ActionTypes'
const initState = {
  isLoading: false,   // 加载进度
  delRes: {},         // 删除的返回
  getRes: [],         // 获取所以数据
  errorMsg: ''        // 错误的提示
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case GET_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        errorMsg: ''
      };
    case GET_DATA_FAIL: {
      return {
        ...state,
        isLoading: false,
        errorMsg: '请求错误'
      }
    };
    case GET_DELETEADVERTPIC_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        delRes: action.result.data.data,
        errorMsg: ''
      }
    };
    case GET_ADVERTPICLIST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        getRes: action.result.data.data,
        errorMsg: ''
      }
    }
    default:
      return state
  }
}



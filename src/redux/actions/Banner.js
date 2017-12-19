import {GET_DATA_REQUEST, GET_DATA_FAIL, GET_DELETEADVERTPIC_SUCCESS, GET_ADVERTPICLIST_SUCCESS} from './ActionTypes'
var Banner = {
  deleteAdvertPicById: function (id) {
    return {
      types: [GET_DATA_REQUEST, GET_DELETEADVERTPIC_SUCCESS, GET_DATA_FAIL],
      promise: client => client.get('/advert/deleteAdvertPicById/'+id)
    }
  },
  getAdvertPicList: function (type) {
    return {
      types: [GET_DATA_REQUEST, GET_ADVERTPICLIST_SUCCESS, GET_DATA_FAIL],
      promise: client => client.get('/advert/getAvertPitureByType/'+type)
    }
  }
}
module.exports = Banner


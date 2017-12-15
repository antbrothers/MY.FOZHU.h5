export const GET_BANNER_LIST_REQUEST = "GET_BANNER_LIST_REQUEST"
export const GET_BANNER_LIST_SUCCESS = "GET_BANNER_LIST_SUCCESS"
export const GET_BANNER_LIST_FAIL =  "GET_BANNER_LIST_FAIL"


var Banner = {
  getBannerList: function (id) {
    return {
      types: [GET_BANNER_LIST_REQUEST, GET_BANNER_LIST_SUCCESS, GET_BANNER_LIST_FAIL],
      promise: client => client.get('/advert/deleteAdvertPicById/'+id)
    }
  }
}
module.exports = Banner


/*
export function Banner() {
  /!*return {
    getBannerList: function (id) {
      return {
        types: [GET_BANNER_LIST_REQUEST, GET_BANNER_LIST_SUCCESS, GET_BANNER_LIST_FAIL],
        promise: client => client.get('/advert/deleteAdvertPicById/'+id)
      }
    }
  }*!/
  return {
    types: [GET_BANNER_LIST_REQUEST, GET_BANNER_LIST_SUCCESS, GET_BANNER_LIST_FAIL],
    promise: client => client.get('/advert/deleteAdvertPicById/'+id)
  }
}*/

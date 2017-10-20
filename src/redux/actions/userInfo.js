export const GET_USER_INFO_REQUEST = "userInfo/GET_USER_INFO_REQUEST";
export const GET_USER_INFO_SUCCESS = "userInfo/GET_USER_INFO_SUCCESS";
export const GET_USER_INFO_FAIL = "userInfo/GET_USER_INFO_FAIL";

export function getUserInfo() {
    return {
        types: [GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS, GET_USER_INFO_FAIL],
        promise: client => client.get(`familyweb/api/LiveStatistic/GetFamilyDetail?page=1&pagesize=10&familyId=14cb19c3-1cb7-4ed2-aa49-0fdcc4e9e4ca&anchorType=-1&date=2017-09-08&groupId=`)
    }
}
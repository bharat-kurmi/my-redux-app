export const getUserDetails = (id) => {
  return {
    type: 'GET_USERS',
    payload: id
  }

}
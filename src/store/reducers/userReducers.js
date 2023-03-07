
const initialState = {
  loading: true,
  userList: [
    { id: 1, name: 'test' },
    { id: 2, name: 'new test' },

  ],
  details: {},
  error: false
}

const userReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'Load_USERS': {
      const data = { ...state, userList: action.payload }
      console.log('data', data)
      return data;
    }
    case 'GET_USERS': {
      const details = state.userList.filter(user => user.id === action.payload)
      return { ...state, details: details }
    }
    default:
      return state;

  }

}

export default userReducer
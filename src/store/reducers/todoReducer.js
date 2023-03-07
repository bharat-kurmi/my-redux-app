const initialState = {
  loading: true,
  data: [],
  title: 'ToDo List'
};


const todoReducer = (state = initialState, action) => {

  switch (action.type) {
    case "Add": {
      return { ...state, data: action.payload };
    }
    default:
      return state;
  }

}

export default todoReducer;
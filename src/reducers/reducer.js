const initialState = {
  todos: ["Hello world", "Hi world", "Hey"],
  user: {
    name: "Randeep Rana",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;

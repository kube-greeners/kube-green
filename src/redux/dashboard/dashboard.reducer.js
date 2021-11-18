const INITIAL_STATE = {
  ourExampleStoredValue: "This is the initial example value",
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "EXAMPLE":
      return {
        ...state,
        ourExampleStoredValue: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

const redux = require("redux");
const produce = require("immer").produce;
const createStore = redux.createStore;
const initialState = {
  name: "John",
  age: 20,
  address: {
    city: "New York",
    state: "california",
    street: "south ",
  },
};

const Street_update = "Street_update";

const updateStreet = (street) => {
  return {
    type: Street_update,
    payload: street,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Street_update:
      // return {
      //   ...state,
      //   address: {
      //     ...state.address,
      //     street: action.payload,
      //   },
      // };
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default: {
      return state;
    }
  }
};

const store = createStore(reducer);

console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Updated State ", store.getState());
});

store.dispatch(updateStreet("karol bagh"));
unsubscribe();

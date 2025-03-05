const redux = require("redux");
const createStore = redux.createStore;

console.log("Hello, world! from index.js");

const Cake_Ordered = "Cake_ordered";
// action creator
// action is the object that has type property

function orderCake() {
  // Action creator is the function that return the object
  return {
    type: Cake_Ordered,
    quantity: 1,
  };
}

//  Redux

const initialState = {
  numOfCake: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Cake_Ordered:
      return {
        ...state,
        numOfCake: state.numOfCake - 1,
      };
      break;

    default:
      break;
  }
};

const store = createStore(reducer);
console.log("Initial state", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);

store.dispatch(orderCake());

store.dispatch(orderCake());

store.dispatch(orderCake());

unsubscribe();

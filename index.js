const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const reduxlogger = require("redux-logger");

const applyMiddleware = redux.applyMiddleware;

const logger = reduxlogger.createLogger();
console.log("Hello, world! from index.js");

const Cake_Ordered = "Cake_ordered";
const Cake_Restack = "Cake_Restack";
const IceCream_Ordered = "IceCream_ordered";
const IceCream_Restack = "IceCream_restack";
// action creator
// action is the object that has type property

function orderCake() {
  // Action  Creator is the function that return the object
  return {
    type: Cake_Ordered,
    quantity: 1,
  };
}

function restackCake(qty = 1) {
  return {
    type: Cake_Restack,
    payload: qty,
  };
}

function orderIceCream() {
  // Action creator is the function that return the object
  return {
    type: "IceCream_ordered",
    quantity: 1,
  };
}

function restackIceCream(qty = 1) {
  return {
    type: "IceCream_Restack",
    payload: qty,
  };
}

//  Redux

const initialState = {
  numOfCake: 10,
  numOfIceCream: 20,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Cake_Ordered:
      return {
        ...state,
        numOfCake: state.numOfCake - 1,
      };
    case Cake_Restack:
      return {
        ...state,
        numOfCake: state.numOfCake + action.payload,
      };

    case IceCream_Ordered:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };
    case IceCream_Restack:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream + action.payload,
      };
    default:
      break;
  }
};

const store = createStore(reducer, applyMiddleware(logger));
console.log("Initial state", store.getState());
const unsubscribe = store.subscribe(() => {
  //console.log("updated state", store.getState())
});

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restackCake());

unsubscribe();
store.dispatch(orderCake());

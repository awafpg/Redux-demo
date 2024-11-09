const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducer = redux.combineReducers;

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

function orderCake() {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
}

function restockCake(qty) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
}

function orderIceCream() {
  return {
    type: ICECREAM_ORDERED,
    payload: 1,
  };
}

function restockIceCream(qty) {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
  };
}

// const initiatStte = {
//   numOfCakes: 10,
//   numOfIceCream: 20,
// };

const initiateCakes = {
  numOfCakes: 10,
};

const initiateIceCream = {
  numOfIceCream: 20,
};

// const reducer = (state = initiatStte, action) => {
//   switch (action.type) {
//     case CAKE_ORDERED:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes - 1,
//       };
//     case CAKE_RESTOCKED:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes + action.payload,
//       };
//     case ICECREAM_ORDERED:
//       return {
//         ...state,
//         numOfIceCream: state.numOfIceCream - 1,
//       };
//     case ICECREAM_RESTOCKED:
//       return {
//         ...state,
//         numOfIceCream: state.numOfIceCream + action.payload,
//       };
//     default:
//       return state;
//   }
// };

const cakeReducer = (state = initiateCakes, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initiateIceCream, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream + action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducer({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
const store = createStore(rootReducer);

console.log("initial State", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("update state", store.getState())
);

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(5));

const actions = bindActionCreators(
  { orderCake, restockCake, orderIceCream, restockIceCream },
  store.dispatch
);
actions.orderCake();
actions.orderIceCream();
actions.orderCake();
actions.orderCake();
actions.restockCake(2);
actions.restockIceCream(2);

unsubscribe();

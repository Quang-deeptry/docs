const createInjectorsEnhancer = createInjectorsEnhancer({createReducer, runSaga});

createInjectorsEnhancer => 'Có 2 options'

createReducer => 'là 1 func được gọi để trả về rootReducer'
runSaga => 'sẽ không nói ở đây mà là phần redux-saga'

// example in redux-injector library
function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    ...injectedReducers,
    // other non-injected reducers can go here...
  });
  
  return rootReducer
 }
const enhancers = typeof window !== 'undefined' && process.env.REACT_APP_ENVIRONMENT !== 'development'
  ? window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__()
  : (f) => f;

enhancers => 'devtool with development'
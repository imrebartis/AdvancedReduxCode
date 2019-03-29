export default ({ dispatch }) => next => action => {
  // check to see if the action has a promise on its 'payload' property

  //if it doesn't, send the action on to the next middleware
  if (!action.payload || !action.payload.then) {
    return next(action);
  }

  //if it does, wait for it to resolve
  // get its data & then create a new action
  // with the data & dispatch it
  action.payload.then(function(response) {
    // take all the properties out of the action object
    // & overwrite the payload with whatever data came back
    const newAction = { ...action, payload: response };
    // send the new action thru the middlewares, but this time with data as payload & not the promise
    // so it will flow on to the reducers
    dispatch(newAction);
  });
};

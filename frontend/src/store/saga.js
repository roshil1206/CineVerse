import { all } from "redux-saga/effects";
// Import your sagas here (e.g., import someSaga from './someSaga');

function* rootSaga() {
  // Add your sagas here (e.g., someSaga)
  yield all([
    // Put your sagas here (e.g., someSaga())
  ]);
}

export default rootSaga;

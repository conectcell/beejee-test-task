import {put} from 'redux-saga/effects';

import {commonShowError, commonShowSuccess} from '../../actions/common-actions';

class HelperSaga {
  constructor(service) {
    this.service = service;
  }

  // region register - recover

  *errorMessageSaga({text}) {
    yield put(commonShowError(text));
  }

  *successMessageSaga({text}) {
    yield put(commonShowSuccess(text));
  }
}

export default HelperSaga;

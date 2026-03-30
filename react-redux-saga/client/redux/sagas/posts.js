import takeEvery from "redux-saga/es/internal/sagaHelpers/takeEvery";
import {call, put} from 'redux-saga/effects';
import axios from 'axios';

function* createPostAsync(action) {
  console.log('createPostAsync', action);
  try {
    const response = yield call(axios.post, 'https://jsonplaceholder.typicode.com/posts', {name: action.payload});
    console.log('CreatePost response', response);
    yield put({type: 'ADD_TO_LIST_SUCCEEDED', payload: response.data})
  } catch (e) {
    console.log('CreatePost response error', e);
    yield put({type: 'ADD_TO_LIST_FAILED', response: e.message})
  }
}

export function* addPostSaga() {
  yield takeEvery('ADD_TO_LIST', createPostAsync )
}

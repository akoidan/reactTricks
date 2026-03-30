import {addPostSaga} from "./posts";

export default function* rootSaga() {
  yield [addPostSaga()]
};
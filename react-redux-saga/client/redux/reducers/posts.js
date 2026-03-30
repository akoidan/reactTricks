export default function (state=[], action) {
  console.log('asd');
  if (action.type === "ADD_TO_LIST") {
    return [...state, action.payload]
  }
  if (action.type === "ADD_TO_LIST_SUCCEEDED") {
    return [...state, action.payload.name + " has been added"];
  }
  return state;
};

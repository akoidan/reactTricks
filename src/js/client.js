import store from "./store"
import React from "react"

import reactDom from "react-dom"
import {Provider} from "react-redux"
import Layout from "./components/Layout"


const app = document.getElementById('app')
reactDom.render(<Provider store={store}><Layout/></Provider>, app);

store.subscribe(() => {
  console.log("store changed", store.getState());
});

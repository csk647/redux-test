import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./redux/rootReducer"
import "./index.css";
import App from "./App";

const store = createStore(rootReducer)
//프로젝트 당 store는 하나. 상태를 저장하는 store. 첫번째 인자로 reducer
//createStore로 처음에 store 생성시 reducer가 init 액션으로 한번 불림 그다음 dispatch로 reducer불림

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <Provider store={createStore(rootReducer)}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );


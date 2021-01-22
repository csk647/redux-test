import { combineReducers } from "redux";
import plutoList from "../redux/reducer/reducer"
//여러개의 리듀서를 묶어주는 메소드
const rootReducer = combineReducers({
  plutoList,
});

export default rootReducer;

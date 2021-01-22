import {ADD_PERSON, NEW_LIST, CHANGE_MIHYEON, CHANGE_YOUNGGHANG, REMOVE_ONE_PERSON} from "../actions/actions";

const initialState = [
  {
    id: "skflk3ihg24",
    name: "미현님",
    description: "영광님 미현님은 톰과 제리?",
    where: {
      bootcamp: "위코드",
      house: "중랑",
    },
  },
  {
    id: "sdlkfjfgi48",
    name: "영광님",
    description: "미현님과 영광님은 톰과 제리?",
    where: {
      bootcamp: "위코드",
      house: "부천",
    },
  },
];

//순수함수 reducer는 state와 action을 받아 state를 변경한다.
export default function plutoList(state = initialState, action) {
  switch (action.type) {
    case ADD_PERSON:
      return [...state, action.payload];
    case NEW_LIST : 
      return action.payload;
    case CHANGE_MIHYEON:
      return [...state, action.payload];
    case CHANGE_YOUNGGHANG:
      return [...state, action.payload]
    case REMOVE_ONE_PERSON:
      const newState = state.filter((person) => person.name !== action.payload.name);
      return newState;
    default:
      return state;
  }
}

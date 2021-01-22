export const ADD_PERSON = "ADD_PERSON";
export const NEW_LIST = "NEW_LIST";
export const CHANGE_MIHYEON = "CHANGE_MIHYEON";
export const CHANGE_YOUNGGHANG = "CHANGE_YOUNGGHANG"
export const REMOVE_ONE_PERSON = "REMOVE_ONE_PERSON"
//action은 기본적으로 객체이다. 그래서 return할 때 객체로 return

export const addPerson = (info) => {
    console.log(info)
  return {
    type: ADD_PERSON,
    payload: info,
  };
};

export const newList = (personList) => {
    console.log(personList)
  return {
    type: NEW_LIST,
    payload: personList,
  };
};

export const changeMihyeon = (mihyeonInfo) => {
  return {
    type: CHANGE_MIHYEON,
    payload: mihyeonInfo,
  };
};

export const changeYoungghang = (youngghangInfo) => {
  return {
    type: CHANGE_YOUNGGHANG,
    payload: youngghangInfo,
  };
};

export const removeOnePerson = (name) => {
  return {
    type: REMOVE_ONE_PERSON,
    payload: name,
  };
};



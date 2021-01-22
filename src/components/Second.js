import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {newList, removeOnePerson} from "../redux/actions/actions";

const Second = () => {
  const dispatch = useDispatch();
  const personArray = useSelector((store) => store.plutoList);
  const [newListName, setNewListName] = useState();
  const [newListId, setNewListId] = useState();
  const [newListHouse, setNewListHouse] = useState();
  const [deleteName, setDeleteName] = useState();

  const handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    if (e.target.name === "삭제할 이름") {
      setDeleteName(e.target.value);
    } else if (e.target.name === "새로운 리스트 이름") {
      setNewListName(e.target.value);
    } else if (e.target.name === "새로운 리스트 id") {
      setNewListId(e.target.value);
    } else if (e.target.name === "새로운 리스트 house") {
      setNewListHouse(e.target.value);
    }
  };
  console.log(newListHouse)
  return (
    <>
      Second
      <div>적용되었나?</div>
      <div>
        <input
          type="string"
          placeholder="삭제할 이름"
          name="삭제할 이름"
          onChange={(e) => handleChange(e)}
          value={deleteName}
        />
        <input
          type="string"
          placeholder="새로운 리스트 이름"
          name="새로운 리스트 이름"
          onChange={(e) => handleChange(e)}
          value={newListName}
        />
        <input
          type="string"
          placeholder="새로운 리스트 id"
          name="새로운 리스트 id"
          onChange={(e) => handleChange(e)}
          value={newListId}
        />
        <input
          type="string"
          placeholder="새로운 리스트 house"
          name="새로운 리스트 house"
          onChange={(e) => handleChange(e)}
          value={newListHouse}
        />
      </div>
      <div>
        <div>
          {personArray.map((person) => (
            <>
              <div>{person?.id ? person.id : ""}</div>
              <div>{person?.name ? person.name : ""}</div>
              <div>{person?.where?.house ? person.where.house : ""}</div>
            </>
          ))}
        </div>
      </div>
      <button
      //dispatch로 액션을 보낸다
        onClick={() =>
          dispatch(
            removeOnePerson({
              name: deleteName,
            })
          )
        }>
        한사람 삭제하기
      </button>
      <button
        onClick={() =>
          dispatch(
           newList([
              {
                name: newListName,
                id: newListId,
                where: { house: newListHouse },
              },
            ])
          )
        }>
        새로운 리스트
      </button>
    </>
  );
};

export default Second;

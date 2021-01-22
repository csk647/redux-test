import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addPerson,
  changeYoungghang,
  changeMihyeon,
} from "../redux/actions/actions";

const First = () => {
  const dispatch = useDispatch();
  const personArray = useSelector((store) => store.plutoList);
  const [newName, setNewName] = useState();
  const [newId, setNewId] = useState();
  const [newHouse, setNewHouse] = useState();

  const handleChange = (e) => {
    if (e.target.name === "이름") {
      setNewName(e.target.value);
    } else if (e.target.name === "id") {
      setNewId(e.target.value);
    } else if (e.target.name === "집") {
      setNewHouse(e.target.value);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    fetch("/data/data.json").then((res) => res.json());
  };

  return (
    <>
      First
      <div>
        <input
          type="string"
          placeholder="이름"
          name="이름"
          onChange={(e) => handleChange(e)}
          value={newName}
        />
        <input
          type="string"
          placeholder="id"
          name="id"
          onChange={(e) => handleChange(e)}
          value={newId}
        />
        <input
          type="string"
          placeholder="house"
          name="집"
          onChange={(e) => handleChange(e)}
          value={newHouse}
        />
      </div>
      <div>
        {personArray.map((person) => (
          <>
            <div>{person?.id ? person.id : ""}</div>
            <div>{person?.name ? person.name : ""}</div>
            <div>{person?.where?.house ? person.where.house : ""}</div>
          </>
        ))}
      </div>
      <button
        onClick={() =>
          dispatch(
            addPerson({ name: newName, id: newId, where: { house: newHouse } })
          )
        }>
        사람 추가하기
      </button>
    </>
  );
};
export default First;

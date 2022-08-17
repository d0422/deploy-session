import React, { useRef } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
const Update = () => {
  const { state } = useLocation();
  const titleRef = useRef(null);
  const writerRef = useRef(null);
  const bodyRef = useRef(null);
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `https://doingdjango.herokuapp.com/${state.id}/update`,
        {
          title: titleRef.current.value,
          writer: writerRef.current.value,
          body: bodyRef.current.value,
        },
        {
          "Content-Type": "application/json",
        }
      )
      .then((res) => {
        res.data.ok ? alert("수정완료!") : alert("오류");
      });
    navigate("/");
  };
  return (
    <form>
      제목:{" "}
      <input
        type="text"
        ref={titleRef}
        defaultValue={state.detail.title}
      ></input>
      작성자:{" "}
      <input
        type="text"
        ref={writerRef}
        defaultValue={state.detail.writer}
      ></input>
      본문:
      <textarea
        cols="30"
        rows="10"
        ref={bodyRef}
        defaultValue={state.detail.body}
      ></textarea>
      <button type="submit" onClick={onSubmit}>
        submit
      </button>
    </form>
  );
};

export default Update;

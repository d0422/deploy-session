import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const titleRef = useRef(null);
  const writerRef = useRef(null);
  const bodyRef = useRef(null);
  const navigate = useNavigate();
  const onSubmit = () => {
    axios
      .post(
        "https://doingdjango.herokuapp.com/",
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
        if (res.data.ok) {
          alert("추가완료");
          navigate("/");
        }
      });
  };
  return (
    <>
      제목: <input type="text" ref={titleRef}></input>
      작성자: <input type="text" ref={writerRef}></input>
      본문:<textarea cols="30" rows="10" ref={bodyRef}></textarea>
      <button onClick={onSubmit}>submit</button>
    </>
  );
};

export default Create;

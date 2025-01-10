import axios from "axios";
import React, { useState, useEffect } from "react";

function DataFetching() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButton, setIdFromButton] = useState(1);

  const clickHandler = () => {
    setIdFromButton(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, [idFromButton]);
  return (
    <div>
      <div>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <button type="button" onClick={clickHandler}>
          Submit
        </button>
        {/* <ul style={{ listStyle: "disc", paddingLeft: "20px" }}>
          {post.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul> */}
        <div>{post.title}</div>
      </div>
    </div>
  );
}

export default DataFetching;

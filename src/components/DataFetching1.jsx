import React, { useState, useEffect } from "react";
import axios from "axios";
function DataFetching1() {
  const [post, setPost] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setLoading(false);
        setPost(response.data);
      })
      .catch((error) => {
        setLoading(false);
        setPost({});
        setError("Something went wrong");
      });
  }, []);
  return (
    <div>
      {loading ? "loading..." : post.title}
      {error ? "Something went wrong" : null}
    </div>
  );
}

export default DataFetching1;

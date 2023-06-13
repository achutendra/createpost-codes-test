import React, { useState } from "react";
import axios from "axios";

const NewPostForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/posts", {
        title,
        body,
        userId,
      });
      console.log("New post created:", response.data);
      // Reset the form inputs
      setTitle("");
      setBody("");
      setUserId("");
    } catch (error) {
      console.error("Failed to create post:", error);
    }
  };

  return (
    <>
      <div>
        <h2>Create New Post</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <input
            type="number"
            placeholder="User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <button type="submit">Create</button>
        </form>
      </div>
      <div>
        <h1 className="text-center">All Posts</h1>
      </div>
    </>
  );
};

export default NewPostForm;

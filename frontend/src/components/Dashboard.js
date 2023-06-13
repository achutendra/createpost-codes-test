import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/posts");
      setPosts(response.data);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="post-card-container">
        {posts.map((post) => (
          <div key={post._id} className="post-card">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p>User ID: {post.userId}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

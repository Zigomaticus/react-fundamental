import React, { useState } from "react";
// Components
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
// Css
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JS", body: "Description" },
    { id: 2, title: "Python", body: "very popelar" },
    { id: 3, title: "Php", body: "may be learn" },
  ]);

  function createPost(newPost) {
    setPosts([...posts, newPost]);
  }

  function removePost(post) {
    setPosts(posts.filter((p) => p.id !== post.id));
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostList remove={removePost} posts={posts} title="List of posts" />
    </div>
  );
}

export default App;

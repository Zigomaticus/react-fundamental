import React, { useMemo, useState } from "react";
// Components
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
// Css
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "1 ыыы 2", body: "ЫЫЫЫЫЫЫЫ" },
    { id: 2, title: "ддд 3", body: "ДДДДДДДД a" },
    { id: 3, title: "ччччч", body: "РРРРРРРРРР" },
  ]);

  const [filter, setFilter] = useState({ sort: "", query: "" });

  const sortedPosts = useMemo(() => {
    console.log("Sorted function is working");

    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [posts, filter.sort]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, sortedPosts]);

  function createPost(newPost) {
    setPosts([...posts, newPost]);
  }

  function removePost(post) {
    setPosts(posts.filter((p) => p.id !== post.id));
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {sortedAndSearchedPosts.length ? (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="List of posts"
        />
      ) : (
        <h1 style={{ textAlign: "center" }}>Posts is not defined!</h1>
      )}
    </div>
  );
}

export default App;

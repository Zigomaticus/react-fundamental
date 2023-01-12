import React, { useState, useEffect } from "react";
// Components
// import PostList from "./components/PostList";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/MyModal/MyModal";
import Loader from "../components/UI/Loader/Loader";
import Pagination from "../components/UI/pagination/Pagination";
// Hooks
import { usePosts } from "../hooks/usePost";
import { useFetching } from "../hooks/useFetching";
// API
import PostService from "../API/PostService";
// Utils
import { getPageCount } from "../utils/pages";
// Css
import MyButton from "../components/UI/button/MyButton";
// Css
import "../styles/App.css";

function Posts() {
  const [posts, setPosts] = useState([]);

  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  function createPost(newPost) {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  useEffect(() => {
    fetchPosts();
  }, [page]);

  function removePost(post) {
    setPosts(posts.filter((p) => p.id !== post.id));
  }

  function changePage(page) {
    setPage(page);
  }

  return (
    <div className="App">
      <MyButton style={{ marginTop: "30px" }} onClick={() => setModal(true)}>
        Create user
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <h1>What`s wrong! `${postError}`</h1>}
      {isPostLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Loader />
        </div>
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="List of posts"
        />
      )}
      <Pagination totalPages={totalPages} page={page} changePage={changePage} />
    </div>
  );
}

export default Posts;

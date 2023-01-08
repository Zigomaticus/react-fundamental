import React from "react";
// Components
import PostItem from "./PostItem";

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>Posts is not defined!</h1>;
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {posts.map((post, index) => (
        <PostItem
          number={index + 1}
          post={post}
          key={post.id}
          remove={remove}
        />
      ))}
    </>
  );
};

export default PostList;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// API
import PostService from "../API/PostService";
// Components
import Loader from "../components/UI/Loader/Loader";
// Hooks
import { useFetching } from "../hooks/useFetching";

const PostIdPage = () => {
  let { id } = useParams();

  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostService.getById(id);
    setPost(response.data);
    console.log(response.data);
  });

  const [fetchComments, isComLoading, comError] = useFetching(async () => {
    const response = await PostService.getCommentsById(id);
    setComments(response.data);
    console.log(response.data);
  });

  useEffect(() => {
    fetchPostById(post);
    fetchComments(post);
  }, []);

  return (
    <div>
      <h1>Page of post with ID = {id}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {post.id} - {post.title}
        </div>
      )}
      <h2>Comments:</h2>
      {isComLoading ? (
        <Loader />
      ) : (
        <div>
          {comments.map((comm) => (
            <div>
              <h4>{comm.email}</h4>
              <div>{comm.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostIdPage;

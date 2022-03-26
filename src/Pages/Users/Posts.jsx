import React from "react";
import { useParams, useNavigate } from "react-router-dom";


function Posts() {
  const [posts, setPosts] = React.useState([]);

  const params = useParams();

  const navigate = useNavigate();

  React.useEffect(() => {
    const renderPosts = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      const data = await res.json();

      setPosts(data)
    };
    renderPosts();
  }, [params.id]);

 const userPosts = posts.filter(post => post.userId == params.id)

  return (
    <div>
      <ul>
        {
          userPosts?.length > 0 &&
            userPosts?.map((post) => (
              <li key={post.id}>
                <div>
                  Title: {post.title}
                </div>
                <div>
                  Text: {post.body}
                </div>
                <button
                    onClick={() => navigate(`/comments/${post.id}`)}
                  >
                    Comments
                </button>
              </li>
            ))
        }
      </ul>
    </div>
  );
}
export default Posts;

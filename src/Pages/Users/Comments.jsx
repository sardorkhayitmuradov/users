import React from "react";
import { useParams } from "react-router-dom";

function Comments () {
    const params = useParams();

    const [comments , setComments] = React.useState();

    React.useEffect(() => {
        const renderComments = fetch(
            `https://jsonplaceholder.typicode.com/comments`
        )
            .then((res) => res.json())
            .then((data) => setComments(data));
    },[]);

    const postComments = comments?.filter(
        (comment) => comment.postId == params.postId
    );

    return (
        <div>
            <ul>
                {postComments?.length > 0 &&
                    postComments?.map((comment) =>(
                        <li>
                            <p>Title: {comment.name}</p>
                            <p>Text: {comment.body}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Comments;
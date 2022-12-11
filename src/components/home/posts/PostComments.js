import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { react } from "../../../APIs/APIs";

const PostComments = ({ comment, user, post, setComments }) => {
  const [currentUser, setCurrentUser] = useState(false);
  const [deletee, setDeletee] = useState(false)

  useEffect(() => {
    if (comment.userId._id === user._id) {
      setCurrentUser(true)
    };
  }, []);

  const handleDelete = () => {
    axios.delete(`${react}${post._id}/comment/${comment._id}/delete`)
      .then(res => {
        console.log(res.data);
        setDeletee(true);
        setComments(prev => prev - 1);
      });
  };

  return (
    <>
      {!deletee &&
        <div className="comment-card">
          <div className="comment-container">
            <div className="user-inf">
              <img className="avatar" src={comment.userId.avatar} alt="" />
              <Link to={`/profile/${comment.userId._id}`} className="names">
                <h3 className="fullName">{comment.userId.firstName} {comment.userId.lastName}</h3> <br />
                <span className="userName">@{comment.userId.username}</span>
              </Link>
            </div>
            <div className="post-body">
              <h4 className="cont">{comment.content}</h4>
            </div>
            <div className="commentBtn">
              <button className="like">like</button>
              {currentUser &&
                <button className="edit"> edit</button>
              }
              {currentUser && <button className="delete" onClick={handleDelete}>delete</button>}
            </div>
          </div>
        </div>
      }

    </>

  );
}

export default PostComments;

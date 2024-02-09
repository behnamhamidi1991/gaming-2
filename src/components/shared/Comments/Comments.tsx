import "./comments.css";
import { users } from "../../../userData";

const Comments = () => {
  return (
    <div className="comments">
      <div className="comments-top">
        <h4>Comments</h4>
        <p>
          Share your feedback with us about this post and tell us what you think{" "}
        </p>
      </div>
      <div className="comments-main">
        <form>
          <input type="text" placeholder="Enter your name ..." />
          <input type="email" placeholder="Enter your email ..." />
          <textarea placeholder="Write your comment here ..." />
          <button>Submit</button>
        </form>
      </div>
      <div className="comments-bottom">
        <div className="user-comments-box">
          {users.map((user) => (
            <div key={user.id} className="user-single-comment-box">
              <div className="comments-user-image">
                <img src={user.profileImage} alt="user-image" />
              </div>
              <div className="comments-user-content">
                <p>{user.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comments;

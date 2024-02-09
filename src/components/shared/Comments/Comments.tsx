import "./comments.css";

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
      <div className="comments-bottom"></div>
    </div>
  );
};

export default Comments;

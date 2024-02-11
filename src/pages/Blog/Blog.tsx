import "./blog.css";
import { blogPosts } from "../../blogData";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="blog-page">
      <div className="header">
        <h2>Blog Page</h2>
        <p>Read our top posts</p>
      </div>

      <div className="blog-page-container">
        {blogPosts.map((post) => {
          return (
            <div key={post.id} className="blog-page-post-box">
              <div className="blog-page-image-container">
                <img src={post.image} alt={post.title} />
              </div>

              <div className="blog-post-content-container">
                <h3>{post.title}</h3>
                <p>{post.text.substring(1, 299)} ...</p>
                <div className="blog-post-details"></div>
                <Link
                  to={`/blog/${post.id}`}
                  className="blog-post-details-read-more"
                >
                  Read More
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;

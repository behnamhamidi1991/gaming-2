import "./homepageblog.css";
import { blogPosts } from "../../../blogData";

const HomepageBlog = () => {
  return (
    <div className="homepage-blog">
      <div className="homepage-blog-header">
        <h2>Blog Page | News</h2>
        <p>
          Here you find the most interesting posts and news about the gaming
          world!
        </p>
      </div>

      <div className="homepage-blog-container">
        {blogPosts.map((post) => (
          <div key={post.id} className="post">
            <img src={post.image} alt={post.title} />
            <div className="blog-content">
              <h3>{post.title}</h3>
              <p>{post.text.substring(1, 223)} ...</p>
              <div className="post-info">
                <span>{post.date}</span>
                <span>{post.writer}</span>
                <span>{post.views}</span>
              </div>
              <div className="post-hashtags"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomepageBlog;

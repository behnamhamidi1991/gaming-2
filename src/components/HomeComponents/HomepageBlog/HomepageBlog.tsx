import "./homepageblog.css";
import { blogPosts } from "../../../blogData";
import { FaUser } from "react-icons/fa";
import { CgCalendarDates } from "react-icons/cg";
import { hashtags } from "../../../blogData";
import { useRef } from "react";
import { useInView } from "framer-motion";

const HomepageBlog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      className="homepage-blog"
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      <div className="homepage-blog-header">
        <h2>Blog Page | News</h2>
        <div className="ptext-wrapper">
          <p className="animation-text">
            Here you find the most interesting posts and news about the gaming
            world!
          </p>
        </div>
      </div>

      <div className="homepage-blog-container">
        {blogPosts.map((post) => (
          <div key={post.id} className="post">
            <img src={post.image} alt={post.title} />
            <div className="blog-content">
              <h3>{post.title}</h3>
              <p>
                {post.id === "1"
                  ? post.text.substring(1, 550)
                  : post.text.substring(1, 223)}{" "}
                ...
              </p>
              <div className="post-info">
                <span>
                  {" "}
                  <CgCalendarDates />
                  {post.date}
                </span>
                <span>
                  <FaUser />
                  {post.writer}
                </span>
                <span>Views: {post.views}</span>
              </div>
              <div className="post-hashtags">
                {hashtags.map((item) => (
                  <span key={item.id}>{item.hashtag}</span>
                ))}
              </div>

              <button className="blog-readmore-btn">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomepageBlog;

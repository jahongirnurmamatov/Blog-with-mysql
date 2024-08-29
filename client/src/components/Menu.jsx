import { useEffect, useState } from "react";
import "./menu.scss";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const Menu = ({ cat, postId }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/posts?cat=${cat}`
        );

        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [cat]);

  return (
    <div>
      <div className="menu">
        <h1>Other posts you may like</h1>
        {posts?.map((post) => (
          <div className="post" key={post.id}>
            {post.id !== postId ? (
              <>
                <img src={`/uploads/${post.img}`} alt="" />
                <h2>{post.title}</h2>
                <Link className="link" to={`/post/${post.id}`}>
                  <button>Read more</button>
                </Link>
              </>
            ) : (
              <></>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;

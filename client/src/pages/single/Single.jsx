import { useContext, useEffect, useState } from "react";
import Menu from "../../components/Menu";
import "./single.scss";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../../context/authContext";
const Single = () => {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const { currentUser } = useContext(AuthContext);
  console.log(id);
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/posts/${id}`);
        setPost(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPost();
  }, [id]);

  return (
    <div className="single">
      <div className="content">
        <img src={post?.img} alt="" />
        <div className="user">
          <img
            src={post?.userImg||'/user.png'}
            alt=""
          />
          <div className="info">
            <span>{post?.username}</span>
            <p>Posted {moment(post?.date).fromNow()}</p>
          </div>
          {currentUser.id === post?.uid && (
            <div className="edit">
              <div className="btn">
                <Link to={"/write?edit=2"}>
                  <img src="/edit.png" alt="" />
                </Link>
              </div>
              <div className="btn">
                <img src="/delete.png" alt="" />
              </div>
            </div>
          )}
        </div>
        <h1>{post?.title}</h1>
        <p>{post?.desc}</p>
      </div>
      <div className="menu">
        <Menu />
      </div>
    </div>
  );
};

export default Single;

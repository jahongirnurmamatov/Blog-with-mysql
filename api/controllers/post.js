import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const addPost = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtSecretKey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");
    const postId = req.params.id;
    const q =
      "INSERT INTO blog.posts (`title`,`descr`,`img`,`cat`,`date`,`uid`) VALUES (?)";

    const values = [
      req.body.title,
      req.body.desc,
      req.body.img,
      req.body.cat,
      req.body.date,
      userInfo.id,
    ];
    db.query(q, [values], (err, data) => {
      if (err) return res.status(403).json("You can delete your own post!");
      return res.status(200).json("Post created");
    });
  });
};
export const getPosts = (req, res) => {
  const q = req.query.cat
    ? "SELECT * FROM blog.posts WHERE cat = ?"
    : "SELECT * FROM blog.posts";
  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.res.status(500).json(err);
    return res.status(200).json(data);
  });
};
export const getPost = (req, res) => {
  const id = req.params.id;
  const q =
    "SELECT `username`, p.id AS postId, `title`, `descr`, p.img, u.img AS userImg, `cat`, `date` FROM blog.users AS u JOIN blog.posts AS p on u.id=p.uid WHERE p.id=?";
  db.query(q, [id], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data[0]);
  });
};
export const deletePost = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtSecretKey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");
    const postId = req.params.id;
    const q = "DELETE from blog.posts WHERE `id`=? AND `uid`=?";

    db.query(q, [postId, userInfo.id], (err, data) => {
      if (err) return res.status(403).json("You can delete your own post!");
      return res.status(200).json("Post removed");
    });
  });
};
export const updatePost = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtSecretKey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");

    const postId = req.params.id;
    const q = `
      UPDATE blog.posts 
      SET title = ?, descr = ?, cat = ?, img = ? 
      WHERE id = ? AND uid = ?`;
    
    console.log(postId, userInfo.id);

    const values = [req.body.title, req.body.desc, req.body.cat, req.body.img];

    db.query(q, [...values, postId, userInfo.id], (err, data) => {
      if (err) return res.status(500).json("Internal server error!");
      if (data.affectedRows > 0) {
        return res.status(200).json("Post updated successfully");
      } else {
        return res.status(404).json("Post not found or user not authorized");
      }
    });
  });
};

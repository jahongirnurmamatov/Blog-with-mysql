import { db } from "../db.js";

export const addPost = (req, res) => {};
export const getPosts = (req, res) => {
  const q = req.query.cat
    ? "SELECT * FROM blog.posts WHERE cat = ?"
    : "SELECT * FROM blog.posts";
  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};
export const getPost = (req, res) => {
  const id = req.params.id;
  const q =
    "SELECT `username`, `title`, `desc`, p.img, u.img AS userImg, `cat`, `date` FROM blog.users AS u JOIN blog.posts AS p on u.id=p.uid WHERE p.id=?";
  db.query(q, [id], (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data[0]);
  });
};
export const deletePost = (req, res) => {
    const q = "DELETE from blog.posts WHERE id=?";
    db.query(q,[req.params.id],(err,data)=>{
        if (err) return res.json(err);
        return res.status(200).json('Post removed') ;
    })
};
export const updatePost = (req, res) => {};

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
export const getPost = (req, res) => {};
export const deletePost = (req, res) => {};
export const updatePost = (req, res) => {};

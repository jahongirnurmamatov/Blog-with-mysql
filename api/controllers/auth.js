import { db } from "../db.js";
import bcyrpt from "bcryptjs";

export const login = (req, res) => {

};
export const register = (req, res) => {
  //check existing user
  const  q = "SELECT * FROM users WHERE email = ? OR username = ?";
  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.status(401).json(err);
    if (data.length) return res.status(409).json("User already exists!");

    const salt = bcyrpt.genSaltSync(10);
    const hashedPass = bcyrpt.hashSync(req.body.password, salt);

    const q = 'INSERT INTO blog.users (`email`,`password`,`username`) VALUES (?)';

    const values=[
        req.body.email,
        hashedPass,
        req.body.username
    ];
    db.query(q,[values],(err,data)=>{
        if (err) return res.status(401).json(err);
        return res.status(200).json('User has been created!');
    })
  });
};
export const logout = (req, res) => {};

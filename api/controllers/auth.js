import { db } from "../db.js";
import bcyrpt from "bcryptjs";
import jwt from "jsonwebtoken";

export const login = (req, res) => {
  const q = "SELECT * FROM blog.users WHERE `username` = ?";
  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(401).json(err);
    if (data.length === 0) return res.status(404).json("User not found!");
    //check password

    const isPassMatch = bcyrpt.compareSync(req.body.password, data[0].password);

    if (!isPassMatch) return res.status(403).json("Wrong username or password");

    const { password, ...info } = data[0];

    const token = jwt.sign({ id: data[0].id }, "jwtSecretKey");

    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .json(info);
  });
};
export const register = (req, res) => {
  //check existing user
  const q = "SELECT * FROM users WHERE email = ? OR username = ?";
  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.status(401).json(err);
    if (data.length) return res.status(409).json("User already exists!");

    const salt = bcyrpt.genSaltSync(10);
    const hashedPass = bcyrpt.hashSync(req.body.password, salt);

    const q =
      "INSERT INTO blog.users (`email`,`password`,`username`) VALUES (?)";

    const values = [req.body.email, hashedPass, req.body.username];
    db.query(q, [values], (err, data) => {
      if (err) return res.status(401).json(err);
      return res.status(200).json("User has been created!");
    });
  });
};
export const logout = (req, res) => {
  res
    .clearCookie("accessToken", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json("User logged out");
};

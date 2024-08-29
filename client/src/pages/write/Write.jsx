import { useState } from "react";
import "./write.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from 'axios';

const Write = () => {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [cat, setCat] = useState("");
  const [img, setImg] = useState(null);
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const imgUrl= await upload();
    try {
      
    } catch (error) {
      console.log(error);
    }
  }

  const upload = async()=>{
    try {
      const formData=new FormData();
      formData.append("file",img);
      const res= await axios.post('http://localhost:8000/api/upload',formData);
      return res.data;
   
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="Title"  onChange={(e)=>setTitle(e.target.value)}/>
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status:</b> Draft
          </span>
          <span>
            <b>Visibility:</b> Public
          </span>
          <input type="file" id="file" style={{ display: "none" }} onChange={(e)=>setImg(e.target.files[0])}/>
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button onClick={handleSubmit}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat" >
            <input type="radio" id="art" name="cat" value="art" onChange={(e)=>setCat(e.target.value)}/>
            <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
            <input type="radio" id="science" name="cat" value="science" onChange={(e)=>setCat(e.target.value)}/>
            <label htmlFor="science">Science</label>
          </div>
          <div className="cat">
            <input type="radio" id="technology" name="cat" value="technology" onChange={(e)=>setCat(e.target.value)}/>
            <label htmlFor="technology">Technology</label>
          </div>
          <div className="cat">
            <input type="radio" id="cinema" name="cat" value="cinema" onChange={(e)=>setCat(e.target.value)}/>
            <label htmlFor="cinema">Cinema</label>
          </div>
          <div className="cat">
            <input type="radio" id="design" name="cat" value="design" onChange={(e)=>setCat(e.target.value)}/>
            <label htmlFor="design">Design</label>
          </div>
          <div className="cat">
            <input type="radio" id="food" name="cat" value="food" onChange={(e)=>setCat(e.target.value)}/>
            <label htmlFor="food">Food</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;

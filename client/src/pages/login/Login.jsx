import { Link, useNavigate } from 'react-router-dom'
import './login.scss'
import { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/authContext';


const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const {login}=useContext(AuthContext);
  const [err, setErr] = useState(null);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (error) {
      setErr(error.response.data);
    }
  };

  return (
    <div className='auth'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='username' name='username' onChange={handleChange}/>
        <input type="password" placeholder='password' name='password' onChange={handleChange}/>
        <button >Login</button>
        {err && <p>{err}</p>}
        <span>Don't you have an accout? <Link style={{textDecoration:'none'}} to={'/register'}>Register</Link></span>
      </form>
    </div>
  )
}

export default Login
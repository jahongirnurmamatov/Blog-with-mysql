import { Link } from 'react-router-dom'
import './login.scss'

const Register = () => {
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form >
        <input type="text" placeholder='Username' required/>
        <input type="text" placeholder='Email' required/>
        <input type="password" placeholder='Password' required/>
        <button >Register</button>
        <p>Error message</p>
        <span>Don't you have an accout? <Link style={{textDecoration:'none'}} to={'/register'}>Login</Link></span>
      </form>
    </div>
  )
}

export default Register
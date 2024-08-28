import { Link } from 'react-router-dom'
import './login.scss'

const Login = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form >
        <input type="text" placeholder='username' />
        <input type="password" placeholder='password' />
        <button >Login</button>
        <p>Error message</p>
        <span>Don't you have an accout? <Link style={{textDecoration:'none'}} to={'/register'}>Register</Link></span>
      </form>
    </div>
  )
}

export default Login
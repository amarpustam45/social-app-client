import './login.scss';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };

  return (
    <div className='login'>
      <div className='card'>
        <div className='left'>
          <h1>Social App</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            omnis cupiditate nesciunt dolores esse enim facere a repellat libero
            id!
          </p>
          <span>Don't have an account?</span>
          <Link to='/register'>
            <button>Register</button>
          </Link>
        </div>
        <div className='right'>
          <h1>Login</h1>
          <form>
            <input type='text' name='username' id='' placeholder='Username' />
            <input
              type='password'
              name='password'
              id=''
              placeholder='Password'
            />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

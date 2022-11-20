import './register.scss';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='register'>
      <div className='card'>
        <div className='left'>
          <h1>Register</h1>
          <form>
            <input type='text' name='username' id='' placeholder='Username' />
            <input type='email' name='email' id='' placeholder='Email' />
            <input type='text' name='name' id='' placeholder='Name' />
            <input
              type='password'
              name='password'
              id=''
              placeholder='Password'
            />
            <button>Register</button>
          </form>
        </div>
        <div className='right'>
          <h1>Social App</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            omnis cupiditate nesciunt dolores esse enim facere a repellat libero
            id!
          </p>
          <span>Already have an account?</span>
          <Link to='/login'>
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;

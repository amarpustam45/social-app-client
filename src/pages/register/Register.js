import './register.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { makeRequest } from '../../axios.js';

const Register = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    name: '',
    password: '',
  });

  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await makeRequest.post('/auth/register', inputs);
      navigate('/login');
    } catch (error) {
      setErr(error.response.data);
    }
  };

  console.log(err);

  return (
    <div className='register'>
      <div className='card'>
        <div className='left'>
          <h1>Register</h1>
          <form>
            <input
              type='text'
              name='username'
              placeholder='Username'
              onChange={handleChange}
            />
            <input
              type='email'
              name='email'
              placeholder='Email'
              onChange={handleChange}
            />
            <input
              type='text'
              name='name'
              placeholder='Name'
              onChange={handleChange}
            />
            <input
              type='password'
              name='password'
              placeholder='Password'
              onChange={handleChange}
            />
            {err && <div className='errorMsg'>{err}</div>}
            <button onClick={handleSubmit}>Register</button>
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

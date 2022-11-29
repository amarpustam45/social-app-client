import './navbar.scss';
import {
  AiOutlineHome,
  AiOutlineAppstore,
  AiOutlineMail,
  AiOutlineSearch,
  AiOutlineBell,
} from 'react-icons/ai';
import { FiMoon, FiSun } from 'react-icons/fi';
import { IoPersonOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
import { AuthContext } from '../../context/authContext';
import { CloudinaryDisplay } from '../cloudinary/Cloudinary';

const Navbar = () => {
  const { darkMode, toggle } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className='navbar'>
      <div className='left'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span>SocialDemo</span>
        </Link>
        <AiOutlineHome />
        {darkMode ? <FiSun onClick={toggle} /> : <FiMoon onClick={toggle} />}
        <AiOutlineAppstore />
        <div className='search'>
          <AiOutlineSearch />
          <input type='text' placeholder='Search...' />
        </div>
      </div>

      <div className='right'>
        <IoPersonOutline />
        <AiOutlineMail />
        <AiOutlineBell />
        <div className='user'>
          <CloudinaryDisplay image={currentUser.profilePic} />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

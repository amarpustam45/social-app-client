import './navbar.scss';
import {
  AiOutlineHome,
  AiOutlineAppstore,
  AiOutlineMail,
  AiOutlineSearch,
  AiOutlineBell,
} from 'react-icons/ai';
import { FiMoon } from 'react-icons/fi';
import { IoPersonOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='left'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span>SocialDemo</span>
        </Link>
        <AiOutlineHome />
        <FiMoon />
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
          <img
            src='https://media.istockphoto.com/id/1286272331/photo/beauty-portrait-of-young-asian-woman-on-the-light-and-shadow-background.jpg?b=1&s=612x612&w=0&k=20&c=Sq04NCS9ya5LRUh9ng_Y4BK3XrOZyGabA5eQ9qUoiFg='
            alt=''
          />
          <span>John Doe</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import './profile.scss';
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagram,
  FaPinterestSquare,
  FaTwitter,
} from 'react-icons/fa';

import {
  MdOutlinePlace,
  MdLanguage,
  MdOutlineEmail,
  MdOutlineMoreVert,
} from 'react-icons/md';
import Posts from '../../components/posts/Posts';

const Profile = () => {
  return (
    <div className='profile'>
      <div className='images'>
        <img
          src='https://images.pexels.com/photos/207636/pexels-photo-207636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
          className='cover'
        />
        <img
          src='https://images.pexels.com/users/avatars/447505/dids-186.jpeg?auto=compress&fit=crop&h=130&w=130&dpr=1'
          alt=''
          className='profilePic'
        />
      </div>
      <div className='profileContainer'>
        <div className='uInfo'>
          <div className='left'>
            <a href='https://www.facebook.com/'>
              <FaFacebookSquare />
            </a>
            <a href='https://www.instagram.com/'>
              <FaInstagram />
            </a>
            <a href='https://www.twitter.com/'>
              <FaTwitter />
            </a>
            <a href='https://www.linkedin.com/'>
              <FaLinkedin />
            </a>
            <a href='https://www.pinterest.com/'>
              <FaPinterestSquare />
            </a>
          </div>

          <div className='center'>
            <span>Jane Doe</span>
            <div className='info'>
              <div className='item'>
                <MdOutlinePlace />
                <span>TT</span>
              </div>
              <div className='item'>
                <MdLanguage />
                <span>English</span>
              </div>
            </div>
            <button>Follow</button>
          </div>

          <div className='right'>
            <MdOutlineEmail />
            <MdOutlineMoreVert />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
};

export default Profile;

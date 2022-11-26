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
import { useQuery } from '@tanstack/react-query';
import { makeRequest } from '../../axios';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

const Profile = () => {
  const { currentUser } = useContext(AuthContext);

  const userId = useLocation().pathname.split('/')[2];
  console.log(userId);
  const { isLoading, error, data } = useQuery({
    queryKey: ['user'],
    queryFn: () =>
      makeRequest.get('/users/find/' + userId).then((res) => {
        return res.data;
      }),
  });

  return (
    <div className='profile'>
      {isLoading ? (
        'loading'
      ) : (
        <>
          <div className='images'>
            <img src={data.coverPic} alt='' className='cover' />
            <img src={data.profilePic} alt='' className='profilePic' />
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
                <span>{data.name}</span>
                <div className='info'>
                  <div className='item'>
                    <MdOutlinePlace />
                    <span>{data.city}</span>
                  </div>
                  <div className='item'>
                    <MdLanguage />
                    <span>
                      <a href={data.website} target='blank'>
                        website
                      </a>
                    </span>
                  </div>
                </div>
                {data.id === currentUser.id ? (
                  <button>Update</button>
                ) : (
                  <button>Follow</button>
                )}
              </div>

              <div className='right'>
                <MdOutlineEmail />
                <MdOutlineMoreVert />
              </div>
            </div>
            <Posts />
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;

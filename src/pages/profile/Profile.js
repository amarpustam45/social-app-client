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
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { makeRequest } from '../../axios';
import { useLocation } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';
import Update from '../../components/update/Update';
import { CloudinaryDisplay } from '../../components/cloudinary/Cloudinary';

const Profile = () => {
  const [openUpdate, setOpenUpdate] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const userId = useLocation().pathname.split('/')[2];

  const { isLoading, error, data } = useQuery({
    queryKey: ['user'],
    queryFn: () =>
      makeRequest.get('/users/find/' + userId).then((res) => {
        return res.data;
      }),
  });

  const { isLoading: relLoading, data: relationshipData } = useQuery({
    queryKey: ['relationships'],
    queryFn: () =>
      makeRequest.get('/relationships?followedUserId=' + userId).then((res) => {
        return res.data;
      }),
  });

  // Access the client
  const queryClient = useQueryClient();

  // Mutations
  const mutation = useMutation(
    (followed) => {
      if (followed)
        return makeRequest.delete('/relationships?userId=' + userId);
      return makeRequest.post('/relationships', { userId });
    },
    {
      // mutationFn: postTodo,
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries({ queryKey: ['relationships'] });
      },
    }
  );

  const handleFollow = () => {
    mutation.mutate(relationshipData.includes(currentUser.id));
  };

  return (
    <div className='profile'>
      {isLoading ? (
        'loading'
      ) : (
        <>
          <div className='images'>
            <div className='cover'>
              <CloudinaryDisplay image={data.coverPic} />
            </div>
            <div className='profilePic'>
              <CloudinaryDisplay image={data.profilePic} />
            </div>
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
                {relLoading ? (
                  'Follow'
                ) : data.id === currentUser.id ? (
                  <button onClick={() => setOpenUpdate(!openUpdate)}>
                    Update
                  </button>
                ) : (
                  <button onClick={handleFollow}>
                    {relationshipData.includes(currentUser.id)
                      ? 'Following'
                      : 'Follow'}
                  </button>
                )}
              </div>

              <div className='right'>
                <MdOutlineEmail />
                <MdOutlineMoreVert />
              </div>
            </div>
            <Posts userId={userId} />
          </div>
        </>
      )}
      {openUpdate && <Update setOpenUpdate={setOpenUpdate} />}
    </div>
  );
};

export default Profile;

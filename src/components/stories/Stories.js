import './stories.scss';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import { CloudinaryDisplay } from '../cloudinary/Cloudinary';

const Stories = () => {
  //temporary data
  const stories = [
    {
      id: 1,
      name: 'Jane Doe',
      img: 'https://images.pexels.com/photos/11172946/pexels-photo-11172946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      name: 'Jane Doe',
      img: 'https://images.pexels.com/photos/11172946/pexels-photo-11172946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      name: 'Jane Doe',
      img: 'https://images.pexels.com/photos/11172946/pexels-photo-11172946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 4,
      name: 'Jane Doe',
      img: 'https://images.pexels.com/photos/11172946/pexels-photo-11172946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 5,
      name: 'Jane Doe',
      img: 'https://images.pexels.com/photos/11172946/pexels-photo-11172946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  const { currentUser } = useContext(AuthContext);

  return (
    <div className='stories'>
      <div className='story'>
        <CloudinaryDisplay image={currentUser.profilePic} />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.slice(0, 4).map((story) => {
        return (
          <div className='story' key={story.id}>
            <img src={story.img} alt='' />
            <span>{story.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Stories;

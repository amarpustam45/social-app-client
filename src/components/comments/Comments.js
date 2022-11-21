import './comments.scss';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
const Comments = () => {
  //temp
  const comments = [
    {
      id: 1,
      name: 'Jane Doe',
      userId: 1,
      profilePic:
        'https://media.istockphoto.com/id/1286272331/photo/beauty-portrait-of-young-asian-woman-on-the-light-and-shadow-background.jpg?b=1&s=612x612&w=0&k=20&c=Sq04NCS9ya5LRUh9ng_Y4BK3XrOZyGabA5eQ9qUoiFg=',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, quos aliquam eligendi reprehenderit aliquid magni nihil quia ea reiciendis quibusdam?',
    },
    {
      id: 2,
      name: 'Jane Doe',
      userId: 1,
      profilePic:
        'https://media.istockphoto.com/id/1286272331/photo/beauty-portrait-of-young-asian-woman-on-the-light-and-shadow-background.jpg?b=1&s=612x612&w=0&k=20&c=Sq04NCS9ya5LRUh9ng_Y4BK3XrOZyGabA5eQ9qUoiFg=',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, quos aliquam eligendi reprehenderit aliquid magni nihil quia ea reiciendis quibusdam?',
    },
  ];

  const { currentUser } = useContext(AuthContext);
  return (
    <div className='comments'>
      <div className='write'>
        <img src={currentUser.profilePic} alt='' />
        <input type='text' placeholder='Write a comment...' />
        <button>Send</button>
      </div>
      {comments.map((comment) => {
        return (
          <div className='comment'>
            <img src={comment.profilePic} alt='' />
            <div className='info'>
              <span>{comment.name}</span>
              <p>{comment.desc}</p>
            </div>
            <span className='date'>1 hour ago</span>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;

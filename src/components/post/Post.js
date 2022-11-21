import './post.scss';
import {
  MdOutlineFavoriteBorder,
  MdOutlineTextsms,
  MdOutlineFavorite,
  MdOutlineShare,
  MdOutlineMoreHoriz,
} from 'react-icons/md';

import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  //temp
  const liked = false;

  return (
    <div className='post'>
      <div className='container'>
        <div className='user'>
          <div className='userInfo'>
            <img src={post.profilePic} alt='' />
            <div className='details'>
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <span className='name'>{post.name}</span>
              </Link>
              <span className='date'>1 min ago</span>
            </div>
          </div>
          <MdOutlineMoreHoriz />
        </div>
        <div className='content'>
          <p>{post.desc}</p>
          <img src={post.img} alt='' />
        </div>
        <div className='info'>
          <div className='item'>
            {liked ? <MdOutlineFavorite /> : <MdOutlineFavoriteBorder />}
            12 likes
          </div>
          <div className='item'>
            <MdOutlineTextsms />
            Comment
          </div>
          <div className='item'>
            <MdOutlineShare />
            Share
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

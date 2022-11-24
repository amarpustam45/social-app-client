import './post.scss';
import {
  MdOutlineFavoriteBorder,
  MdOutlineTextsms,
  MdOutlineFavorite,
  MdOutlineShare,
  MdOutlineMoreHoriz,
} from 'react-icons/md';
import { Link } from 'react-router-dom';
import Comments from '../comments/Comments';
import { useState } from 'react';
import { CloudinaryDisplay } from '../cloudinary/Cloudinary';
import moment from 'moment';

const Post = ({ post }) => {
  //temp
  const liked = false;

  const [commentOpen, setCommentOpen] = useState(false);

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
              <span className='date'>{moment(post.createdAt).fromNow()}</span>
            </div>
          </div>
          <MdOutlineMoreHoriz />
        </div>
        <div className='content'>
          <p>{post.desc}</p>
          {post.img && <CloudinaryDisplay image={post.img} />}
        </div>
        <div className='info'>
          <div className='item'>
            {liked ? <MdOutlineFavorite /> : <MdOutlineFavoriteBorder />}
            12 likes
          </div>
          <div className='item' onClick={() => setCommentOpen(!commentOpen)}>
            <MdOutlineTextsms />
            Comment
          </div>
          <div className='item'>
            <MdOutlineShare />
            Share
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  );
};

export default Post;

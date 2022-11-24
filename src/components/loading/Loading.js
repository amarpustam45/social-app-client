import {
  MdOutlineFavoriteBorder,
  MdOutlineMoreHoriz,
  MdOutlineShare,
  MdOutlineTextsms,
} from 'react-icons/md';
import './loading.scss';

const Loading = () => {
  return (
    <div className='loading'>
      <div className='container'>
        <div className='user'>
          <div className='userInfo'>
            <div className='img skeleton' />
            <div className='details'>
              <span className='name skeleton' />
              <span className='date skeleton' />
            </div>
          </div>
          <MdOutlineMoreHoriz />
        </div>
        <div className='content'>
          <p className='skeleton'></p>
          <p className='skeleton'></p>
          <p className='skeleton'></p>
        </div>
        <div className='info'>
          <div className='item'>
            <MdOutlineFavoriteBorder />
            Likes
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

export default Loading;

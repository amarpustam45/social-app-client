import './rightbar.scss';

const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className='container'>
        <div className='item'>
          <span>Suggestions for you</span>
          <div className='user'>
            <div className='userinfo'>
              <img
                src='https://images.pexels.com/photos/5795034/pexels-photo-5795034.jpeg?auto=compress&cs=tinysrgb&w=300'
                alt=''
              />
              <span>Jane Doe</span>
            </div>
            <div className='buttons'>
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>

          <div className='user'>
            <div className='userinfo'>
              <img
                src='https://images.pexels.com/photos/5795034/pexels-photo-5795034.jpeg?auto=compress&cs=tinysrgb&w=300'
                alt=''
              />
              <span>Jane Doe</span>
            </div>
            <div className='buttons'>
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>

        <div className='item'>
          <span>Latest Activities</span>
          <div className='user'>
            <div className='userinfo'>
              <img
                src='https://images.pexels.com/photos/5795034/pexels-photo-5795034.jpeg?auto=compress&cs=tinysrgb&w=300'
                alt=''
              />
              <p>
                <span>Jane Doe</span> changed their profile picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className='user'>
            <div className='userinfo'>
              <img
                src='https://images.pexels.com/photos/5795034/pexels-photo-5795034.jpeg?auto=compress&cs=tinysrgb&w=300'
                alt=''
              />
              <p>
                <span>Jane Doe</span> changed their profile picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className='user'>
            <div className='userinfo'>
              <img
                src='https://images.pexels.com/photos/5795034/pexels-photo-5795034.jpeg?auto=compress&cs=tinysrgb&w=300'
                alt=''
              />
              <p>
                <span>Jane Doe</span> changed their profile picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>

        <div className='item'>
          <span>Online Friends</span>
          <div className='user'>
            <div className='userinfo'>
              <img
                src='https://images.pexels.com/photos/5795034/pexels-photo-5795034.jpeg?auto=compress&cs=tinysrgb&w=300'
                alt=''
              />
              <div className='online' />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className='user'>
            <div className='userinfo'>
              <img
                src='https://images.pexels.com/photos/5795034/pexels-photo-5795034.jpeg?auto=compress&cs=tinysrgb&w=300'
                alt=''
              />
              <div className='online' />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className='user'>
            <div className='userinfo'>
              <img
                src='https://images.pexels.com/photos/5795034/pexels-photo-5795034.jpeg?auto=compress&cs=tinysrgb&w=300'
                alt=''
              />
              <div className='online' />
              <span>Jane Doe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;

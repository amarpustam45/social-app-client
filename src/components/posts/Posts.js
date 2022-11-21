import Post from '../post/Post';
import './posts.scss';

const Posts = () => {
  //temp data
  const posts = [
    {
      id: 1,
      name: 'Jane Doe',
      userId: 1,
      profilePic:
        'https://media.istockphoto.com/id/1286272331/photo/beauty-portrait-of-young-asian-woman-on-the-light-and-shadow-background.jpg?b=1&s=612x612&w=0&k=20&c=Sq04NCS9ya5LRUh9ng_Y4BK3XrOZyGabA5eQ9qUoiFg=',
      img: 'https://images.pexels.com/photos/11172946/pexels-photo-11172946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
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
  return (
    <div className='posts'>
      {posts.map((post) => {
        return <Post post={post} key={post.id} />;
      })}
    </div>
  );
};

export default Posts;

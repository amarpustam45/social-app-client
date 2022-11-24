import Post from '../post/Post';
import Loading from '../loading/Loading';
import './posts.scss';
import { useQuery } from '@tanstack/react-query';
import { makeRequest } from '../../axios';

const Posts = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['posts'],
    queryFn: () =>
      makeRequest.get('/posts').then((res) => {
        return res.data;
      }),
  });

  return (
    <div className='posts'>
      {error ? (
        'An error occured, reload the page'
      ) : isLoading ? (
        <Loading />
      ) : (
        data.map((post) => {
          return <Post post={post} key={post.id} />;
        })
      )}
    </div>
  );
};

export default Posts;

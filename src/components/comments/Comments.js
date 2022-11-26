import './comments.scss';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { makeRequest } from '../../axios';
import moment from 'moment';

const Comments = ({ postId }) => {
  const { currentUser } = useContext(AuthContext);
  const [desc, setDesc] = useState('');

  const { isLoading, error, data } = useQuery({
    queryKey: ['comments', postId],
    queryFn: () =>
      makeRequest.get('/comments?postId=' + postId).then((res) => {
        return res.data;
      }),
  });

  // Access the client
  const queryClient = useQueryClient();

  // Mutations
  const mutation = useMutation(
    (newComment) => {
      return makeRequest.post('/comments', newComment);
    },
    {
      // mutationFn: postTodo,
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries({ queryKey: ['comments'] });
        setDesc('');
      },
    }
  );

  const handleClick = async (e) => {
    e.preventDefault();
    mutation.mutate({ desc, postId });
  };

  return (
    <div className='comments'>
      <div className='write'>
        <img src={currentUser.profilePic} alt='' />
        <input
          type='text'
          placeholder='Write a comment...'
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
        />
        <button onClick={handleClick}>Send</button>
      </div>
      {isLoading
        ? 'Loading...'
        : data.map((comment) => {
            return (
              <div className='comment' key={comment.id}>
                <img src={comment.profilePic} alt='' />
                <div className='info'>
                  <span>{comment.name}</span>
                  <p>{comment.desc}</p>
                </div>
                <span className='date'>
                  {moment(comment.createdAt).fromNow()}
                </span>
              </div>
            );
          })}
    </div>
  );
};

export default Comments;

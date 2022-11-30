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
import { useContext, useState } from 'react';
import { CloudinaryDisplay } from '../cloudinary/Cloudinary';
import moment from 'moment';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { makeRequest } from '../../axios';
import { AuthContext } from '../../context/authContext';

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const { isLoading, error, data } = useQuery({
    queryKey: ['likes', post.id],
    queryFn: () =>
      makeRequest.get('/likes?postId=' + post.id).then((res) => {
        return res.data;
      }),
  });

  // Access the client
  const queryClient = useQueryClient();

  // Mutations
  const mutation = useMutation(
    (liked) => {
      if (liked) return makeRequest.delete('/likes?postId=' + post.id);
      return makeRequest.post('/likes', { postId: post.id });
    },
    {
      // mutationFn: postTodo,
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries({ queryKey: ['likes'] });
      },
    }
  );

  const deleteMutation = useMutation(
    (postId) => {
      return makeRequest.delete('/posts/' + postId);
    },
    {
      // mutationFn: postTodo,
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries({ queryKey: ['posts'] });
      },
    }
  );

  const handleLike = () => {
    mutation.mutate(data.includes(currentUser.id));
  };

  const handleDelete = () => {
    deleteMutation.mutate(post.id);
  };

  return (
    <div className='post'>
      <div className='container'>
        <div className='user'>
          <div className='userInfo'>
            <CloudinaryDisplay image={post.profilePic} />
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
          <MdOutlineMoreHoriz
            onClick={() => setMenuOpen(!menuOpen)}
            className='more'
          />
          {menuOpen && post.userId === currentUser.id && (
            <button onClick={handleDelete}>Delete</button>
          )}
        </div>
        <div className='content'>
          <p>{post.desc}</p>
          {post.img && <CloudinaryDisplay image={post.img} />}
        </div>
        <div className='info'>
          <div className='item'>
            {isLoading ? (
              'loading'
            ) : data.includes(currentUser.id) ? (
              <MdOutlineFavorite
                style={{ color: 'red' }}
                onClick={handleLike}
              />
            ) : (
              <MdOutlineFavoriteBorder onClick={handleLike} />
            )}
            {isLoading ? '0' : data.length} likes
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
        {commentOpen && <Comments postId={post.id} />}
      </div>
    </div>
  );
};

export default Post;

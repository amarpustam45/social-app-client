import { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';
import Image from '../../assets/img.png';
import Map from '../../assets/map.png';
import Friend from '../../assets/friend.png';
import './share.scss';
import { makeRequest } from '../../axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CloudinaryDisplay } from '../cloudinary/Cloudinary';

const Share = () => {
  // Access the client
  const queryClient = useQueryClient();

  // Mutations
  const mutation = useMutation(
    (newPost) => {
      return makeRequest.post('/posts', newPost);
    },
    {
      // mutationFn: postTodo,
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries({ queryKey: ['posts'] });
        setFile(null);
        setDesc('');
      },
    }
  );

  const { currentUser } = useContext(AuthContext);

  const [file, setFile] = useState(null);
  const [desc, setDesc] = useState('');

  const handleClick = async (e) => {
    e.preventDefault();

    if (file) {
      const imgUrl = await uploadImage(file);
      mutation.mutate({ desc, img: imgUrl });
    } else {
      mutation.mutate({ desc, img: '' });
    }
  };

  const handleFile = (e) => {
    const tempFile = e.target.files[0];
    previewFile(tempFile);
  };

  const previewFile = (tempFile) => {
    const reader = new FileReader();
    reader.readAsDataURL(tempFile);
    reader.onloadend = () => {
      setFile(reader.result);
    };
  };

  const uploadImage = async (base64Image) => {
    try {
      const data = JSON.stringify(base64Image);
      const res = await makeRequest.post('/uploadImage/post', { data });
      return res.data;
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div className='share'>
      <div className='container'>
        <div className='top'>
          <div className='left'>
            <CloudinaryDisplay image={currentUser.profilePic} />
            <input
              type='text'
              placeholder={`What's on your mind ${currentUser.name}?`}
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
            />
          </div>
          <div className='right'>
            {file && <img className='file' alt='' src={file} />}
          </div>
        </div>
        <hr />
        <div className='bottom'>
          <div className='left'>
            <input
              type='file'
              id='file'
              style={{ display: 'none' }}
              onChange={handleFile}
            />
            <label htmlFor='file'>
              <div className='item'>
                <img src={Image} alt='' />
                <span>Add Image</span>
              </div>
            </label>
            <div className='item'>
              <img src={Map} alt='' />
              <span>Add Place</span>
            </div>
            <div className='item'>
              <img src={Friend} alt='' />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className='right'>
            <button onClick={handleClick}>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;

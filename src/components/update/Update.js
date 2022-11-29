import { useEffect, useState } from 'react';
import { makeRequest } from '../../axios';
import './update.scss';
import { CloudinaryDisplay } from '../cloudinary/Cloudinary';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const Update = ({ setOpenUpdate }) => {
  // Access the client
  const queryClient = useQueryClient();

  // Mutations
  const mutation = useMutation(
    (user) => {
      return makeRequest.put('/users', user);
    },
    {
      // mutationFn: postTodo,
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries({ queryKey: ['user'] });
      },
    }
  );

  const [fileCover, setFileCover] = useState(null);
  const [fileProfile, setFileProfile] = useState(null);
  const [userInfo, setUserInfo] = useState({
    name: '',
    city: '',
    website: '',
    username: '',
  });

  useEffect(() => {
    const localUserInfo = JSON.parse(localStorage.getItem('userSA'));
    if (localUserInfo) {
      setUserInfo({
        name: localUserInfo.name,
        city: localUserInfo.city,
        website: localUserInfo.website,
        username: localUserInfo.username,
        coverPic: localUserInfo.coverPic,
        profilePic: localUserInfo.profilePic,
      });
    }
  }, []);

  const handleCover = (e) => {
    const tempFile = e.target.files[0];
    previewCover(tempFile);
  };

  const previewCover = (tempFile) => {
    const reader = new FileReader();
    reader.readAsDataURL(tempFile);
    reader.onloadend = () => {
      setFileCover(reader.result);
    };
  };

  const handleProfile = (e) => {
    const tempFile = e.target.files[0];
    previewFile(tempFile);
  };

  const previewFile = (tempFile) => {
    const reader = new FileReader();
    reader.readAsDataURL(tempFile);
    reader.onloadend = () => {
      setFileProfile(reader.result);
    };
  };

  const uploadCover = async (base64Image) => {
    try {
      const data = JSON.stringify(base64Image);
      const res = await makeRequest.post('/uploadImage/cover', { data });
      return res.data;
    } catch (error) {
      console.error(error.response.data);
    }
  };

  const uploadProfile = async (base64Image) => {
    try {
      const data = JSON.stringify(base64Image);
      const res = await makeRequest.post('/uploadImage/profile', { data });
      return res.data;
    } catch (error) {
      console.error(error.response.data);
    }
  };

  const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleUpdate = async () => {
    if (fileCover && !fileProfile) {
      const coverUrl = await uploadCover(fileCover);
      mutation.mutate({ ...userInfo, coverPic: coverUrl });
    } else if (fileProfile && !fileCover) {
      const profileUrl = await uploadProfile(fileProfile);
      mutation.mutate({ ...userInfo, profilePic: profileUrl });
    } else if (fileProfile && fileCover) {
      const coverUrl = await uploadCover(fileCover);
      const profileUrl = await uploadProfile(fileProfile);
      mutation.mutate({
        ...userInfo,
        profilePic: profileUrl,
        coverPic: coverUrl,
      });
    }
    setOpenUpdate(false);
  };

  return (
    <div className='update'>
      <div className='title'>Update Profile</div>
      <form>
        <div className='imgContainer'>
          <input
            type='file'
            name='coverPic'
            id='coverPic'
            style={{ display: 'none' }}
            onChange={handleCover}
          />
          <label htmlFor='coverPic'>
            <span>Change Cover Image</span>
          </label>
          {fileCover ? (
            <img src={fileCover} alt='' />
          ) : (
            <CloudinaryDisplay image={userInfo.coverPic} />
          )}
        </div>
        <div className='imgContainer'>
          <input
            type='file'
            name='profilePic'
            id='profilePic'
            style={{ display: 'none' }}
            onChange={handleProfile}
          />

          <label htmlFor='profilePic'>
            <span>Change Profile Image</span>
          </label>
          {fileProfile ? (
            <img src={fileProfile} alt='' />
          ) : (
            <CloudinaryDisplay image={userInfo.profilePic} />
          )}
        </div>
        <div className='inputSplit'>
          <input
            type='text'
            name='name'
            placeholder='Name'
            onChange={handleChange}
            value={userInfo.name}
          />
          <input
            type='text'
            name='username'
            placeholder='Username'
            onChange={handleChange}
            value={userInfo.username}
          />
        </div>
        <div className='inputSplit'>
          <input
            type='text'
            name='city'
            placeholder='City'
            onChange={handleChange}
            value={userInfo.city}
          />
          <input
            type='text'
            name='website'
            placeholder='Website'
            onChange={handleChange}
            value={userInfo.website}
          />
        </div>
      </form>
      <button className='close' onClick={() => setOpenUpdate(false)}>
        X
      </button>
      <div className='buttonContainer'>
        <button className='updateButton' onClick={handleUpdate}>
          Update
        </button>
      </div>
    </div>
  );
};

export default Update;

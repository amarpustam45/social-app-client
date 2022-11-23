import Stories from '../../components/stories/Stories';
import Posts from '../../components/posts/Posts';
import './home.scss';
import Share from '../../components/share/Share';

const home = () => {
  return (
    <div className='home'>
      <Stories />
      <Share />
      <Posts />
    </div>
  );
};

export default home;

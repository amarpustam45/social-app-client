import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';

export const CloudinaryDisplay = ({ image }) => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'amarpustam',
    },
  });

  const myImage = cld.image(image);

  return <AdvancedImage cldImg={myImage} />;
};

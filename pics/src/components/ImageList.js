import './ImageList.css';
import React from 'react';

const ImageList = (props) => {
  console.log(props.images);
  const images = props.images.map((image) => {
    return <img key={image.id} alt={image.alt_description} src={image.urls.regular} />
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;

import React from 'react';
import Image from "next/legacy/image";
import {urlFor} from '@/utils/sanityUtils';

const ImagePortableCom = ({ value }) => {
  if (!value?.asset?._ref) {
    return null;
  }

  // Define a maximum size for the images
  const maxWidth = 800;
  const maxHeight = 600;
  const aspectRatio = value?.imageWidth / value?.imageHeight;

  let width = maxWidth;
  let height = width / aspectRatio;

  if (height > maxHeight) {
    height = maxHeight;
    width = height * aspectRatio;
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      <Image
        alt={value.alt || "Image"}
        loading="lazy"
        src={`${urlFor(value)}`}
        height={height}
        width={width}
        objectFit='contain'
        layout="responsive"
      />
      {value.alt && <i className='text-gray-600 text-center mt-2'>{value.alt}</i>}
    </div>
  );

}

export default ImagePortableCom;

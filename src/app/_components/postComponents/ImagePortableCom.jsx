import React from 'react';
import Image from "next/legacy/image";
import {urlFor} from '@/utils/sanityUtils';

const ImagePortableCom = ({ value }) => {
  if (!value?.asset?._ref) {
    return null; // Return null instead of value if there's no image reference
  }

  // Define a maximum size for the images
  const maxWidth = 800; // max width in pixels
  const maxHeight = 600; // max height in pixels

  // Calculate aspect ratio of the image
  const aspectRatio = value?.imageWidth / value?.imageHeight;

  // Calculate responsive width and height
  let width = maxWidth;
  let height = width / aspectRatio;

  if (height > maxHeight) {
    height = maxHeight;
    width = height * aspectRatio;
  }

  return (
    <div className='flex justify-center flex-col'>
      <Image
        alt={value.alt || "Image"}
        loading="lazy"
        src={`${urlFor(value)}`}
        height={height} // Use calculated height
        width={width} // Use calculated width
        objectFit='contain'
        layout="responsive" // Make the image responsive
      />
      {value.alt && <i className='text-gray-600 flex justify-center text-center'>{value.alt}</i>}
    </div>
  );
}

export default ImagePortableCom;

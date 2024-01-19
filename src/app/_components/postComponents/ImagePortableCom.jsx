import React from 'react';
import Image from "next/legacy/image";
import {urlFor} from '@/utils/sanityUtils';

const ImagePortableCom = ({ value }) => {
  if (!value?.asset?._ref) {
    return null; // Return null instead of value if there's no image reference
  }

  // Define a maximum size for the images
  const maxWidth = 500; // max width in pixels
  const maxHeight = 375; // max height in pixels

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
    <div className='flex justify-center flex-col bg-yellow-500'>
      <Image
        alt={value.alt || "Image"}
        loading="lazy"
        src={`${urlFor(value)}`}
        height={height} // Use calculated height
        width={width} // Use calculated width
        objectFit='scale-down'
        layout="responsive" // Make the image responsive
        className={"bg-red-600"}
      />
      {value.alt && <i className='bg-green-600 text-gray-600 flex justify-center text-center'>{value.alt}</i>}
    </div>
  );
}

export default ImagePortableCom;

import React from 'react'

import Image from "next/legacy/image";
import {urlFor} from '@/utils/sanityUtils'

const ImagePortableCom = ({ value }) => {
  if (!value?.asset?._ref) {
    return value;
  }
  return (
    <>
      <div className='flex justify-center flex-col'>

        <Image
          alt={value.alt || "Image"}
          loading="lazy"
          src={`${urlFor(value)}`}
          height={value?.imageHeight}
          width={value?.imageWidth}
          objectFit='contain'
        />
        {
          value.alt &&  <i className='text-gray-600 flex justify-center text-center'>{value.alt}</i>
        }



      </div>
    </>
  );
}

export default ImagePortableCom
import {PortableText} from '@portabletext/react'

import articePortableText from './PortableComponent'

const ArticleContent = ({ postContent }) => {
  return (
    <>
      <div className="dark:text-gray-300">
        <PortableText value={postContent} components={articePortableText} /></div>
    </>
  );
};

export default ArticleContent;
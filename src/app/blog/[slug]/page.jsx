import {clientConfig} from '@/utils/sanityUtils'
import {PortableText} from '@portabletext/react'
import {Card} from '@nextui-org/react'
import {press_start_2p} from '@/app/fonts'
import ArticleContent from '@/app/_components/postComponents/ArticleContent'
export const revalidate = 10;

export default async function Article({params}) {
  const query = `*[_type == "post" && slug.current == $slug][0]`;

  const post = await clientConfig.fetch(query, {
    slug: params.slug
  });

  return (
    <div className={"w-screen flex justify-center"}>
      <Card className={"prose max-w-none prose-neutral dark:prose-invert  w-11/12 sm:w-10/12 flex flex-col items-center  py-8 px-4"}>
        <h3 className={`text-center ${press_start_2p.className}`}>{post.title}</h3>
        <ArticleContent postContent={post.body}/>
      </Card>
    </div>
  );
}
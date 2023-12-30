import {clientConfig} from '@/utils/sanityUtils'
import {PortableText} from '@portabletext/react'
import {Card} from '@nextui-org/react'
import {press_start_2p} from '@/app/fonts'
export const revalidate = false

export default async function Article({params}) {
  const query = `*[_type == "post" && slug.current == $slug][0]`;

  const post = await clientConfig.fetch(query, {
    slug: params.slug
  });

  return (
    <div className={"w-screen flex justify-center"}>
      <Card className={"prose prose-lg md:prose-lg lg:prose-xl max-w-none prose-neutral dark:prose-invert  w-11/12 sm:w-10/12 flex flex-col items-center  py-8 px-4"}>
        <h1 className={`${press_start_2p.className} text-center`}>{post.title}</h1>
        <PortableText value={post.body} />
      </Card>
    </div>
  );
}
import { clientConfig } from '@/utils/sanityUtils';
import PostOverview from '@/app/_components/PostOverview';


export const revalidate = 10;

export const metadata = {
  title: "Blog",
  description: "Dive into insightful articles by Mrima"
}

export default async function BlogHome() {
  const query = `*[_type == "post"]`;
  const posts = await clientConfig.fetch(query);
    let overviewEls = posts.map((el, i) => <PostOverview key={i} index={i} post={el}/>)
    
    return (
      <div className={"w-screen min-h-screen p-4 py-8 sm:p-8 flex flex-col items-center sm:items-start sm:justify-cent sm:flex-row gap-4 sm:gap-6 flex-wrap"}>
          {overviewEls}
      </div>
    );
}

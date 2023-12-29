import { client } from '@/utils/configSanity';

async function getData() {
  const query = `*[_type == "post"]`;
  return  await client.fetch(query);
}

export default async function BlogHome() {
  const data = await getData();
  console.log(data)
    return (
      <div>
          Hello
      </div>
    );
}
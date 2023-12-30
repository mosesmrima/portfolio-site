"use client"
import {Card, CardBody, CardHeader, Button} from '@nextui-org/react';
import Image from 'next/image';
import {urlFor} from '@/utils/sanityUtils';
import { useRouter} from 'next/navigation';

export  default function PostOverview({post, index}) {

	const router = useRouter();

	return (
		<Card id={`card${index}`} className={"hover:scale-110 transition-transform w-10/12 sm:w-[380px]  flex flex-col"}>
			<CardHeader className={"h-[150px] relative w-full"}>
				<Image src={urlFor(post.mainImage).url()} alt={"main image"} fill={true}/>
			</CardHeader>
			<CardBody className={"flex flex-col gap-2 justify-between"}>
				<h1 className={"font-bold text-xl sm:text-2xl"}>{post.title}</h1>
				<p>{post.metaDescription.slice(0, 80)}...</p>
				<div className={"flex justify-center"}>
					<Button onClick={() => router.push(`/blog/${post.slug.current}`)} className={"font"}>Read</Button>
				</div>
			</CardBody>
		</Card>
	);
}

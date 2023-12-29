import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Popover,
    PopoverContent,
    PopoverTrigger
} from "@nextui-org/react";
import {press_start_2p} from "@/app/fonts";
import Image from "next/image";
import { TbWorld } from "react-icons/tb";
import Link from "next/link";

export default function PortfolioItem(props) {


    return (
        <div className="carousel-item  w-10/12">
            <Card className={"w-12/12 sm:w-10/12 sm:h-[300px] flex flex-col"}>
                <CardHeader>
                    <h1 className={`${press_start_2p.className}`}>{props.title}</h1>
                </CardHeader>
                <CardBody>
                    <Image className={"rounded-lg object-contain"} placeholder={"blur"} src={props.src} alt={"project"}/>
                </CardBody>

                <CardFooter className={"flex justify-center"}>
                    <Popover>
                        <PopoverTrigger>
                            <Button className={"font-bold"}  variant={"shadow"}>Details</Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <div className="max-w-[300px] px-1 py-2 flex flex-col gap-2 justify-center">
                                <h1 className={"font-bold text-lg sm:text-2xl"}>{props.title}</h1>
                                <p className={"text-large"}>
                                    {props.desc}
                                </p>
                                <div className={"self-center"}>
                                    <Link href={props.web} target={"_blank"}>
                                        <TbWorld size={30}/>
                                    </Link>
                                </div>
                            </div>
                        </PopoverContent>
                    </Popover>
                </CardFooter>
            </Card>
        </div>
    );
}
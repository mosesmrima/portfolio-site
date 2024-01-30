"use client"
import Image from 'next/image'
import Link from "next/link";
import {Card, CardBody, CardFooter, CardHeader, Chip} from "@nextui-org/react";
import me from "/public/me.svg";
import afro from "/public/Afro.png";
import ken from "/public/kentronix.png";
import mifuse from "/public/mifuse.png";
import hacka from "/public/hackA.png";

import{press_start_2p} from "@/app/fonts";
import {
    PythonOriginalWordmark,
    JavascriptOriginal,
    COriginal,
    BashOriginal,
    ReactOriginalWordmark,
    NodejsOriginalWordmark,
    ExpressOriginal,
    NextjsOriginal,
    MongodbOriginalWordmark,
    TailwindcssPlain,
    RedisOriginal, MochaPlain
} from 'devicons-react';
import {FiTwitter} from "react-icons/fi";
import {TbBrandGithub} from "react-icons/tb";
import {SlSocialLinkedin} from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import PortfolioItem from "@/app/_components/PortfolioItem";
import {useEffect} from "react";


gsap.registerPlugin(ScrollTrigger)

export default function Home() {
    useEffect(() => {
        [1,2,3,4,5].map((el,index) => {
            gsap.to(`.card${el}`, {
                scrollTrigger: {
                    trigger: `.card${el}`,
                    start: "top 60px",
                    scrub: true,
                    end: "center 60px",
                    pin:true,
                },
                scale: 0.2,
                z: -50,
                opacity: 0,
                ease: "expo.in",
                xPercent: (index % 2) ? 50:-50,
            });
        })
    }, []);
    
  return (
      <main id={"home"} className=" flex min-h-screen flex-col items-center sm:justify-around p-4">
          <div className={" min-h-screen flex flex-col justify-start sm:items-center gap-4 sm:gap-0 w-full sm:w-9/12 p-4"}>
              <Card className="card1 flex flex-col justify-center items-center py-2 w-[280px] sm:self-start">
                  <CardHeader className="pb-0 pt-2  flex-col items-start">
                      <h4 className={`${press_start_2p.className} font-bold text-large`}>Mrima Moses</h4>
                      <div className={"flex justify-end gap-2 py-2 items-center"}>
                          <Chip><small>Fullstack Dev.</small>.</Chip>
                          <Chip><small>Cybersecurity</small></Chip>
                      </div>
                  </CardHeader>
                  <CardBody className="overflow-visible py-2">
                      <Image
                          alt="Card background"
                          className="object-cover  dark:opacity-70 opacity-100 rounded-2xl"
                          src={me}
                          width={270}
                      />
                  </CardBody>
                  <CardFooter className="justify-center gap-6 overflow-hidden py-1 absolute  bottom-3 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">

                      <Link href={"https://github.com/mosesmrima"} target={"_blank"}>
                          <TbBrandGithub size={35}/>
                      </Link>
                      <Link href={"https://www.linkedin.com/in/mrima/"} target={"_blank"}>
                          <SlSocialLinkedin size={35}/>
                      </Link>

                      <Link href={"https://twitter.com/kvltbyte"} target={"_blank"}>
                          <FiTwitter size={35}/>
                      </Link>
                  </CardFooter>
              </Card>
              <Card className={"card2 w-full sm:w-8/12 sm:self-end"}>
                  <CardHeader>
                      <h4 className={`${press_start_2p.className} text-2xl`}>hey,</h4>
                  </CardHeader>
                  <CardBody>
                      <div className={'flex flex-col gap-4'}>
                          <p className={'text-lg sm:text-xl  leading-8'}>
                              I&apos;m a <i><b>Software Engineer</b></i> and <i><b>Cybersecurity researcher</b></i>.
                          </p>
                          <p className={'text-lg sm:text-xl leading-8'}>
                              I have 3+ years of fullstack software engineering experience developing innovative
                              solutions.
                              My cybersecurity background gives me a unique approach to software engineering, building
                              secure by design software.
                          </p>
                          <p className={'text-lg sm:text-xl leading-8'}>
                              As a dedicated Cybersecurity Researcher, my focus includes monitoring, analyzing, and reporting on new
                              adversary behaviors. Additionally, I have a keen interest in reverse engineering and
                              threat intelligence, which aids in understanding and mitigating sophisticated cyber
                              attacks.
                          </p>
                      </div>
                  </CardBody>
              </Card>
          </div>

          <div id={'skills'} className={' py-20 flex flex-col items-center gap-8'}>
              <h1 className={`${press_start_2p.className} text-2xl`}>Skills</h1>
              <div className={'justify-center items-center w-full flex flex-col sm:flex-row gap-6 '}>
                  <Card className={'card3'}>
                      <CardHeader>
                          <h1 className={`${press_start_2p.className}`}>Languages</h1>
                      </CardHeader>
                      <CardBody className={"flex flex-row gap-2"}>
                          <PythonOriginalWordmark size={60}/>
                          <JavascriptOriginal size={60}/>
                          <COriginal size={60}/>
                          <BashOriginal size={60}/>
                      </CardBody>
                  </Card>

                  <Card className={"card4 w-full sm:w-4/12"}>
                      <CardHeader>
                          <h1 className={`${press_start_2p.className}`}>Software Engineering</h1>
                      </CardHeader>
                      <CardBody className={"flex flex-row gap-2 w-full flex-wrap justify-center"}>
                          <ReactOriginalWordmark size={60}/>
                          <NodejsOriginalWordmark size={60}/>
                          <NextjsOriginal size={60}/>
                          <MongodbOriginalWordmark size={60}/>
                          <ExpressOriginal size={60}/>
                          <TailwindcssPlain size={60}/>
                          <RedisOriginal size={60}/>
                          <MochaPlain size={60}/>
                      </CardBody>
                  </Card>

                  <Card className={"card5"}>
                      <CardHeader>
                          <h1 className={`${press_start_2p.className}`}>Cybersecurity Skills</h1>
                      </CardHeader>
                      <CardBody>
                          <ul>
                              <li>Reverse Engineering</li>
                              <li>Malware Analysis</li>
                              <li>Threat Intelligence</li>
                              <li>Threat Hunting</li>
                              <li>Smart Contract Auditing</li>
                          </ul>
                      </CardBody>
                  </Card>
              </div>
          </div>

          <div className={"w-11/12 sm:w-6/12 flex flex-col items-center gap-8 py-20"}>
              <h1 id={"portfolio"} className={`${press_start_2p.className} text-2xl`}>Portfolio</h1>
              <div className={"card6 carousel carousel-center w-full gap-2 p-4"}>
                  <PortfolioItem web={"https://www.figma.com/proto/FQcCP8MlZrxSnd81U5eT9o/afrodrumbass?type=design&node-id=4-15&t=aVpIwI7EJPVvjh3H-0&scaling=contain&page-id=0%3A1&starting-point-node-id=4%3A15"} title={"Afrodrumbass"} src={afro} desc={"A Figma Design intended for a music production company."}/>
                  <PortfolioItem web={"https://www.kentronix.tech/"} title={"Kentronix"} src={ken} desc={"A responsive website built using Next.js and TailwindCSS."}/>
                  <PortfolioItem web={"https://github.com/mosesmrima/MiFUSE"} title={"MiFuse"} src={mifuse} desc={"A minimal filesystem compatible with all major linux distributions built using C and LibFUSE v3."}/>
                  <PortfolioItem web={"https://github.com/mosesmrima/HackA"} title={"HackA"} src={hacka} desc={"A 2-pass assembler for the Hack Assembly language that generates 16-bit machine code for the Hack Computer Architecture."}/>
              </div>
          </div>

          <div className={"w-11/12 sm:w-6/12 flex flex-col items-center gap-8 py-20"}>
              <h1 className={`${press_start_2p.className} text-2xl`}>Get In Touch</h1>
              <div className={"flex gap-4 items-center p-2"}>
                 <TfiEmail size={40}/>
                  <p className={`${press_start_2p.className}`}>mrimamss@gmail.com</p>
              </div>
          </div>
      </main>
  )
}

"use client"
import {
    Navbar,
    NavbarContent,
    NavbarItem,
} from "@nextui-org/react";
import Link from "next/link"
import {useTheme} from "next-themes";
import { MdOutlineLightMode, MdOutlineDarkMode  } from "react-icons/md";
import {useState} from "react";
import {press_start_2p} from "@/app/fonts";
import {usePathname} from 'next/navigation'

export default function NavBar() {
    const { theme, setTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathName = usePathname();
    const active = pathName.includes("blog");
    return (
        <Navbar isMenuOpen={isMenuOpen}
                onMenuOpenChange={setIsMenuOpen}
                disableAnimation={true}
               shouldHideOnScroll={true}
                className={`${press_start_2p.className}`}
        >


            <NavbarContent className="flex gap-6 items-center" justify="start">
                <NavbarItem isActive={active}>
                    <Link href="/" aria-current="page">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={active}>
                    <Link href="/blog" aria-current="page">
                        Blog
                    </Link>
                </NavbarItem>

            </NavbarContent>
            {
                theme === "dark"? <MdOutlineLightMode size={30} onClick={() => setTheme('light')}/>:
                  <MdOutlineDarkMode  size={30} onClick={() => setTheme('dark')}/>
            }

        </Navbar>
    );
}
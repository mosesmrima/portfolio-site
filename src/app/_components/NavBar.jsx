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

export default function NavBar() {

    const { theme, setTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    return (
        <Navbar isMenuOpen={isMenuOpen}
                onMenuOpenChange={setIsMenuOpen}
                disableAnimation={true}
               shouldHideOnScroll={true}
                className={`${press_start_2p.className}`}
        >


            <NavbarContent className="flex gap-4 items-center" justify="end">
                <NavbarItem isActive>
                    <Link href="/#home" aria-current="page">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="/#" aria-current="page">
                        Blog
                    </Link>
                </NavbarItem>
                {
                    theme === "dark"? <MdOutlineLightMode size={30} onClick={() => setTheme('light')}/>:
                        <MdOutlineDarkMode size={30} onClick={() => setTheme('dark')}/>
                }
            </NavbarContent>

        </Navbar>
    );
}
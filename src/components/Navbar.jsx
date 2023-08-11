"use client";
import NavStyles from "@/styles/_Navbar.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, HeartIcon, OutlinedHeartIcon } from "@/components/Icons";

export const Navbar = (props) => {
    const pathname = usePathname();

    return (
        <nav className={NavStyles.nav}>
            <ul>
                <li>
                    <Link href={"/"}>
                        <HomeIcon
                            fillColor={pathname === "/" ? "#000" : "white"}
                            strokeColor={"#000"}
                            strokeWidth={"2"}
                        />
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link href={"/Favorites"}>
                        {pathname == "/" ? (
                            <OutlinedHeartIcon />
                        ) : (
                            <HeartIcon />
                        )}
                        <span>Favorites</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

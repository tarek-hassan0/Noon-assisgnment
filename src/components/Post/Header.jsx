"use client";
import Link from "next/link";
import Image from "next/image";
import HeaderStyles from "@/styles/_Header.module.scss";
import {useState} from "react";

const Header = (props) => {
    const { username, avatarSrc } = props.user;

    return (
        <div className={HeaderStyles.header}>
            <Link href={"#"} prefetch={false}>
                <div className={HeaderStyles["avatar-container"]}>
                    <Image
                        width={32}
                        height={32}
                        alt={username + " avatar"}
                        src={avatarSrc}
                    />
                </div>
            </Link>
            <Link href={"#"} prefetch={false}>
                <b>{username}</b>
            </Link>
        </div>
    );
};

export default Header;

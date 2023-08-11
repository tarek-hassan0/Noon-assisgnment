"use client";
import { HeartIcon } from "@/components/Icons";
import LikesStyles from "@/styles/_Likes.module.scss";
import designVariables from "@/styles/_design-variables.module.scss";
import Link from "next/link";

const Likes = (props) => {
    const { likesCount } = props;

    return (
        <div className={LikesStyles["likes"]}>
            <HeartIcon
                fillColor={designVariables["heart_red_color"]}
                width={16}
                height={16}
            />
            <Link href={"#"}>{likesCount + " Likes" || ""}</Link>
        </div>
    );
};

export default Likes;

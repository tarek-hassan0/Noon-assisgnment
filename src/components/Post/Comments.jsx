"use client";
import Link from "next/link";
import CommentsStyle from "@/styles/_Comments.module.scss";


const Comments = (props) => {
    const {commentsCount}= props;

    return (
        <div className={CommentsStyle["comments"]}>
            {
                commentsCount > 0 &&
                <Link href={"#"} prefetch={false}>View {commentsCount} comments</Link>
            }
        </div>
    );
};

export default Comments;

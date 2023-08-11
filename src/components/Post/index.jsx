"use client";
import PostStyles from "@/styles/_Post.module.scss";
import Header from "./Header";
import Content from "./Content";
import Likes from "./Likes";
import Description from "./Description";
import Comments from "./Comments";
import {usePostsContext} from "@/app/Posts-Context";
import { useFilterPostsById } from "@/hooks/useFilterPostsById";
import { usePathname } from "next/navigation";

const Post = (props) => {
    const pathname = usePathname();
    const { innerRef, postID } = props;
    const {state} = usePostsContext();

    const postData =  useFilterPostsById(pathname ==='Favorites'? state.favorites : state.posts, postID);

    return (
        <article className={PostStyles.post_container} ref={innerRef}>
            <Header {...postData} />
            <Content {...postData}/>
            <Likes {...postData}/>
            <Description {...postData}/>
            <Comments {...postData} />
        </article>
    );
};

export default Post;

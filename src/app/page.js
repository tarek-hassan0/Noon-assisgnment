"use client";
import PostSkeleton from "@/skeletons/Post";
import { useInView } from "react-intersection-observer";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { usePostsContext } from "@/app/Posts-Context";
import { Fragment } from 'react';
import EmptyPage from "@/components/EmptyPage";
import PageError from "@/components/PageError";

const Post = dynamic(() => import("../components/Post"), {
    loading: () => <PostSkeleton />,
    ssr: false,
});

export default function Home() {
    const { state, dispatch } = usePostsContext();

    const { ref, inView } = useInView({ threshold: 0 });

    useEffect(() => {
        dispatch({ type: "FETCH_POSTS", payload: null });
    }, []);

    useEffect(() => {
        dispatch({ type: "FETCH_MORE_POSTS", payload: null });
    }, [inView]);

    if (state.loadingPosts) {
        return <PostSkeleton />;
    }
    // There was an error loading posts
    if (state.postsError)
        return (
            <PageError title={'Somethin went wrong while loading posts'} msg={'Try to Refresh the page'} />
        );

    if (state.loadingPosts === false && state.posts.length === 0) {
        return <EmptyPage msg="There are no posts" />;
    }

    return state.posts.map((postData, index) => {
        if (index === state.posts.length - 1) {
            return (
                <Fragment key={postData.id+1}>
                    <Post
                        key={postData.id}
                        innerRef={ref}
                        postID={postData.id}
                    />
                    <div key={postData.id+2} style={{width: '100%', display: 'flex', justifyContent: 'center', color: '#a4a4a4'}}>No more posts</div>
                </Fragment>
            );
        }
        return <Post key={postData.id} postID={postData.id} />;
    });
}

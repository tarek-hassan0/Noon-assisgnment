"use client";
import { useEffect, Fragment } from "react";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";
import { usePostsContext } from "@/app/Posts-Context";
import PostSkeleton from "@/skeletons/Post";
import EmptyPage from "@/components/EmptyPage";
import PageError from "@/components/PageError";

const LazyPost = dynamic(() => import("../components/Post"), {
    loading: () => <PostSkeleton />,
    ssr: false,
});
import EagerPost from "@/components/Post" ;


export default function Home() {
    const { state, dispatch } = usePostsContext();
    const { ref, inView } = useInView({ threshold: 0 });

    // Fetch initial posts on page load
    useEffect(() => {
        dispatch({ type: "FETCH_POSTS", payload: null });
    }, []);

    // Load more posts when the last post is in view
    useEffect(() => {
        dispatch({ type: "FETCH_MORE_POSTS", payload: null });
    }, [inView]);

    if (state.postsLoading) {
        return <PostSkeleton />;
    }

    if (state.postsError) {
        return (
            <PageError
                title={"Somethin went wrong while loading posts"}
                msg={"Try to Refresh the page"}
            />
        );
    }

    if (state.favoritesLoading === false && state.posts.length === 0) {
        return <EmptyPage msg="There are no posts" />;
    }

    return state.posts.map((postData, index) => {
        // Load the Post component eagerly if it's the first post
        if(index === 0){ 
            return(
                <EagerPost key={postData.id} postID={postData.id} />
            )
        }
        // Add the ref to the last post to track if it is in view and load more posts
        else if (index === state.posts.length - 1) {
            return (
                <Fragment key={postData.id + 1}>
                    <LazyPost
                        key={postData.id}
                        innerRef={ref}
                        postID={postData.id}
                    />
                    <div
                        key={postData.id + 2}
                        style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            color: "#a4a4a4",
                        }}
                    >
                        No more posts
                    </div>
                </Fragment>
            );
        }
        return <LazyPost key={postData.id} postID={postData.id} />;
    });
}

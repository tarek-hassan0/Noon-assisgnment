"use client";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { usePostsContext } from "@/app/Posts-Context";
import PostSkeleton from "@/skeletons/Post";
import EmptyPage from "@/components/EmptyPage";
import PageError from "@/components/PageError";
import EagerPost from "@/components/Post"

const LazyPost = dynamic(() => import("../../components/Post"), {
    loading: () => <PostSkeleton />,
    ssr: false,
});

export default function Favorites() {
    const { state, dispatch } = usePostsContext();

    // Fetch initial favorite posts on page load
    useEffect(() => {
        dispatch({ type: "FETCH_FAVORITES", payload: null });
    }, []);

    if (state.favoritesLoading) {
        return <PostSkeleton />;
    }

    if (state.favoritesError) {
        return (
            <PageError
                title={"Somethin went wrong while loading favorite posts"}
                msg={"Try to Refresh the page"}
            />
        );
    }

    if (state.favoritesLoading === false && state.favorites.length === 0) {
        return <EmptyPage msg="There are no favorite posts, yet" />;
    }

    return state.favorites.map((postData, index) => {
        // Load the Post component eagerly if it's the first post
        if(index === 0) {
            return <EagerPost key={postData.id} postID={postData.id}/>
        }
        // Add the ref to the last post to track if it is in view and load more posts 
        else if (index === state.favorites.length - 1) {
            return (
                <LazyPost
                    key={postData.id}
                    innerRef={ref}
                    postID={postData.id}
                />
            );
        }
        return <LazyPost key={postData.id} postID={postData.id} />;
    });
}

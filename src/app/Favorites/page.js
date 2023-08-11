"use client";
import PostSkeleton from "@/skeletons/Post";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { usePostsContext } from "@/app/Posts-Context";
import EmptyPage from "@/components/EmptyPage";
import PageError from "@/components/PageError";

const Post = dynamic(() => import("../../components/Post"), {
    loading: () => <PostSkeleton />,
    ssr: false,
});

export default function Favorites() {
    const { state, dispatch } = usePostsContext();

    useEffect(() => {
        dispatch({ type: "FETCH_FAVORITES", payload: null})
    }, []);


    if (state.loadingFavorites) {
        return <PostSkeleton />;
    }

    if(state.favoritesError) return <PageError title={'Somethin went wrong while loading posts'} msg={'Try to Refresh the page'} />

    if (state.favoritesLoading === false && state.favorites.length === 0) {
        return  <EmptyPage msg="There are no favorite posts" />;
    }

    return state.favorites.map((postData, index) => {
        if (index === state.favorites.length - 1) {
            return (
                <Post key={postData.id} innerRef={ref} postID={postData.id} />
            );
        }
        return <Post key={postData.id} postID={postData.id} />;
    });
}

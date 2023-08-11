"use client";
import PostSkeleton from "@/skeletons/Post";
import { useInView } from "react-intersection-observer";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { usePostsContext } from "@/app/Posts-Context";

const Post = dynamic(() => import("../../components/Post"), {
    loading: () => <PostSkeleton />,
    ssr: false,
});

export default function Favorites() {
    const { state, dispatch } = usePostsContext();
    const { ref, inView } = useInView({});

    useEffect(() => {
        dispatch({ type: "FETCH_FAVORITES", payload: null})
    }, [inView]);


    if (state.loadingFavorites) {
        return <PostSkeleton />;
    }

    if(state.favoritesError) return <h1 style={{ color: "red", textAlign: 'center' }}>There was an error loading favorite posts</h1>

    if (state.favoritesLoading === false && state.favorites.length === 0) {
        return <h1 style={{ color: "#e2e2e2", textAlign: 'center' }}>There are no favorite posts yet</h1>;
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

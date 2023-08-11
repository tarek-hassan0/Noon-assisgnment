"use client";

import { createContext, useContext, useReducer } from "react";

if (typeof window !== "undefined") {
    localStorage.setItem("favorites", JSON.stringify([]));
}

const data = [
    {
        user: {
            id: 1,
            name: "Alexander",
            avatarSrc:
                "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=$32}&q=60",
            username: "Alexander",
        },
        id: 1,
        content: {
            title: "Post 1",
            imageSource:
                "https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=742&q=80",
        },
        description: "Post 1 description",
        tags: ["tag1", "tag2", "tag3"],
        commentsCount: 10,
        likesCount: 10,
        date: "2021-01-01",
        isFavorite: false,
    },
    {
        user: {
            id: 2,
            name: "Artem",
            avatarSrc:
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
            username: "Artem",
        },
        id: 2,
        content: {
            title: "Post 2",
            imageSource:
                "https://images.unsplash.com/photo-1691531315982-f6bccf4bd875?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        },
        description: "Post 2 description",
        tags: ["tag1"],
        commentsCount: 0,
        likesCount: 5,
        date: "2021-01-01",
        isFavorite: false,
    },
    {
        user: {
            id: 3,
            name: "Karolyne",
            avatarSrc:
                "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            username: "Karolyne",
        },
        id: 3,
        content: {
            title: "Post 3",
            imageSource:
                "https://images.unsplash.com/photo-1691573155562-bb83d1237f23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        },
        description: "Post 3 description",
        tags: [],
        commentsCount: 20,
        likesCount: 50,
        date: "2021-01-01",
        isFavorite: false,
    },
    {
        user: {
            id: 4,
            name: "Leio",
            avatarSrc:
                "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
            username: "Leio",
        },
        id: 4,
        content: {
            title: "Post 4",
            imageSource:
                "https://images.unsplash.com/photo-1691247876282-93007fa2e16e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        },
        description: "Post 4 description",
        tags: ["tag1", "tag2", "tag3"],
        commentsCount: 10,
        likesCount: 30,
        date: "2021-01-01",
        isFavorite: false,
    },
    {
        user: {
            id: 5,
            name: "Deadpool ",
            avatarSrc:
                "https://images.unsplash.com/photo-1608889175123-8ee362201f81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
            username: "Deadpool",
        },
        id: 5,
        content: {
            title: "Post 5",
            imageSource:
                "https://images.unsplash.com/photo-1691522949910-28fcfb326904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80",
        },
        description: "Post 5 description",
        tags: ["tag1", "tag2", "tag3"],
        commentsCount: 10,
        likesCount: 100,
        date: "2021-01-01",
        isFavorite: false,
    },
    {
        user: {
            id: 6,
            name: "Luke",
            avatarSrc:
                "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            username: "Luke",
        },
        id: 6,
        content: {
            title: "Post 6",
            imageSource:
                "https://images.unsplash.com/photo-1691525737402-e7a447ec2be5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
        },
        description: "Post 6 description",
        tags: [],
        commentsCount: 10,
        likesCount: 10,
        date: "2021-01-01",
        isFavorite: false,
    },
    {
        user: {
            id: 7,
            name: "Jaklin",
            avatarSrc:
                "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            username: "Jaklin",
        },
        id: 7,
        content: {
            title: "Post 7",
            imageSource:
                "https://images.unsplash.com/photo-1690902303020-a980f1eda16b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
        },
        description: "Post 7 description",
        tags: [],
        commentsCount: 3,
        likesCount: 10,
        date: "2021-01-01",
        isFavorite: false,
    },
    {
        user: {
            id: 8,
            name: "Tyler",
            avatarSrc:
                "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            username: "Tyler",
        },
        id: 8,
        content: {
            title: "Post 8",
            imageSource:
                "https://images.unsplash.com/photo-1690975608976-1933d9e8ccde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        description: "",
        tags: [],
        commentsCount: 3,
        likesCount: 10,
        date: "2021-01-01",
        isFavorite: false,
    },
    {
        user: {
            id: 9,
            name: "Austin",
            avatarSrc:
                "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            username: "Austin",
        },
        id: 9,
        content: {
            title: "Post 9",
            imageSource:
                "https://images.unsplash.com/photo-1690735327293-469a2d45a768?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        description: "",
        tags: [],
        commentsCount: 0,
        likesCount: 0,
        date: "2021-01-01",
        isFavorite: false,
    },
    {
        user: {
            id: 10,
            name: "Ananthu",
            avatarSrc:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            username: "Ananthu",
        },
        id: 10,
        content: {
            title: "Post 10",
            imageSource:
                "https://images.unsplash.com/photo-1689610118132-96bde7f87e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        description: "",
        tags: [],
        commentsCount: 20,
        likesCount: 15,
        date: "2021-01-01",
        isFavorite: false,
    },
    {
        user: {
            id: 11,
            name: "Lisa",
            avatarSrc:
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            username: "Lisa",
        },
        id: 11,
        content: {
            title: "Post 11",
            imageSource:
                "https://images.unsplash.com/photo-1665571299275-c356882f80df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        description: "Post 11 description",
        tags: ['tag1'],
        commentsCount: 25,
        likesCount: 30,
        date: "2021-01-01",
        isFavorite: false,
    },
    {
        user: {
            id: 12,
            name: "Robert",
            avatarSrc:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            username: "Robert",
        },
        id: 12,
        content: {
            title: "Post 12",
            imageSource:
                "https://images.unsplash.com/photo-1691669686323-4f72f54e64d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        description: "Post 12 description",
        tags: ['tag1'],
        commentsCount: 25,
        likesCount: 30,
        date: "2021-01-01",
        isFavorite: false,
    },
    {
        user: {
            id: 13,
            name: "Christan",
            avatarSrc:
                "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            username: "Christan",
        },
        id: 13,
        content: {
            title: "Post 13",
            imageSource:
                "https://images.unsplash.com/photo-1690983730309-4a9ac0a2a61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        description: "Post 13 description",
        tags: ['tag1'],
        commentsCount: 25,
        likesCount: 30,
        date: "2021-01-01",
        isFavorite: false,
    },
    {
        user: {
            id: 14,
            name: "Toa",
            avatarSrc:
                "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            username: "Toa",
        },
        id: 14,
        content: {
            title: "Post 14",
            imageSource:
                "https://images.unsplash.com/photo-1691424009186-c31e353d9302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        description: "Post 14 description",
        tags: ['tag1'],
        commentsCount: 25,
        likesCount: 30,
        date: "2021-01-01",
        isFavorite: false,
    },
    {
        user: {
            id: 15,
            name: "Cesar",
            avatarSrc:
                "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            username: "Cesar",
        },
        id: 15,
        content: {
            title: "Post 15",
            imageSource:
                "https://images.unsplash.com/photo-1691458349071-aab82690fe23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        description: "Post 15 description",
        tags: ['tag1'],
        commentsCount: 25,
        likesCount: 30,
        date: "2021-01-01",
        isFavorite: false,
    },
];

const PostsContext = createContext();

const initialState = {
    posts: [],
    postsLoading: true,
    postsError: false,
    lastPostID: 0,
    favorites: [],
    favoritesLoading: true,
    favoritesError: false,
};

const reducer = (state, action) => {
    let tempFavoritesIds;
    let tempPosts;
    switch (action.type) {
        case "FETCH_POSTS":;
            return {
                ...state,
                lastPostID: 5,
                postsLoading: false,
                posts: [...data.slice(0, 5)],
            };
        case "FETCH_MORE_POSTS":
            return {
                ...state,
                postsLoading: false,
                posts: [
                    ...state.posts,
                    ...data.slice(state.lastPostID, state.lastPostID + 5),
                ],
                lastPostID: state.lastPostID + 5,
            };
        case "FETCH_FAVORITES":
            if (typeof window !== "undefined") {
                tempFavoritesIds = JSON.parse(
                    localStorage.getItem("favorites")
                );
            }
            return {
                ...state,
                favoritesLoading: false,
                favorites: [
                    ...data.filter((post) =>
                        tempFavoritesIds.includes(post.id)
                    ),
                ],
            };
        case "ADD_TO_FAVORITES":
            if (typeof window !== "undefined") {
                tempFavoritesIds = JSON.parse(
                    localStorage.getItem("favorites")
                );
                tempFavoritesIds.push(action.payload);
                localStorage.setItem(
                    "favorites",
                    JSON.stringify(tempFavoritesIds)
                );
            }
            tempPosts = state.posts.map((post) => {
                if (post.id === action.payload) {
                    post.isFavorite = true;
                    post.likesCount++;
                }
                return post;
            });
            return {
                ...state,
                posts: [...tempPosts],
                favorites: [...tempPosts.filter((post) => post.isFavorite)],
            };
        case "REMOVE_FROM_FAVORITES":
            if (typeof window !== "undefined") {
                tempFavoritesIds = JSON.parse(
                    localStorage.getItem("favorites")
                );
                tempFavoritesIds = tempFavoritesIds.filter((id) => id !== action.payload);
                localStorage.setItem(
                    "favorites",
                    JSON.stringify(tempFavoritesIds)
                );
            }
            tempPosts = state.posts.map((post) => {
                if (post.id === action.payload) {
                    post.isFavorite = false;
                    post.likesCount--;
                }
                return post;
            });
            return {
                ...state,
                posts: [...tempPosts],
                favorites: [...tempPosts.filter((post) => post.isFavorite)],
            };
        default:
            return state;
    }
};

const PostsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <PostsContext.Provider value={{ state, dispatch }}>
            {children}
        </PostsContext.Provider>
    );
};

const usePostsContext = () => {
    const context = useContext(PostsContext);
    if (!context) {
        throw new Error("usePostsContext must be used within a PostsProvider");
    }
    return context;
};

export { PostsProvider, usePostsContext };

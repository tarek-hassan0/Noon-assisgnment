const FilterPostsById = (posts, id) => {
    return posts.find(post => post.id === id);
}

const getLocalStorageValue = (key) => {
    if (typeof window !== "undefined") {
        return [...JSON.parse(localStorage.getItem(key))];
    }
    return [];
    
}

const setLocalStorageValue = (key, value) => {
    if (typeof window !== "undefined") {
        localStorage.setItem(key, JSON.stringify(value));
    }
}

const SetPostAsFavorite = (posts, postID) => {
    const postIndex = posts.findIndex(post => post.id === postID);
    const newPosts = [...posts];
    newPosts[postIndex].isFavorite = true;
    newPosts[postIndex].likesCount +=1;
    return newPosts;
}

const RemovePostAsFavorite = (posts, postID) => {
    const postIndex = posts.findIndex(post => post.id === postID);
    const newPosts = [...posts];
    newPosts[postIndex].isFavorite = false;
    newPosts[postIndex].likesCount -=1;
    return newPosts;
}

export {getLocalStorageValue, setLocalStorageValue, FilterPostsById ,SetPostAsFavorite, RemovePostAsFavorite};
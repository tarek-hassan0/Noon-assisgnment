/**
 * 
 * @param {Array} posts // array of posts
 * @param {Number} id // id of the post
 * @returns {Object | undefined} the post with the given id
 */
const FilterPostsById = (posts, id) => {
    return posts.find(post => post.id === id);
}

/**
 * 
 * @param {String} key // key of the local storage item
 * @returns {Array} // parsed Array of the local storage item
 */
const getLocalStorageValue = (key) => {
    if (typeof window !== "undefined") {
        return [...JSON.parse(localStorage.getItem(key))];
    }
    return [];
    
}

/**
 * 
 * @param {String} key // key of the local storage item
 * @param {*} value // value of to set to the local storage item
 */
const setLocalStorageValue = (key, value) => {
    if (typeof window !== "undefined") {
        localStorage.setItem(key, JSON.stringify(value));
    }
}

/**
 * 
 * @param {*} posts // array of posts
 * @param {*} postID // id of the post
 * @returns {Array} // new array of posts with the post with the given id set as favorite
 */
const SetPostAsFavorite = (posts, postID) => {
    const postIndex = posts.findIndex(post => post.id === postID);
    const newPosts = [...posts];
    newPosts[postIndex].isFavorite = true;
    newPosts[postIndex].likesCount +=1;
    return newPosts;
}

/**
 * 
 * @param {*} posts // array of posts
 * @param {*} postID // id of the post
 * @returns {Array} // new array of posts with the post with the given id set as not favorite
 */
const RemovePostAsFavorite = (posts, postID) => {
    const postIndex = posts.findIndex(post => post.id === postID);
    const newPosts = [...posts];
    newPosts[postIndex].isFavorite = false;
    newPosts[postIndex].likesCount -=1;
    return newPosts;
}

export {getLocalStorageValue, setLocalStorageValue, FilterPostsById ,SetPostAsFavorite, RemovePostAsFavorite};
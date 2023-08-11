const useFilterPostsById = (posts, id) => {
    return posts.find(post => post.id === id);
}

export {useFilterPostsById};
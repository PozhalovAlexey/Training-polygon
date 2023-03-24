import {useMemo} from "react";

export const useSortedPosts = (posts, sort) => {
    const sortedPost = useMemo(() => {
        console.log('Отработала функция по сортировке')
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts
    }, [sort, posts])
    return sortedPost
}
export const usePosts = (posts, sort, query) => {
    const sortedPost = useSortedPosts(posts, sort)

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPost.filter(post => post.title.toLowerCase().includes(query))
    }, [query, sortedPost])
    return sortedAndSearchedPosts;
}
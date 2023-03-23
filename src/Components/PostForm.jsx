import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = () => {

    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Description'},
        {id: 2, title: 'Javascript', body: 'Description'},
        {id: 3, title: 'Javascript', body: 'Description'},
    ])

    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        setPosts([...posts, {...post, id: Date.now()}])
        setPost({title: '', body: ''})
    }


    return (
        <form>
            <MyInput
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type={"text"}
                placeholder={'Название'}
            />
            <MyInput
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type={"text"}
                placeholder={'Описание'}
            />
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    );
};

export default PostForm;
//
// <form>
//     <MyInput
//         value={post.title}
//         onChange={e => setPost({...post,title: e.target.value})}
//         type={"text"}
//         placeholder={'Название'}
//     />
//     <MyInput
//         value={post.body}
//         onChange={e => setPost({...post, body: e.target.value})}
//         type={"text"}
//         placeholder={'Описание'}
//     />
//     <MyButton onClick={addNewPost}>Создать пост</MyButton>
// </form>
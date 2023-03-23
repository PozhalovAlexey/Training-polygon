import React, {useRef, useState} from "react";
import Counter from "./Components/Counter";
import ClassCounter from "./Components/ClassCounter";
import './styles/App.css'
import PostList from "./Components/PostList";
import MyButton from "./Components/UI/button/MyButton";
import MyInput from "./Components/UI/input/MyInput";
import PostForm from "./Components/PostForm";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Description'},
        {id: 2, title: 'Javascript', body: 'Description'},
        {id: 3, title: 'Javascript', body: 'Description'},
    ])
    const [title, setTitle] = useState('')

    const [post, setPost] = useState({title:'',body:''})

    const [body, setBody] = useState('')
    const addNewPost = (e) => {
        e.preventDefault()
        setPosts([...posts, {...post,id:Date.now()}])
setPost({title: '',body: ''})
    }

    return (
        <div className="App">
            <Counter/>
            <ClassCounter/>
            <PostForm/>

            <PostList posts={posts} title={'Cписок постов про JS'}/>
        </div>

    );
}

export default App;

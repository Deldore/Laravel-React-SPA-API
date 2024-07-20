import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import {useEffect, useMemo, useState} from "react";
import Post from "@/Components/Post.jsx";
import PostList from "@/Components/PostList.jsx";
import PostCreateForm from "@/Components/PostCreateForm.jsx";
import PostSearch from "@/Components/PostSearch.jsx";

export default function Dashboard({ auth }) {

    const [posts, setPosts] = useState([])
    const [sortedPosts, setSortedPosts] = useState([])

    const [postName, setPostName] = useState('');
    const [postContent, setPostContent] = useState('');
    const [postQuery, setPostQuery] = useState('');

    useEffect(() => {
        fetchPosts();
    }, [])

    const fetchPosts = async () => {
        const response = await axios.get('/posts');
        setPosts(response.data);
    }
    const createNewPost = async (e) => {
        e.preventDefault();
        const response = await axios.post('/store', {
            name: postName,
            content: postContent
        });
        fetchPosts();
        setPostName('');
        setPostContent('');
    }

    const postDelete = (id) => {
        console.log(`post ${id} deleted`);
    }

    const sortPosts = () => {
        if (posts) {
            let sPosts = posts.filter((post) => (post.name.toUpperCase().includes(postQuery.toUpperCase()) || post.content.toUpperCase().includes(postQuery.toUpperCase())))
            setSortedPosts(sPosts);
        }
    }

    useEffect(() => {
        sortPosts();
    }, [postQuery, posts]);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div style={{display: "flex", justifyContent: "center"}}>
                <PostCreateForm postName={postName}
                                setPostName={setPostName}
                                postContent={postContent}
                                setPostContent={setPostContent}
                                createNewPost={createNewPost}></PostCreateForm>
                <PostList posts={sortedPosts}
                          postDelete={postDelete}
                          fetchPosts={fetchPosts}></PostList>
                <PostSearch type="text" placeholder="Поиск..."
                       setPostQuery={setPostQuery}
                       postQuery={postQuery}
                ></PostSearch>
            </div>
        </AuthenticatedLayout>
    );
}

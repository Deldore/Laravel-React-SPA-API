import React from 'react';
import Post from "@/Components/Post.jsx";

const PostList = (props) => {
    return (
        <div style={{padding: "15px 25px"}}>
            {props.posts.map((post) => (
                <Post post={post} key={post.id}
                      postDelete={props.postDelete}
                      fetchPosts={props.fetchPosts}
                      ></Post>
            ))}
        </div>
    );
};

export default PostList;

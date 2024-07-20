import React from 'react';

const Post = (props) => {
    const postDelete = async (id) => {
        const response = await axios.delete(`/posts/${id}`);
        props.fetchPosts();
    }

    return (
        <div style={{padding: "5px 5px", marginBottom: "15px", background: "#DDD", width: "300px"}}>
            <div>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <h1>{props.post.id}. {props.post.name}</h1>
                    <a href="#" onClick={() => postDelete(props.post.id)}>Удалить</a>
                </div>
                <p>{props.post.content}</p>
            </div>
        </div>
    );
};

export default Post;

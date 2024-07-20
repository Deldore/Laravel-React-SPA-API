import React from 'react';

const PostSearch = (props) => {
    return (
        <div style={{marginTop: "25px"}}>
            <input type="text" placeholder="Поиск..."
                   onChange={(e) => props.setPostQuery(e.target.value)}
                   value={props.postQuery}
            />
        </div>
    );
};

export default PostSearch;

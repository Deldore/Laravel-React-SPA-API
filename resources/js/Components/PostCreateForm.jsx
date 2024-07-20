import React from 'react';

const PostCreateForm = (props) => {
    return (
        <div>
            <form style={{contentAlign: "center"}}>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Название поста</label> <br/>
                    <input type="text" className="form-control"
                           placeholder="" value={props.postName}
                           onChange={(e) => props.setPostName(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Содержимое</label> <br/>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                              onChange={(e) => props.setPostContent(e.target.value)}
                              value={props.postContent}>
                        </textarea>
                </div>
                <button style={{background: "#7AF", margin: "15px 0", padding: "5px 15px", borderRadius: "5px"}}
                        onClick={props.createNewPost}>Создать
                </button>
            </form>
        </div>
    );
};

export default PostCreateForm;

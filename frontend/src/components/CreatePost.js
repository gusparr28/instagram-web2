import React from 'react';

const CreatePost = () => {
    return (
        <div className="card input-field">
            <input type="text" placeholder="Title" />
            <input type="text" placeholder="Description" />
            <div className="file-field input-field">
                <div className="btn #42a5f5 blue darken-1">
                    <span>Search image</span>
                    <input type="file" required />
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                </div>
            </div>
            <button className="btn waves-effect waves-light #42a5f5 blue darken-1">
                Upload post
            </button>
        </div>
    );
};

export default CreatePost;
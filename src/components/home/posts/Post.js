import axios from "axios";
import React from "react";
import { useState } from "react";
import { createPost } from "../../../APIs/APIs";
import '../../../styles/post.css';

const Post = ({ user, setPosts }) => {

    const [content, setContent] = useState('');
    const [images, setImages] = useState('');

    const uploadImg = (e) => {
        setImages(e.target.files[0]);
        console.log(images)
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('content', content);
        formData.append('images', images);
        setContent('');
        setImages('');

        axios.post(createPost, formData)
            .then((res) => {
                console.log(res.data)
                setPosts(prev =>[res.data.newPost,...prev])
            }).catch((e) => console.log(e));
    };

    return (
        <div className="createPost">
            <form className="body" onSubmit={handleSubmit} encType='multipart/form-data'>
                <img src={user.avatar} className="avatar" alt="" />
                <textarea
                    className="content"
                    placeholder={`Whats On Your Mind , ${user.firstName}`}
                    value={content}
                    required={images.length > 0 ? false : true}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <button> Post</button>
            </form>
            <div className="media">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-images" viewBox="0 0 16 16">
                    <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z" />
                </svg>
                <label className="selectImg">
                    Add Photo
                    <input
                        className="img"
                        type="file"
                        filename='images'
                        accept="image/*"
                        onChange={uploadImg}
                    />
                </label>
            </div>
            <div className="album">
                {images && <img src={images.name} alt="" />}
            </div>

        </div>
    );
}

export default Post;

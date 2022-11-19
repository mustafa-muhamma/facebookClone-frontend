import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { createPost } from "../../../APIs/APIs";
import '../../../styles/post.css';

const Post = ({ user, header }) => {

    const [content, setContent] = useState('');
    const [images, setImages] = useState([]);
    const [imagesUrl, setImagesUrl] = useState([]);
    const post = { content, images };
    const ref = React.useRef();


    const handleSubmit = () => {
        axios.post(createPost, post, header)
            .then((res) => {
                setContent('');
                setImagesUrl([]);
                setImages([])
            }).catch((e) => console.log(e));
    };

    useEffect(() => {
        if (images.length < 1) return;
        const newImagesUrl = [];
        images.forEach((image) => newImagesUrl.push(URL.createObjectURL(image)));
        setImagesUrl(newImagesUrl);
    }, [images]);

    const uploadImg = (e) => {
        setImages([...e.target.files]);
    };

    return (
        <div className="createPost">
            <form className="body">
                <img src={user.avatar} className="avatar" alt="" />
                <textarea
                    className="content"
                    placeholder={`Whats On Your Mind , ${user.firstName}`}
                    value={content}
                    required={images.length>0 ?false:true}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <button onClick={handleSubmit}> Post</button>
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
                        multiple
                        accept="image/*"
                        onChange={uploadImg}
                        ref={ref}
                    />
                </label>
            </div>
            <div className="album">
                {images && imagesUrl.map((imageUrl, index) => (
                    <img src={imageUrl} alt="not found" key={index} />
                ))}
            </div>

        </div>
    );
}

export default Post;

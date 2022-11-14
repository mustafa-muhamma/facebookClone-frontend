import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { createPost } from "../../../APIs/APIs";
import '../../../styles/post.css';

const Post = ({ user, setPostView, postView, header }) => {

    const [content, setContent] = useState('');
    const [images, setImages] = useState([]);
    const [imagesUrl, setImagesUrl] = useState([]);
    const post = { content, images };
    const ref = React.useRef();


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(createPost, post, header)
            .then((res) => {
                console.log(res.data)
                console.log(post)
            }).catch((e) => console.log(e));
        setPostView(false);
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
        <div className="post">
            <button className="closeBtn" onClick={() => setPostView(false)}>X</button>
            <form action="" onSubmit={handleSubmit}>
                <textarea
                    className="textarea"
                    autoFocus={postView ? true : false}
                    placeholder={`Whats On Your Mind , ${user.firstName}`}
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                >
                </textarea>
                <div className="btnn">
                    <label className="label">
                        Upload Img
                        <input
                            className="uploadImg"
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={uploadImg}
                            ref={ref}
                        />
                    </label>
                    <button type="submit" className="submit">post</button>
                </div>
            </form>

            {images && imagesUrl.map((imageUrl) => (
                <img src={imageUrl} alt="not fount" key={imageUrl} />
            ))}
        </div>
    );
}

export default Post;

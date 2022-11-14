import React from "react";
import { useState } from "react";
import '../../styles/post.css';

const Post = ({ user, setPostView, postView }) => {

    const [body, setBody] = useState('');
    const [img, setImg] = useState(null);
    const id = user._id;
    const post = { body, img, id };
    const ref = React.useRef();

    function handleValue() {
        ref.current.value = '';
        setImg();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(post);
        setBody('');
        handleValue();
        setPostView(false)
    };

    const uploadImg = (e) => {
        const [file] = e.target.files;
        setImg(URL.createObjectURL(file));
    };


    return (
        <div className={img ? "viewImg" : "post"}>
            <button className="closeBtn" onClick={() => setPostView(false)}>X</button>
            <form action="" onSubmit={handleSubmit}>
                <textarea
                    className="textarea"
                    autoFocus={postView?true:false}
                    placeholder={`Whats On Your Mind , ${user.username}`}
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                >
                </textarea>
                <div className="btnn">
                    <label className="label">
                        Upload Img
                        <input
                            className="uploadImg"
                            placeholder="hhhhhhhhh"
                            type="file"
                            accept="image/*"
                            onChange={uploadImg}
                            ref={ref}
                        />
                    </label>
                    <button type="submit" className="submit">post</button>
                </div>
            </form>
            <div className="img">
                {img ? <button className="closeBtn" onClick={handleValue}>X
                    <img src={img} alt="" /> <br />
                </button> : null}
            </div>
        </div>
    );
}

export default Post;

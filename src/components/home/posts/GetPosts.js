import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getPosts } from "../../../APIs/APIs";
import '../../../styles/post-card.css'
import PostButtons from "./PostButtons";
const GetPosts = ({ user }) => {
    const [posts, setPosts] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [page, setPage] = useState(1);
    const [prevY, setPrevY] = useState(0);

    let pageRef = useRef({});
    pageRef.current = page;

    let postsRef = useRef({});
    postsRef.current = posts;

    let prevYRef = useRef({});
    prevYRef.current = prevY;

    let fetchingRef = useRef(null);

    const post = () => {
        axios.get(getPosts + pageRef.current)
            .then((res) => {
                if (res) {
                    setPosts([...postsRef.current, ...res.data.posts])
                    setIsFetching(false);
                    console.log(res.data.posts)
                }

            }).catch((e) => {
                console.log('ERROR GETTING POSTS', e);
            });
    };

    useEffect(() => {
        post();
        setPage(pageRef.current + 1)

        let options = {
            root: null,
            rootMargin: "0px",
            threshold: .8,
        };

        const observer = new IntersectionObserver(handleObserver, options);
        observer.observe(fetchingRef.current);
    }, []);

    const handleObserver = (entities) => {
        const y = entities[0].boundingClientRect.y;
        if (prevYRef.current > y) {
            post();
            setPage(pageRef.current + 1)
            setIsFetching(false)
        } else {
            setIsFetching(true);
        };
        setPrevY(y)
    }

    return (
        <div className="post-card">
            {posts.map((post, index) => (
                <div key={index} className="post-container">
                    <div className="user-inf">
                        <img className="avatar" src={post.userId.avatar} alt="" />
                        <Link to={`/profile/${post.userId._id}`} className="names">
                            <h3 className="fullName">{post.userId.firstName} {post.userId.lastName}</h3> <br />
                            <span className="userName">@{post.userId.username}</span>
                        </Link>
                    </div>
                    <div className="post-body">
                        <h4 className="cont">{post.content}</h4>
                        {post.images && <img src={`./uploads/${post.images}`} alt="" />  }
                    </div>
                    <PostButtons user={user} post={post} />
                </div>
            ))}
            <div
                style={{ height: '50px', margin: '25px' }}
                ref={fetchingRef}
            >
                <span style={{ display: isFetching ? "block" : "none" }}>Loading...</span>
            </div>
        </div>
    );
}

export default GetPosts;

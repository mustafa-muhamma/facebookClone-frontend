import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { getPosts } from "../../../APIs/APIs";
import '../../../styles/post-card.css'
import PostCard from "./PostCard";

const GetPosts = ({ user, posts, setPosts }) => {
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
                    setPosts([...postsRef.current, ...res.data.posts])
                    setIsFetching(false);
                    console.log(res.data.posts)
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
        <div className="post-container">
            {posts.map((post, index) => (
                <PostCard key={index} post={post}  user={user}/>
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

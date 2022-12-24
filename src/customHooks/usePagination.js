import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function usePagination(endPoint) {

    const [posts, setPosts] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [firstRender, setFirstRender] = useState(false)
    const [page, setPage] = useState(1);
    const [prevY, setPrevY] = useState(0);

    let pageRef = useRef({});
    pageRef.current = page;

    let prevYRef = useRef({});
    prevYRef.current = prevY;

    let fetchingRef = useRef(null);
    let postsRef = useRef({});
    postsRef.current = posts;

    const post = () => {
        axios.get(endPoint + pageRef.current)
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
        setFirstRender(true)
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
            setPage(pageRef.current + 1);
            setIsFetching(false);
        } else {
            setIsFetching(true);
        };
        setPrevY(y)
    }

    return { posts, setPosts, isFetching, fetchingRef, pageRef, setIsFetching, firstRender }
}

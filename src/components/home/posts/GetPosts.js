import { getPosts } from "../../../APIs/APIs";
import usePagination from "../../../customHooks/usePagination";
import '../../../styles/post-card.css'
import Loading from "../../common/Loading";
import PostCard from "./PostCard";

const GetPosts = ({ user }) => {

    const { isFetching, fetchingRef, posts } = usePagination(getPosts);

    return (
        <div className="post-container">
            {posts.map((post, index) => (
                <PostCard key={index} post={post} user={user} />
            ))}
            <Loading fetchingRef={fetchingRef} isFetching={isFetching} />
        </div>
    );
}

export default GetPosts;

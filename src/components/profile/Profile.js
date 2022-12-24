import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { getUser, userPosts } from "../../APIs/APIs";
import MainContext from "../../contexts/MainContext";
import usePagination from "../../customHooks/usePagination";
import '../../styles/profile.css'
import Loading from "../common/Loading";
import Post from "../home/posts/Post";
import PostCard from "../home/posts/PostCard";
import ProfileInfo from "./profiles/ProfileInfo";
import ProfileIntro from "./profiles/ProfileIntro";

const Profile = () => {
    const { userData } = useContext(MainContext);
    const [currentUser, setCurrentUser] = useState(false);
    const [userInf, setuserInf] = useState('');

    const user = JSON.parse(userData);
    const { _id } = useParams();

    const get = () => {
        axios.get(`${getUser}/${_id}`)
            .then(res => {
                console.log(res.data);
                setuserInf(res.data.user);
            });
        if (firstRender) {
            axios.get(`${userPosts}${_id}`)
                .then(res => {
                    console.log(res.data.posts);
                    setPosts(res.data.posts)
                    setIsFetching(false)
                })
        }
    };
    const { setIsFetching, isFetching, fetchingRef, posts, setPosts, firstRender }
        =
        usePagination(`${userPosts}${_id}?page=`);

    useEffect(() => {
        if (_id === user._id) {
            setCurrentUser(true);
        } else {
            setCurrentUser(false)
        };
        get()
    }, [_id]);

    return (
        <div className="profile-container">
            <ProfileInfo
                userInf={userInf}
                currentUser={currentUser}
                id={_id}
                user={user}
            />

            <div className="profileBody">
                <ProfileIntro userInf={userInf} />
                <div className="profile-Posts">
                    {currentUser &&
                        <div className="makePost">
                            <Post user={user} />
                        </div>}
                    {posts.map((post, index) => (
                        <PostCard key={index} post={post} user={user} />
                    ))}
                </div>
            </div>
            <Loading isFetching={isFetching} fetchingRef={fetchingRef} />
        </div>
    );
}

export default Profile;

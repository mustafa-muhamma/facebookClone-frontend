import axios from "axios";
import { useEffect , useState} from "react";
import { getUser } from "../../../APIs/APIs";

const ProfileInfo = ({ currentUser, userInf, id, user }) => {
    const [following, setFollowing] = useState(false);


    useEffect(() => {
        user.following.map(follower => {
            if (follower._id === id) {
                setFollowing(true)
            } 
        })
    }, [id]);

    const handleFollow = () => {
        if (following === false) {
            axios.patch(`${getUser}${id}/follow`)
                .then(res => {
                    setFollowing(true);
                    // setLikes(prevLikes => prevLikes + 1);
                    console.log(res.data);
                }).catch(e => {
                    console.log(e);
                })
        } else if (following === true) {
            axios.patch(`${getUser}${id}/unFollow`)
                .then(res => {
                    setFollowing(false);
                    console.log(res.data);
                    // setLikes(prevLikes => prevLikes - 1);
                });
        };

    };

    return (
        <div className="profileInfo">
            <img className="cover" src='https://i.pinimg.com/736x/f1/83/bb/f183bb2c1ce0f9d752919ef4067fe52d--photo-timeline-facebook-timeline.jpg' alt="" />
            <div className="main-inf">
                <div className="specificInf">
                    <img className="avatar" src={userInf.avatar} alt="" />
                    <div className="name">
                        <h1 className="fullName">{userInf.firstName} {userInf.lastName}</h1>
                        <p className="userName">@{userInf.username}</p>
                    </div>
                </div>
                {currentUser && <button className="editProfile"> Edit Profile</button>}
                {!currentUser &&
                    <button className={following ? 'unFollow' : 'follow'} onClick={handleFollow}>{following && 'UnFollow'}
                        {!following && 'Folllow'}
                    </button>
                }
            </div>
        </div>
    );
}

export default ProfileInfo;

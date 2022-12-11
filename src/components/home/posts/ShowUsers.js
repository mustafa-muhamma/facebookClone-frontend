import { Link } from "react-router-dom";

const ShowUsers = ({ users, showLikes }) => {
    return (
        <>

            {showLikes &&
                <Link to={`/profile/${users._id}`} className="user">
                    <img src={users.avatar} alt="" />
                    <div className="user-data">
                        <span> {`${users.firstName} ${users.lastName}`}</span>
                        <p>{'@' + users.username}</p>
                    </div>
                </Link>
            }
        </>
    );
}

export default ShowUsers;

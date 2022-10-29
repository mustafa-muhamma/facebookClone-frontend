import { Link } from "react-router-dom";

const UsersCard = ({result,showResult}) => {
    return ( 
        <div key={result._id}>
        {showResult && <Link to={`/profile/${result._id}`} className="user-card">
            <img src={result.avatar} alt="" />
            <div className="info">
                <span> {`${result.firstName} ${result.lastName}`}</span>
                <p>{'@' + result.username}</p>
            </div>
        </Link>
        }
    </div>
     );
}
 
export default UsersCard;

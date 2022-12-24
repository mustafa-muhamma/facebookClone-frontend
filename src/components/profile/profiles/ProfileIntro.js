const ProfileIntro = ({userInf}) => {

    return (  
        <div className="about">
        <h1 className="intro">Intro</h1>
        <span className="bio"><h2>Bio</h2>{userInf.bio}</span> <br />
        <span className="gender">Gender:{userInf.gender}</span> <br />
        <span className="adress">Adress:{userInf.adress}</span> <br />
        <span className="followers">Following: {userInf.following?.length}</span> <br />
        <span className="following">Followers:  {userInf.followers?.length}</span> <br />
    </div>
    );
}
 
export default ProfileIntro;

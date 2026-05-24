const UserProfile=({name,role,experience})=>{
    return(
        <div className="profile-Card">
            <h1>Welcome Back, {name}!</h1>
            <p>Roles :{role}</p>
            <p>Experience :{experience}</p>
        </div>
    );
};

export default UserProfile;
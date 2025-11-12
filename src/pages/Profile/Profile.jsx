import { useAuth } from "../../provider/AuthProvider";
import { Link, useNavigate } from "react-router";

const Profile = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  return currentUser ? (
    <div className="w-9/12 m-10 p-10">
      <div className="m-20 p-2 flex flex-1 justify-center items-center">
        {currentUser?.photoURL &&
        (currentUser.photoURL != "none" || currentUser.photoURL !== "") ? (
          <img
            src={currentUser.photoURL}
            alt="User Profile"
            style={{ borderRadius: "50%", width: "250px", height: "250px" }}
          />
        ) : (
          <img
            src="https://i.postimg.cc/sgTjvgz5/default-Avatar.jpg"
            alt="User Profile"
            style={{ borderRadius: "50%", width: "250px", height: "250px" }}
          />
        )}
        <div className="p-2">
          <h1 className="text-3xl">
            <strong>Display name: </strong>
            {currentUser.displayName}
          </h1>
          <h1 className="text-3xl">
            <strong>Email: </strong>
            {currentUser.email}
          </h1>
          <h1 className="text-3xl">
            <strong>Last Signin: </strong>
            {currentUser.metadata.lastSignInTime}
          </h1>
        </div>
        <div className="w-2/5 flex flex-1 flex-col">
          <button>Display Jobs I Applied</button>
          <br />
          <Link to="/jobs-i-added">
            <button>Display Jobs I Added</button>
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <>{navigate("/")}</>
  );
};

export default Profile;

import { FaRegRegistered } from "react-icons/fa";
import { LuLogIn } from "react-icons/lu";
import myBackgroundImage from "../../assets/marten-bjork-6dW3xyQvcYE-unsplash.jpg";
import ShinyText from "../ShinyText/ShinyText";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "../../provider/AuthProvider";
import { toast, Bounce } from "react-toastify";
import { FaCircleCheck } from "react-icons/fa6";
import { SiApostrophe } from "react-icons/si";

const LoginAndSignup = () => {
  const { currentUser, googleLogin } = useAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async (event) => {
    event.preventDefault();
    googleLogin()
      .then((result) => {
        console.log(result);
        toast("🦄 Welcome to the community!", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        navigate(`${location.state ? location.state : "/"}`, {
          state: { loginSuccess: true },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div
      style={{
        backgroundImage: `url(${myBackgroundImage})`,
        backgroundSize: "cover", // Optional: adjust as needed
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat", // Optional: adjust as needed
        height: "93vh", // Example: set a height for the div
        width: "w-full", // Example: set a width for the div
      }}
      className="flex flex-col justify-center items-center"
    >
      <div className="flex flex-col justify-center items-center gap-y-3">
        {currentUser ? (
          <div className="flex flex-1 flex-col justify-center items-center gap-y-5">
            <h1 className="title-text text-center sm:text-2xl md:text-7xl font-semibold">
              <ShinyText
                text="Explore the Infinite opportunities"
                disabled={false}
                speed={3}
                className="custom-class"
              />
            </h1>
            <button className="btn btn-primary ">
              {" "}
              <Link to="">
                <p className="flex flex-1 gap-1 title-text font-bold">
                  <FaCircleCheck size={24} className="text-blue-900" /> Jobs I
                  applied
                </p>
              </Link>
            </button>
            <button className="btn btn-primary ">
              <Link to="/jobs-i-added">
                <p className="flex flex-1 gap-1 title-text font-bold">
                  <SiApostrophe size={24} className="text-blue-900" /> Jobs I
                  posted
                </p>
              </Link>
            </button>
          </div>
        ) : (
          <h1 className="title-text sm:text-3xl md:text-6xl font-bold">
            <ShinyText
              text="Why wait? Join ASAP!"
              disabled={false}
              speed={3}
              className="custom-class"
            />
          </h1>
        )}
        {!currentUser && (
          <button
            className="btn btn-primary bg-[#dd921a]"
            onClick={handleGoogleSignIn}
          >
            <FcGoogle size={36} /> Login with Google
          </button>
        )}
        {!currentUser && (
          <Link to="/auth/login">
            <button className="btn btn-primary">
              <p className=" text-white text-md font-semibold flex justify-center items-center gap-2">
                <LuLogIn size={32} /> Login (Email/Password)
              </p>
            </button>
          </Link>
        )}
        {!currentUser && (
          <Link to="/auth/register">
            <button className="btn btn-primary">
              <p className="text-white text-md font-semibold flex justify-center items-center gap-2">
                {" "}
                <FaRegRegistered size={32} /> Register Yourself
              </p>
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default LoginAndSignup;

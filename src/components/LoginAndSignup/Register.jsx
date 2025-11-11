import React from "react";
import { Link, useLocation, useNavigate } from "react-router";

import hero from "../../assets/christin-hume-Hcfwew744z4-unsplash.jpg";
import { toast } from "react-toastify";
import { useAuth } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

//import useDynamicPageTitle from "./DynamicPageTitle";

const Register = () => {
  //   useDynamicPageTitle("Register");
  const { setCurrentUser, signup, update } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\\^\\$&@#]).{6,}$/;

  const handleRegistration = async (e) => {
    e.preventDefault();

    const newUser = e.target;
    const name = newUser.name.value;

    if (name.length < 5) {
      toast.error("Name should be more then 5 character");
      return;
    }
    const photoURL = newUser.photo.value;
    const email = newUser.email.value;
    const password = newUser.password.value;

    if (!passwordPattern.test(password)) {
      toast.error(
        "The password must be at least 6 characters or longer, contain one upper case, one lower case character, at least one digit and one special character like ^$&@#"
      );
      return;
    }

    // if (!terms) {
    //   toast("Please accept our terms and conditions");
    //   return;
    // }
    //console.log({ name, photoURL, email, password });

    signup(email, password)
      .then((res) => {
        const user = res.user;
        update({ displayName: name, photoURL: photoURL })
          .then(() => {
            setCurrentUser(user);

            //toast("Excellent! Registration went through successfully");
            //try-catch to add a new user

            const userData = { name, email, photoURL };
            fetch("http://localhost:3000/users", {
              method: "POST", // The HTTP method
              headers: {
                "content-type": "application/json", // Inform the server that the body is JSON
              },
              body: JSON.stringify(userData), // The data to send, converted to a JSON string
            })
              .then((res) => res.json())
              .then((result) => {
                //console.log("after saving user: ", result);
                if (result.insertedId) {
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title:
                      "Registration went through successfully and your account has been created. Enjoy",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  //alert("A new user is successfully added");
                  userData._id = result.insertedId;
                  //const updatedUsers = [...users, userData];
                  //setUsers(updatedUsers);
                  e.target.reset();
                }
              });
          })
          .catch((error) => {
            toast("Something is not right...please try again", error);
            return;
          });
      })
      .catch((e) => {
        toast.error(e.mess);
      });
    navigate("/", {
      state: { loginSuccess: true, registrationSuccess: true },
    });
  };

  return (
    <div
      style={{
        backgroundImage: `url(${hero})`,
      }}
      className="hero flex flex-col bg-base-100 h-[90vh] p-10"
    >
      <div className="text-center lg:text-left p-5">
        <h1 className="text-6xl font-bold title-text">Register Yourself</h1>
      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleRegistration}>
            <fieldset className="fieldset space-y-2 text-black">
              <label className="label text-blue-700 font-bold text-lg">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Your name here"
                required={true}
              />

              <label className="label  text-blue-700 font-bold text-lg">
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                className="input"
                placeholder="photo url"
                defaultValue={
                  "https://i.postimg.cc/QdmMrMPn/pngtree-cartoon-user-avatar-vector-png-image-17295195.png"
                }
              />

              <label className="label  text-blue-700 font-bold text-lg">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                required={true}
              />
              <label className="label  text-blue-700 font-bold text-lg">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
                required={true}
              />

              <button type="submit" className="btn mt-4 btn-accent bg-blue-400">
                <h2 className="font-bold text-xl title-text">Register</h2>
              </button>
            </fieldset>
          </form>
          <Link to="/auth/login">
            <p className="text-black">
              Already have an account? Please{" "}
              <span className="text-bold  subtitle-text">login</span> first
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;

import { useContext } from "react";
import AuthContext from "../../context/authContext/AuthContext";

const SocialLogin = () => {
  const { googleSign } = useContext(AuthContext);
  const handleGoogleSingIn = () => {
    googleSign()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.log(error.massage));
  };
  return (
    <div>
      <div className="divider">OR</div>
      <div className="flex justify-center my-6">
        <button
          onClick={handleGoogleSingIn}
          className="rounded-full bg-green-500 px-4 py-2 text-xl"
        >
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;

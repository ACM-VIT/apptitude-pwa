import React from "react";

// Assets
import googleLogo from "../../assets/images/googleLogo.svg";
import appleLogo from "../../assets/images/appleLogo.svg";

const loginSection = () => {
  const googleHandler = () => {
    console.log("Login button clicked");
  };
  const appleHandler = () => {
    console.log("Login button clicked");
  };

  return (
    <div className="">
      <div className="my-48 text-white text-3xl text-center xxs:mx-2">
        Gallery Incoming
      </div>
      <div className="flex justify-center items-center">
        <div className="absolute bottom-10">
          <div className="flex flex-col items-center justify-center mx-2">
            <div
              onClick={googleHandler}
              className="flex w-96 xxs:w-80 xxs:px-6 h-14 rounded-md google mb-6 cursor-pointer"
            >
              <img
                className="pl-6 pr-20 xxs:pl-4 xxs:pr-10"
                src={googleLogo}
                alt="Google"
              />
              <button
                className="font-400 text-base text-white pr-28 xxs:pr-12"
                type="submit"
              >
                Sign in with Google
              </button>
            </div>
            <div
              onClick={appleHandler}
              className="flex w-96 h-14 xxs:w-80 xxs:px-6 rounded-md bg-white mb-10 cursor-pointer"
            >
              <img
                className="pl-6 pr-20 xxs:pl-4 xxs:pr-10"
                src={appleLogo}
                alt="Apple"
              />
              <button className="font-400 text-base xxs:pr-12" type="submit">
                Sign in with Apple
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default loginSection;

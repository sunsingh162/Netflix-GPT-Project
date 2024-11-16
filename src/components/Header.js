import React, { useEffect, useRef, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/slices/userSlice";
import { APP_LOGO, LANGUAGE_CODE } from "../utils/constants/constants";
import { toggleHomePage } from "../utils/slices/gptSlice";
import HeaderHide from "./subComponents/HeaderHide";
import { changeConfig } from "../utils/slices/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const [headerhide, setHeaderHide] = useState(true);
  const imgRef = useRef();
  const configLang = useSelector((store) => store.config.lang);
	const handleConfigLang = (e) => {
		dispatch(changeConfig(e.target.value));
	};

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptHomePage = () => {
    dispatch(toggleHomePage());
  };

  return (
    <div className="fixed top-0 z-50 h-20 px-3 sm:px-[10%] filter flex justify-between items-center w-full bg-gradient-to-b from-black from-40% to-transparent">
      <div className="flex w-full justify-between">
      <Link to="/">
        <img
          onClick={handleGptHomePage}
          className="w-40 sm:w-48 contrast-200"
          src={APP_LOGO}
          alt="logo"
        />
      </Link>
      <div className="mt-5">
      <select
						name="language"
						className="max-h-11 sm:mr-4 outline-none py-2 ps-2 bg-black font-semibold border border-gray-400 rounded-md cursor-pointer text-white"
						onChange={handleConfigLang}
						value={configLang}
					>
						{LANGUAGE_CODE.map((lang) => (
							<option key={lang.name} value={lang.code}>
								{lang.name}
							</option>
						))}
					</select>
          </div>
          </div>
      {user?.photoURL && (
        <div
          className="relative flex justify-center place-items-center"
          onMouseOver={() => setHeaderHide(false)}
          onMouseLeave={() => setHeaderHide(true)}
        >
          <img
            ref={imgRef}
            className="w-10 h-10 ml-1 rounded-lg cursor-pointer sm:h-12 sm:w-12 contrast-200"
            src={user.photoURL}
            alt="userLogo"
          />
          {headerhide ? (
            <i className="h-3 ml-4 opacity-50 cursor-pointer fa-solid fa-sort-down"></i>
          ) : (
            <i className="h-3 ml-4 opacity-50 cursor-pointer fa-solid fa-sort-up"></i>
          )}
          <div
            className={
              headerhide
                ? "invisible opacity-0 scale-50 transition-all"
                : "inline-block opacity-100 scale-100 transition-all"
            }
          >
            <HeaderHide setHeaderHide={setHeaderHide} imgRef={imgRef} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

import React, { useContext } from "react";
import Logo from "./Logo";
import CustomLink from "./CustomLink";
import UserContext from "../context/userContext";

export default () => {
  const state = useContext(UserContext);
  return (
    <nav className="bg-gray-800 border-b border-gray-700Post Title 1Post Title 1 Post Title 1Post Title 1Post Title 1Post Title 1Post Title 1Post Title 1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-column items-center justify-between h-16">
          <div className="flex items-center justify-between w-full">
            <Logo />
            <div className="hidden md:block">
              <ul className="ml-4 flex items-center">
                {state.isLogin ? (
                  <>
                    <CustomLink name="Write" uri="/new-posts" />
                    <CustomLink
                      uri="/"
                      name="Log out"
                      onClick={() => {
                        state.logout();
                      }}
                      css="ml-4 px-3 py-2 rounded-md text-sm font-medium bg-red-500 text-white hover:bg-red-600"
                    />
                  </>
                ) : (
                  <>
                    <CustomLink name="Signin" uri="/sign-in" />
                    <CustomLink
                      name="Get started"
                      uri="/sign-up"
                      css="ml-4 px-3 py-2 rounded-md text-sm font-medium bg-green-700 text-white hover:bg-green-500"
                    />
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

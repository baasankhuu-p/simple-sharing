import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { AiOutlineComment } from "react-icons/ai";
import { textSubstr } from "../utils/getStr";
import { Link } from "react-router-dom";
const Item = ({ Title, auth, Banner, CreatedAt, _id }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className=" flex flex-1 flex-col justify-around bg-gray-700 rounded-md m-1 px-3">
      <div className="py-2">
        <img
          className="rounded-3xl w-8 h-8"
          src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
          alt=""
        />
      </div>
      <div className="h-12 text-gray-50 text-start font-medium">
        {textSubstr(Title, 55)}
      </div>
      <Link to={`post/${_id}`}>
        <img
          className="rounded-2xl hover:border hover:border-gray-500 w-full h-32"
          src={Banner}
        />
      </Link>
      <div className="w-full text-gray-500 underline py-1 text-xs text-right hover:text-gray-300">
        {CreatedAt.split("T")}
      </div>
      <div className="w-full flex flex-1 flex-row justify-between px-4 py-2">
        <button
          className=" p-2 hover:bg-gray-500 hover:rounded-3xl"
          onClick={() => setIsLiked(!isLiked)}
        >
          {isLiked ? (
            <FaHeart className="text-white text-base hover:text-gray-50" />
          ) : (
            <FaRegHeart className=" text-gray-500 text-base hover:text-gray-50" />
          )}
        </button>
        <button className="p-2 hover:bg-gray-500 hover:rounded-3xl">
          <AiOutlineComment className="text-gray-500  text-base hover:text-gray-50" />
        </button>
        <button className="p-2 hover:bg-gray-500 hover:rounded-3xl">
          <FiShare2 className="text-gray-500 text-base hover:text-gray-50" />
        </button>
      </div>
    </div>
  );
};

export default Item;

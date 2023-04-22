import React, { useEffect, useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { AiOutlineComment } from "react-icons/ai";
import { textSubstr } from "../utils/getStr";
import { Link } from "react-router-dom";
import { updatePost } from "../services/post";
const Item = (props) => {
  console.log(props._id);
  const [vote, setVote] = useState(props.vote);
  const [isLiked, setIsLiked] = useState(false);
  const voteUpdateHandler = (vote) => {
    // ...
    updatePost({ vote: vote }, props._id)
      .then((result) => console.log("okey vote"))
      .catch((err) => console.log(err.message));
  };
  useEffect(() => {
    if (vote > props.vote && !isLiked) {
      setVote(vote - 1);
    } else if (isLiked) {
      setVote(vote + 1);
    }
  }, [isLiked]);
  if (vote !== props.vote) {
    voteUpdateHandler(vote);
  }
  return (
    <div className="flex flex-1 flex-col justify-around bg-gray-700 rounded-md m-1 px-3 relative">
      <div className="py-2">
        <img
          className="rounded-3xl w-8 h-8"
          src={`/profile/${props.auth ? props.auth.photo : "no-image.webp"}`}
          alt=""
        />
      </div>
      <div className="h-12 text-gray-50 text-start font-medium">
        {textSubstr(props.Title, 55)}
      </div>
      <Link to={`post/${props._id}`}>
        <img
          className="rounded-2xl hover:border hover:border-gray-500 w-full h-32"
          src={props.Banner}
        />
      </Link>
      <div className="w-full text-gray-400 font-medium py-1 text-xs text-right hover:text-gray-200 cursor-pointer">
        {props.CreatedAt.split("T")[0].replaceAll("-", "/")}{" "}
        {props.CreatedAt.split("T")[1].split(":")[0]}h{" "}
        {props.CreatedAt.split("T")[1].split(":")[0]}m
      </div>
      <div className="w-full flex flex-1 flex-row justify-between px-4 py-2">
        <button
          className="  relative"
          onClick={() => {
            setIsLiked(!isLiked);
          }}
        >
          <div className="p-2 flex justify-betweemn items-center hover:bg-gray-500 hover:rounded-3xl ">
            {isLiked ? (
              <FaHeart className="text-white text-base hover:text-gray-50" />
            ) : (
              <FaRegHeart className=" text-gray-500 text-base hover:text-gray-50" />
            )}
          </div>
          <div className="absolute top-1 left-9 text-gray-400 hover:text-gray-50 font-medium">
            {vote}
          </div>
        </button>
        <button className=" p-2 hover:bg-gray-500 hover:rounded-3xl">
          <AiOutlineComment className="text-gray-500  text-base hover:text-gray-50" />
        </button>
        <button className=" p-2 hover:bg-gray-500 hover:rounded-3xl">
          <FiShare2 className="text-gray-500 text-base hover:text-gray-50" />
        </button>
      </div>
    </div>
  );
};

export default Item;

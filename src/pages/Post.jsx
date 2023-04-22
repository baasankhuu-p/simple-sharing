import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getPost } from "../services/post";

export default () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (id) {
      getPost(id)
        .then((response) => {
          setData(response.data.data);
          console.log(data);
        })
        .catch((err) => console.log(err));
    }
  }, []);
  return (
    <>
      <Navbar />
      {data && (
        <div className="flex mx-10 mt-10 mb-20">
          <div className="w-3/4 mx-10 border-gray-100  p-10 border-2 rounded-md">
            <div className="text-gray-600 text-5xl m-5 font-medium text-left">
              {data.Title}
            </div>
            <div className="flex flex-row items-center my-2 hover:cursor-pointer">
              <img
                onClick={() => {}}
                className="w-16 h-16 rounded"
                src={`/profile/${data ? data.auth.photo : "no-image.webp"}`}
              />
              <div className="">
                <div className=" text-lg text-gray-800 capitalize font-medium">
                  {data.auth.username}
                </div>
                <div className=" text-sm text-gray-400">
                  {data.CreatedAt.split("T")[0].replaceAll("-", "/")} {"     "}
                  {data.CreatedAt.split("T")[1].split(":")[0]}h{" "}
                  {data.CreatedAt.split(":")[1]}m ·
                </div>
              </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
          </div>
          <div className="w-1/4 bg-gray-100">123123</div>
        </div>
      )}
      <Footer />
    </>
  );
};

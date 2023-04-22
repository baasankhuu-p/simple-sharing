import React, { useRef, useState, useEffect, useContext } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/userContext";
import { createPost } from "../services/post";
export default () => {
  const editorRef = useRef(null);
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);
  const [banner, setBanner] = useState(null);
  const [posturl, setPostUrl] = useState(null);
  const state = useContext(UserContext);
  const navigate = useNavigate();
  function handleEditorChange(content, editor) {
    setContent(content);
  }

  const Postsend = () => {
    if (!title || !content || !banner || !posturl) {
      state.setToastMsg("Та мэдээллээ бүрэн бөглөнө үү");
    } else {
      const post = {
        Title: title,
        Banner: banner,
        content: content,
        url: posturl,
      };
      createPost(state.token, post)
        .then((res) => {
          state.setToastMsg("Мэдээллийг амжилттай илгээлээ. ");
          navigate("/", { replace: true });
        })
        .catch((err) => {
          state.setToastMsg(
            "Пост илгээх явцад алдаа гарлаа" + err.response.data.message
          );
        });
    }
  };
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 my-2">
            <input
              className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-50 rounded shadow"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="w-full px-3 my-2">
            <input
              className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-50 rounded shadow"
              placeholder="Banner url: https://www.example.com/"
              value={banner}
              onChange={(e) => setBanner(e.target.value)}
            />
          </div>
          <div className="w-full px-3 my-2">
            <input
              className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-50 rounded shadow"
              placeholder="Post: https://www.post.com/"
              value={posturl}
              onChange={(e) => setPostUrl(e.target.value)}
            />
          </div>
          <div className="w-full p-3">
            <Editor
              apiKey="7i1nph8bqytxrxnxy7m8tdiauos1lncx3gpcw7bgiz693hhm"
              onInit={(evt, editor) => (editorRef.current = editor)}
              init={{
                placeholder: "Post type here...",
                selector: "textarea#premiumskinsandicons-outside",
                skin: "outside",
                icons: "small",

                plugins:
                  "preview powerpaste casechange importcss tinydrive searchreplace autolink autosave directionality advcode visualblocks visualchars fullscreen image link media mediaembed codesample nonbreaking insertdatetime advlist lists checklist wordcount tinymcespellchecker a11ychecker help formatpainter pageembed mentions quickbars linkchecker emoticons footnotes mergetags autocorrect",
                toolbar:
                  "undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | forecolor backcolor casechange permanentpen formatpainter removeformat  | fullscreen  preview  |emoticons insertfile image media pageembed link codesample | a11ycheck ltr rtl | showcomments addcomment | footnotes | mergetags",
                font_size_formats:
                  "8pt 10pt 12pt 14pt 16pt 18pt 24pt 36pt 48pt",
                codesample_languages: [
                  { text: "HTML/XML", value: "markup" },
                  { text: "JavaScript", value: "javascript" },
                  { text: "CSS", value: "css" },
                  { text: "Python", value: "python" },
                  { text: "Java", value: "java" },
                  { text: "C", value: "c" },
                  { text: "C#", value: "csharp" },
                  { text: "C++", value: "cpp" },
                ],
                menubar: false,
                statusbar: false,
                height: 500,
                image_advtab: true,
              }}
              onEditorChange={handleEditorChange}
            />
            <button
              onClick={Postsend}
              className={` mt-4 bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded`}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

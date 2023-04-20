import React, { useRef, useState, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default () => {
  const editorRef = useRef(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState(null);
  function handleEditorChange(content, editor) {
    setContent(content);
  }

  const logged = () => {
    if (content) {
      alert(content);
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
          <div className="w-full p-3">
            <Editor
              apiKey="haqnuuo8ld376ujryf5sygi8bmsuirj44hhmmvjkjjfedgjt"
              onInit={(evt, editor) => (editorRef.current = editor)}
              init={{
                placeholder: "Post type here...",
                selector: "textarea#premiumskinsandicons-outside",
                skin: "outside",
                icons: "small",
                plugins:
                  "lists code table codesample image media wordcount advlist emoticons",
                toolbar:
                  "blocks bold italic underline strikethrough wordcount numlist quote bullist| image link codesample emoticons",
                codesample_languages: [
                  { text: "HTML/XML", value: "markup" },
                  { text: "JavaScript", value: "javascript" },
                  { text: "CSS", value: "css" },
                  { text: "PHP", value: "php" },
                  { text: "Ruby", value: "ruby" },
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
              onClick={() => logged()}
              className={` mt-4 bg-gray-500 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded`}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

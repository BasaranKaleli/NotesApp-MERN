import React, { useState } from "react";
import TagInput from "../../components/Input/TagInput";
import { MdClose } from "react-icons/md";

const AddEditNotes = ({ noData, type, onClose }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [error, setError] = useState(null);

  const addNewNote = async () => {};

  const editNote = async () => {};

  const handleAddNote = () => {
    if (!title) {
      setError("Please enter the title");
      return;
    }

    if (!content) {
      setError("Please enter the content");
      return;
    }

    setError("");

    if (type === "edit") {
      editNote();
    } else {
      addNewNote();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-lg mx-auto">
        {/* Kapatma butonu */}
        <button
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 transition-colors"
          onClick={onClose}
        >
          <MdClose className="text-xl text-slate-400" />
        </button>

        {/* Başlık girişi */}
        <div className="flex flex-col gap-2 mb-4">
          <label className="input-label text-sm font-semibold text-gray-700">
            TITLE
          </label>
          <input
            type="text"
            className="text-xl text-gray-800 border border-gray-300 rounded-md p-3 outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all"
            placeholder="Go To Gym At 5"
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>

        {/* İçerik girişi */}
        <div className="flex flex-col gap-2 mb-4">
          <label className="input-label text-sm font-semibold text-gray-700">
            CONTENT
          </label>
          <textarea
            className="text-sm text-gray-800 border border-gray-300 rounded-md p-3 bg-slate-50 outline-none resize-none focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all"
            placeholder="Content"
            rows={8}
            value={content}
            onChange={({ target }) => setContent(target.value)}
          />
        </div>

        {/* Etiket girişi */}
        <div className="mt-4 mb-6">
          <label className="input-label text-sm font-semibold text-gray-700">
            TAGS
          </label>
          <TagInput tags={tags} setTags={setTags} />
        </div>

        {/* Hata mesajı */}
        {error && <p className="text-red-500 text-xs mt-2">{error}</p>}

        {/* Kaydet butonu */}
        <button
          className="btn-primary w-full py-2 px-4 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          onClick={handleAddNote}
        >
          {type === "edit" ? "UPDATE" : "ADD"}
        </button>
      </div>
    </div>
  );
};

export default AddEditNotes;

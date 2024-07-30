import React from "react";
import { MdOutlinePushPin, MdCreate, MdDelete } from "react-icons/md";

const NoteCard = ({
  title,
  date,
  content,
  tags,
  isPinned,
  onEdit,
  onDelete,
  onPinNote,
}) => {
  return (
    <div className="p-4 border rounded-md shadow-sm bg-white">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h6 className="text-sm font-medium">{title}</h6>
          <span className="text-xs text-slate-500">{date}</span>
        </div>
        <MdOutlinePushPin
          className={`cursor-pointer ${
            isPinned ? "text-yellow-500" : "text-gray-500"
          }`}
          onClick={onPinNote}
        />
      </div>
      <p className="text-gray-700 mb-2">
        {content?.slice(0, 60)}
        {content?.length > 60 ? "..." : ""}
      </p>
      <div className="text-xs text-slate-500 mb-2">
        {tags && tags}
        <div className="flex items-center gap-2 mt-2">
          {onEdit && (
            <MdCreate
              className="cursor-pointer hover:text-green-600"
              onClick={onEdit}
            />
          )}
          {onDelete && (
            <MdDelete
              className="cursor-pointer hover:text-red-500"
              onClick={onDelete}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default NoteCard;

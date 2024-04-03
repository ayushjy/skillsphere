import { Avatar } from "@mui/material"
import { useState, useEffect } from "react";
import { useAppSelector } from "@/lib/hooks";
import { doc, deleteDoc } from "firebase/firestore";
import { HiEllipsisVertical } from "react-icons/hi2";
import { AiOutlineDelete } from "react-icons/ai";
import { VscCopy } from "react-icons/vsc"; 
import db from './Firebase';
import { selectInput } from "@/lib/features/input/inputSlice";

const Message = ({ id, user, textmessages, timestamp,input}) => {
  const [showContextMenu, setShowContextMenu] = useState(false);  
  const selectChannelId = useAppSelector(state => state.app.channelId);
  const searchInput = useAppSelector(selectInput);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.message')) {
        setShowContextMenu(false);
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleRightClick = (e) => {
    e.preventDefault();
    setShowContextMenu(!showContextMenu)
  }

  const handleDeleteClick = async () => {
    setShowContextMenu(false);
    await deleteDoc(doc(db, 'channels', selectChannelId, 'messages', id));
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textmessages.toString());
      console.log("Text copied successfully!");
    } catch (error) {
      console.error("Failed to copy text:", error);
    }
  };
  

  return (
    <div className="message max-w-xl group relative bg-gray-700 mb-2 ml-1 rounded-md" >

      <Avatar src={user.photo} />
      <div className="message__info">
        <h4 className="text-xs">{user.displayName}<span className="message__timestamp">{new Date(timestamp?.toDate()).toUTCString()}</span></h4>
        {textmessages.filter((item) => {
          return !searchInput || searchInput.toLowerCase() === '' ? item : (typeof item === 'string' && item.toLowerCase().includes(searchInput));
        }).map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <div onClick={handleRightClick}><HiEllipsisVertical size={20} className="text-white cursor-pointer" /></div>
      {showContextMenu ? (
        <div
          className="absolute z-10 w-max flex flex-col   px-2 py-3 gap-3 text-sm text-white bg-gray-800 rounded-lg shadow-xl"
          style={{ top: '5%', left: '100%', transform: 'translateX(-50%)' }}>
          <div className="flex gap-1 justify-center items-center hover:rounded-md px-1 py-2 hover:bg-gray-700">
            <AiOutlineDelete size={22} />
            <button onClick={handleDeleteClick} className="w-full text-start  ">Delete Message</button>
          </div>
         
          <div onClick={handleCopy} className="flex gap-1 justify-center items-center hover:bg-gray-700 hover:rounded-md px-1 py-2">
            <VscCopy size={22} />
            <button className="w-full text-start">Copy</button>
          </div>
        </div>
      ) : ""}
    </div>
  )
};

export default Message

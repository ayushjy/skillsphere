import { MdDelete } from "react-icons/md";
import { useAppSelector } from "@/lib/hooks";
import { useAppDispatch } from "@/lib/hooks";
import { setChannelInfo } from "@/lib/features/channel/appSlice";
import { doc,updateDoc,deleteDoc } from "firebase/firestore";
import db from "./Firebase";

const SidebarChannel = ({ id, channelName }) => {
  const dispatch = useAppDispatch();
  const selectChannelId = useAppSelector(state => state.app.channelId);

  const handleDeleteButton = async (e) => {
    e.preventDefault();
    const userConfirmed = window.confirm("Are you sure you want to delete this channel?");
    if (userConfirmed) {
      await deleteDoc(doc(db, "channels", selectChannelId));
    }  }

  return (
    <div className="sidebarChannel" onClick={() => dispatch(setChannelInfo({
      channelId: id,
      channelName: channelName,
    }))}>

      <div className="flex justify-between items-center px-3 py-2 cursor-pointer  hover:bg-[#40464b] group">
        <div className="flex justify-center items-center text-gray-300 group-hover:text-white"><span className="sidebarChannel_hash">#</span>{channelName}</div>
        <div className="hidden group-hover:block "><MdDelete size={22} className="text-white" onClick={handleDeleteButton} /></div>
      </div>
    </div>
  )
}

export default SidebarChannel

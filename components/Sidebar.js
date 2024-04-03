import Link from 'next/link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import InfoOutLinedIcon from '@mui/icons-material/InfoOutLined';
import CallIcon from '@mui/icons-material/Call';
import MicIcon from '@mui/icons-material/Mic';
import HeadsetIcon from '@mui/icons-material/Headset';
import SettingsIcon from '@mui/icons-material/Settings';
import SidebarChannel from './SidebarChannel';
import { Avatar } from '@mui/material';
import { useSession } from "Next-auth/react"

const Sidebar = () => {
    const { data: session } = useSession()
    const [channels, setChannels] = useState([]);
    const userinfo = useAppSelector(selectUser);
    const selectChannelId = useAppSelector(state => state.app.channelId);
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handleAddChannel = async (e) => {
        e.preventDefault();
        const channelName = prompt("Add channel Name");
        if (channelName) {
            await addDoc(collection(db, "channels"), {
                channelName: channelName
            });
        }
    };

    

    return (
        
            <div>
                {session ? User({ session }) :null}
            </div>
        )
}
export default Sidebar

function User({session}){
    return(
        <div className='sidebar '>
            <div className="sidebar__top">
                <h3 className='bold'>TrickTalk</h3>
                <ExpandMoreIcon />
            </div>
            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon />
                        <h4>Text channels</h4>
                    </div>
                    <AddIcon onClick={handleAddChannel} className="sidebar__addChannel" />
                </div>

                <div className="sidebar__channelsList">
                    {channels.map((channel) => (
                        // console.log(channel),
                        <SidebarChannel key={channel.id} id={channel.id} channelName={channel.channel.channelName} />
                    ))}

                </div>
            </div>
            <div className="sidebar__voice">
                <SignalCellularAltIcon
                    className="sidebar__voiceIcon"
                    fontSize="large" />
                <div className="sidebar__voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>
                <div className="sidebar__voiceIcons">
                <IoIosInformationCircleOutline size={25}/>                    
                <CallIcon />
                </div>
            </div>
            <div className="sidebar__profile">
                <Avatar  src={session.user.image} />
                <div className="sidebar__profileInfo">
                    <h3>{session.user.name}</h3>
                    <p>{session.user.email}</p>
                </div>
                <div className="sidebar__profileIcons flex items-center">
                    <MicIcon />
                    <HeadsetIcon />
                    <div className="relative cursor-pointer text-sm"> 
                        <SettingsIcon
                            onMouseEnter={() => setIsPopupVisible(true)}
                            />
                        {isPopupVisible && (
                            <div
                            className="absolute z-10 w-20 text-center p-2 text-sm text-white bg-gray-800 rounded shadow-lg"
                            style={{ bottom: '100%', left: '50%', transform: 'translateX(-50%)', marginBottom: '0.5rem' }} 
                            onMouseLeave={() => setIsPopupVisible(false)}
                            onClick={() => auth.signOut()}
                            >
                                Logout
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    )
}


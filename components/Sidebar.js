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
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <h3 className='bold'>Skillsphere</h3>
                <ExpandMoreIcon />
            </div>
            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon />
                        <h4>Text channels</h4>
                    </div>
                    <AddIcon className="sidebar__addChannel" />
                </div>

                <div className="sidebar__channelsList">
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                </div>
            </div>
            <div className="sidebar__voice">
                <SignalCellularAltIcon
                className="sidebar__voiceIcon"
                fontSize="large"/>
                <div className="sidebar__voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>
                <div className="sidebar__voiceIcons">
                    <InfoOutLinedIcon/>
                    <CallIcon/>
                </div>
            </div>
            <div className="sidebar__profile">
                <Avatar src="https://wallpapercave.com/wp/wp5634726.jpg"/>
                <div className="sidebar__profileInfo">
                <h3>@ayushjyoti</h3>
                <p>#thisismyID</p>
                </div> 
                <div className="sidebar__profileIcons">
                    <MicIcon/>    
                    <HeadsetIcon/>
                    <SettingsIcon/>
                </div>                      
            </div>
        </div>
    )
}

export default Sidebar

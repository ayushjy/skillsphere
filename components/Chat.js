import ChatHeader from "./ChatHeader"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Message from "./Message";
const Chat = () => {
  return (
    <div className="chat">
        <ChatHeader/>
        <div className="chat__messages">
          <Message/>
          <Message/>
          <Message/>
          <Message/>
        </div>
        <div className="chat__input">
            <AddCircleIcon fontSize="large"/>
            <form>
                <input placeholder={`Message #TESTCHANNEL`} />
                <button className="chat__inputButton" type="submit">Send Message</button>
            </form>
            <div className="chat__inputIcons">
                <CardGiftcardIcon fontSize="large"/>
                <GifIcon fontSize="large"/>
                <EmojiEmotionsIcon fontSize="large"/>
            </div>
        </div>
    </div>
  )
}

export default Chat

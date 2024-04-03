import {useState , useEffect } from "react";
import ChatHeader from "./ChatHeader"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Message from "./Message";
import { setchannelName,selectChannelId } from "@/lib/features/channel/appSlice";
import db from "./Firebase";
import { getDocs, addDoc, collection, onSnapshot, serverTimestamp } from "firebase/firestore";
import { useAppSelector } from "@/lib/hooks";
import { selectUser } from "@/lib/features/user/userSlice";
const Chat = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);  
  const channelName = useAppSelector(setchannelName);
  const currentChannelId = useAppSelector(selectChannelId);
  const user = useAppSelector(selectUser);

  useEffect(() => {
    if (currentChannelId) {
      const unsubscribe = onSnapshot(collection(db, `channels/${currentChannelId}/messages`), (querySnapshot) => {
        const messageData = querySnapshot.docs.map((doc)=>
        ({id:doc.id,
        data:doc.data()}));
        setMessages(messageData);
      });
      return () => {
        unsubscribe();
    };   
  }
  setInput("");  
  }, [currentChannelId])

  const handleSendMessageClick = (e) => {
    e.preventDefault();
    sendMessage(currentChannelId);
  };
  
  const sendMessage = async (currentChannelId) => {
    await addDoc(collection(db, `channels/${currentChannelId}/messages`), {
      timestamp: serverTimestamp(),
      message: input,
      user: user,
    })
    setInput("");
  };



  return (
    <div className="chat">
      <ChatHeader channelName={channelName} />
     
      <div className="chat__messages">
      {messages.map((message) => (
          <Message 
          key={message.id}
          timestamp={message.data.timestamp}
          textmessages={[message.data.message]}
          user={message.data.user}
          id={message.id}
          input={input}
          />
      ))}
        </div>
      <div className="chat__input">
        <AddCircleIcon fontSize="large" />
        <form>
          <input placeholder={`Message ${channelName}`}
            value={input}
            disabled={!channelName}
            onChange={(e) => setInput(e.target.value)} />

          <button
            disabled={!channelName}
            onClick={
            handleSendMessageClick}
            className="chat__inputButton" type="submit">Send Message</button>
        </form>
        <div className="chat__inputIcons">
          <CardGiftcardIcon fontSize="large" />
          <GifIcon fontSize="large" />
          <EmojiEmotionsIcon fontSize="large" />
        </div>
      </div>
    </div>
  )
}

export default Chat

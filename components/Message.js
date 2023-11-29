import { Avatar } from "@mui/material"

const Message = () => {
  return (
    <div className="message">
      <Avatar/>
        <div className="message__info">
        <h3>Ayush<span className="message__timestamp">This is a timestamp</span>
        </h3>
        <p>This is a message</p>
        </div>
    </div>
  )
}

export default Message

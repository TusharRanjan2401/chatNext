'use client'
import { useState } from "react"
import { useSocket } from "../context/SocketProvider"
import classes from "./page.module.css"

export default function Page() {
  const { sendMessage, messages } = useSocket()
  const [message, setMessage]  = useState('')

  const handleSend = () => {
    if (message.trim()) {
      sendMessage(message)
      setMessage('') 
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.chatWindow}>
        <ul className={classes.messageList}>
          {messages.map((e, index) => (
            <li key={index} className={classes.message}>{e}</li>
          ))}
        </ul>
      </div>
      <div className={classes.inputContainer}>
        <input 
          value={message}
          onChange={(e) => setMessage(e.target.value)} 
          className={classes.chatInput} 
          placeholder="Type your message..." 
        />
        <button onClick={handleSend} className={classes.sendButton}>Send</button>
      </div>
    </div>
  )
}

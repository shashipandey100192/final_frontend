import React from 'react'
import ChatBot from "react-chatbotify";
import Settings,{styles} from './Mychatbootsetting';

function Chatboot() {
  return (
    <ChatBot settings={Settings} styles={styles}/>
  )
}

export default Chatboot 
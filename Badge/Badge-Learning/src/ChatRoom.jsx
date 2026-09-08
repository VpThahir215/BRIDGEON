import React from 'react'
import { useEffect } from 'react';

const ChatRoom = () => {
    useEffect(() => {

        console.log("Connected");

        return () => {
            console.log("Disconnected");
        };

    }, []);
  return (
    <div>
      <h1>Chat Room</h1>;
    </div>
  )
}

export default ChatRoom

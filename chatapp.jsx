import React, { useState } from 'react';

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const userList = ["Alan", "Bob", "Carol", "Dean", "Elin"];

  const handleSendMessage = () => {
    if (inputText.trim() === '') return;

    const randomUser = userList[Math.floor(Math.random() * userList.length)];
    const newMessage = {
      text: inputText,
      user: randomUser,
      likes: 0
    };

    setMessages([...messages, newMessage]);
    setInputText('');
  };

  const handleLike = (index) => {
    const updatedMessages = [...messages];
    updatedMessages[index].likes += 1;
    setMessages(updatedMessages);
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index}>
            <span>{message.user}: </span>
            <span>{message.text}</span>
            <button onClick={() => handleLike(index)}>Like</button>
            <span>{message.likes}</span>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default ChatApp;

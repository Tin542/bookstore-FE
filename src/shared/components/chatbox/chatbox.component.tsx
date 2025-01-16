import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import { sendMessageToChatbot } from '../../services/chatboxAPI';
import { CustomerServiceOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';

interface Message {
  role: 'user' | 'bot';
  content: string;
}

const Chatbox: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const botResponse = await sendMessageToChatbot(input);
      const botMessage: Message = { role: 'bot', content: botResponse };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages((prev) => [...prev, { role: 'bot', content: 'Error: Unable to fetch response.' }]);
    }

    setInput('');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', width: '400px' }}>
      <div style={{ maxHeight: '300px', overflowY: 'auto', marginBottom: '10px' }}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              textAlign: msg.role === 'user' ? 'right' : 'left',
              margin: '5px 0',
            }}
          >
            <strong>{msg.role === 'user' ? 'You' : 'Bot'}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        style={{ width: '100%', padding: '8px' }}
        placeholder="Type your message..."
      />
      <button onClick={handleSend} style={{ width: '100%', marginTop: '5px', padding: '8px' }}>
        Send
      </button>
    </div>
  );
};

export default Chatbox;

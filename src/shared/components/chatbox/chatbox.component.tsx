import React, { useState } from "react";
import { sendMessageToChatbot } from "../../services/chatboxAPI";
import ChatBot, { ChatBotProvider, Settings } from "react-chatbotify";
import avatar from "../../../assets/dev_avatar.png";

const settings: Settings = {
  chatHistory: { disabled: true },
  tooltip: {
    mode: "NEVER",
  },
  header: {
    title: (
      <div
        style={{
          cursor: "pointer",
          margin: 0,
          fontSize: 20,
          fontWeight: "bold",
        }}>
        Bookstore ChatBot
      </div>
    ),
    showAvatar: false,
  },
  chatButton: {
    icon: avatar,
  },
  footer: {
		text: ""
	},
};

const Chatbox: React.FC = () => {
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    // Gửi tin nhắn của người dùng

    try {
      const response = await sendMessageToChatbot(input);
      return response;
    } catch (error) {
      console.error("Error:", error);
    }

    setInput("");
  };

  const flow = {
    start: {
      message: "What can I help you ?",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      function: (params: any) => setInput(params.userInput),
      path: "loop",
    },
    loop: {
      message: async () => {
        return await handleSend();
      },
      path: "loop",
    },
  };

  return (
    <ChatBotProvider>
      <ChatBot settings={settings} flow={flow} />
    </ChatBotProvider>
  );
};

export default Chatbox;

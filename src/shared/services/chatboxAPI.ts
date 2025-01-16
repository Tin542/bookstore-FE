import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API,
  headers: {
    'Content-Type': 'application/json',
    authorization: `Bearer ${import.meta.env.VITE_OPENAI_KEY}`
  },
});

export const sendMessageToChatbot = async (message: string) => {
  try {
    const response = await api.post('/chatbot/message', { message });
    return response.data.response;
  } catch (error) {
    console.error('Error sending message:', error);
    throw new Error('Failed to get a response from the chatbot.');
  }
};

export default api;

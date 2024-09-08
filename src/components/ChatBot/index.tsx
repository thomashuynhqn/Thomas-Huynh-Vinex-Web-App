import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import {
  ContentSection,
  ChatboxContainer,
  ChatboxHeader,
  ChatboxMessages,
  UserMessage,
  BotMessage,
  InputContainer,
  StyledInput,
  StyledButton,
  StyledRow,
} from "./styles";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const ChatBox = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);

  const mockBotResponse = (userMessage: string) => {
    if (userMessage.toLowerCase().includes("hello")) {
      return "Hello! How can I help you today?";
    } else if (userMessage.toLowerCase().includes("help")) {
      return "I am here to assist you. Ask me anything!";
    } else if (userMessage.toLowerCase().includes("bye")) {
      return "Goodbye! Have a great day!";
    } else {
      return "I'm sorry, I don't understand your question.";
    }
  };

  const handleSend = () => {
    if (!input.trim()) return;
    setLoading(true);

    const userMessage: ChatMessage = {
      role: "user",
      content: input,
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    setTimeout(() => {
      const botResponse = mockBotResponse(input);
      const botMessage: ChatMessage = {
        role: "assistant",
        content: botResponse,
      };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
      setLoading(false);
      setInput("");
    }, 1000);
  };

  return (
    <ChatboxContainer>
      <ChatboxHeader>Chat with Mock Bot</ChatboxHeader>
      <ChatboxMessages>
        {messages.map((message, index) => (
          <div key={index}>
            {message.role === "user" ? (
              <UserMessage>
                <strong>You: </strong>
                {message.content}
              </UserMessage>
            ) : (
              <BotMessage>
                <strong>Bot: </strong>
                {message.content}
              </BotMessage>
            )}
          </div>
        ))}
      </ChatboxMessages>
      <InputContainer>
        <StyledInput
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <StyledButton onClick={handleSend} disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </StyledButton>
      </InputContainer>
    </ChatboxContainer>
  );
};

export default ChatBox;

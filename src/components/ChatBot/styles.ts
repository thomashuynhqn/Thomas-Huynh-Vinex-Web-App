import { Row } from "antd";
import styled from "styled-components";

export const ContentSection = styled("section")`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;

export const StyledRow = styled(Row)`
  flex-direction: ${({ direction }: { direction: string }) =>
    direction === "left" ? "row" : "row-reverse"};
`;

// Chatbox container
export const ChatboxContainer = styled.div`
  width: 100%;
  max-width: auto;
  margin: 20px auto;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  font-family: Arial, sans-serif;
`;

// Chatbox header
export const ChatboxHeader = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 18px;
`;

// Chat area where messages appear
export const ChatboxMessages = styled.div`
  height: 300px;
  overflow-y: scroll;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
`;

// User message bubble
export const UserMessage = styled.div`
  text-align: right;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #e0f7fa;
  border-radius: 8px;
  max-width: 80%;
  margin-left: auto;
`;

// Bot message bubble
export const BotMessage = styled.div`
  text-align: left;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #ffebee;
  border-radius: 8px;
  max-width: 80%;
  margin-right: auto;
`;

// Input container for the text field and button
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// Input field styling
export const StyledInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
`;

// Button styling
export const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

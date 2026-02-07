import React from 'react'
import { useState } from 'react'

export default function MiniChat() {
  const [inputMessage, setInputMessage] = useState("");
  const [message, setMessage] = useState([]);

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;
    setMessage([...message, inputMessage]);
    setInputMessage("");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Mini Chat App</h2>

      <div style={styles.row}>
        <input
          type="text"
          placeholder="Type a message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleSendMessage} style={styles.button}>
          Send Message
        </button>
      </div>

      <div style={styles.messageBox}>
        {message.map((msg, index) => (
          <p key={index} style={styles.message}>
            {msg}
          </p>
        ))}
      </div>
    </div>
  );
}


const styles = {
  container: {
    width: "350px",
    margin: "50px auto",
    padding: "20px",
    borderRadius: "15px",
    background: "#ffffff",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    fontFamily: "Arial, sans-serif",
    textAlign: "center"
  },

  heading: {
    marginBottom: "15px",
    color: "#333"
  },

  row: {
    display: "flex",
    gap: "8px",
    marginBottom: "15px"
  },

  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
    fontSize: "14px"
  },

  button: {
    padding: "10px 14px",
    borderRadius: "8px",
    border: "none",
    background: "#4f46e5",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold"
  },

  messageBox: {
    maxHeight: "200px",
    overflowY: "auto",
    border: "1px solid #eee",
    borderRadius: "10px",
    padding: "10px",
    background: "#f9fafc",
    textAlign: "left"
  },

  message: {
    background: "#4f46e5",
    color: "#fff",
    padding: "8px 12px",
    borderRadius: "15px",
    marginBottom: "8px",
    width: "fit-content",
    maxWidth: "80%",
    wordWrap: "break-word"
  }
};

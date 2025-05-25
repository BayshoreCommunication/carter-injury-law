"use client";
import axios from "axios";
import { useState } from "react";

export default function ChatBotTest() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    const userMessage = { role: "user", text: input };
    setMessages([...messages, userMessage]);
    setInput("");

    try {
      const res = await axios.post("http://localhost:8000/api/ai_chat_bot", {
        message: input,
      });

      setMessages((prev) => [...prev, { role: "bot", text: res.data.reply }]);
    } catch (err) {
      console.error(err);
    }
  };

  console.log("check value", messages);

  return (
    <div className="w-full max-w-md p-4 border rounded shadow-lg">
      <h2 className="text-xl font-bold mb-2">💬 Carter Injury Law Chat</h2>
      <div className="h-64 overflow-y-scroll bg-gray-50 p-2 mb-2 text-black">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={msg.role === "user" ? "text-right" : "text-left"}
          >
            <p className="my-1">
              <span className="font-semibold">
                {msg.role === "user" ? "You:" : "Bot:"}
              </span>{" "}
              {msg.text}
            </p>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          className="border flex-1 p-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type your question..."
        />
        <button
          className="bg-blue-600 text-white px-4 py-2"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}

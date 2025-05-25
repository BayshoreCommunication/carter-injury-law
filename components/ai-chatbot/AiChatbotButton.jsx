"use client";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const AiChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    const userMessage = { role: "user", text: input };
    setMessages([...messages, userMessage]);
    setInput("");

    try {
      const res = await axios.post("http://localhost:5000/site/chatbot", {
        message: input,
      });

      setMessages((prev) => [...prev, { role: "bot", text: res.data.reply }]);
    } catch (err) {
      console.error(err);
    }
  };

  console.log("check value", messages);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center p-3 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? (
          <div>
            <IoClose size={16} className="text-white" />
          </div>
        ) : (
          <p className="text-white text-sm font-medium">AI Chat</p>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="absolute bottom-full right-0 mb-4 w-80 bg-white rounded-lg shadow-xl overflow-hidden"
          >
            {/* Chat Header */}
            <div className="bg-black text-white p-4">
              <h3 className="font-bold">Chat with Bay AI</h3>
              <p className="text-xs opacity-80">we reply immediately</p>
            </div>

            <div className="h-60 p-4 overflow-y-auto">
              <div className="text-left mb-3">
                <div className="inline-block bg-black text-white rounded-lg px-3 py-2 text-sm">
                  Hi, How can i help you? 🌟
                </div>
              </div>
              {/* Chat Messages */}
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  // className={msg.role === "user" ? "text-right" : "text-left"}
                >
                  <p className="my-1">
                    <span className="font-normal">
                      {msg.role === "user" ? (
                        <div className="text-right mb-3">
                          <div className="inline-block bg-gray-100 rounded-lg px-3 py-2 text-sm">
                            {msg.text}
                          </div>
                        </div>
                      ) : (
                        <div className="text-left">
                          <div className="inline-block bg-black text-white rounded-lg px-3 py-2 text-sm">
                            {msg.text}
                          </div>
                        </div>
                      )}
                    </span>{" "}
                    {/* {msg.text} */}
                  </p>
                </div>
              ))}

              {/* <div className="text-left mb-3">
                <div className="inline-block bg-black text-white rounded-lg px-3 py-2 text-sm">
                  Hi, yes, David have found it, ask our concierge 🌟
                </div>
              </div>
              <div className="text-left">
                <div className="inline-block bg-black text-white rounded-lg px-3 py-2 text-sm">
                  Thank you for work, see you!
                </div>
              </div> */}
            </div>

            {/* Chat Input */}
            <div className="border-t p-3 bg-gray-50">
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Type your message here..."
                  className="flex-1 border rounded-l-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-black"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                />
                <motion.button
                  className="bg-black text-white px-4 py-2.5 rounded-r-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={sendMessage}
                >
                  Send
                </motion.button>
              </div>
              <p className="text-xs text-gray-500 mt-1 text-center">
                Website chat Preview
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AiChatbotButton;

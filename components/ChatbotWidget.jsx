"use client";

import { useEffect } from "react";

export default function ChatbotWidget() {
  useEffect(() => {
    // Create script element
    const script = document.createElement("script");
    script.src =
      "https://aibotwidget.bayshorecommunication.org/chatbot-widget.min.js";
    script.setAttribute(
      "data-api-key",
      "org_sk_3ca4feb8c1afe80f73e1a40256d48e7c"
    );
    script.async = true;

    // Append to body
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      // Remove script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return null; // This component doesn't render anything
}

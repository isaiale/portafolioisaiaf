import React, { useState, useEffect } from "react";

const TypingText = ({ texts, typingSpeed = 150, pauseTime = 2000, className = "" }) => {
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[textIndex];

      if (!isDeleting) {
        // Adding characters
        if (charIndex < fullText.length) {
          setCurrentText((prev) => prev + fullText[charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          // Pause before starting to delete
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting characters
        if (charIndex > 0) {
          setCurrentText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          // Move to the next text
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length); // Loop through texts
        }
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? typingSpeed / 2 : typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, texts, textIndex, typingSpeed, pauseTime]);

  return (
    <div className={`font-bold ${className}`}>
      <span>{currentText}</span>
      <span className="animate-blink text-black">|</span>
    </div>
  );
};

export default TypingText;

import React, { useState, useEffect, useRef } from "react";
import "tailwindcss/tailwind.css";
import chatbots from "../assets/images/chatbot.png";
import '../styles/chatbots.css';

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null); // Referencia al último mensaje

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const knowledgeBase = [
    {
      keywords: ["hola", "buenas", "tardes", "días", "noches"],
      answer: "¡Hola! ¿En qué puedo ayudarte?",
    },
    {
      keywords: ["quién", "eres", "nombre", "llamas"],
      answer:
        "Soy Isai Alejandro Flores, desarrollador de software con experiencia en frontend y backend.",
    },
    {
      keywords: ["lenguajes", "programación", "sabes"],
      answer: "Domino Python, Java, JavaScript, C++, SQL y C#.",
    },
    {
      keywords: ["frameworks", "framework", "usas"],
      answer: "Tengo experiencia con React, Spring Boot, Flask y Node.js.",
    },
    {
      keywords: [
        "herramientas",
        "desarrollo",
        "utilizas",
        "usas",
        "ide",
        "editor",
      ],
      answer:
        "Trabajo con herramientas como Visual Studio Code e IntelliJ IDEA.",
    },
    {
      keywords: [
        "proyectos",
        "realizado",
        "desarrollado",
        "hecho",
        "trabajado",
      ],
      answer:
        "He desarrollado aplicaciones móviles con Flutter, videojuegos con Unity y sistemas web con Angular y Spring Boot.",
    },
    {
      keywords: [
        "estudiaste",
        "educación",
        "universidad",
        "estudios",
        "carrera",
      ],
      answer:
        "Estudio Ingeniería en Desarrollo y Gestión de Software en la Universidad Tecnológica de la Huasteca Hidalguense (2021-2025).",
    },
    {
      keywords: ["idiomas", "hablas", "hablar"],
      answer: "Sí, hablo Español (nativo) e Inglés (intermedio).",
    },
    {
      keywords: ["metodologías", "scrum", "xp", "ágiles"],
      answer: "Trabajo con metodologías ágiles como Scrum y XP.",
    },
    {
      keywords: ["contactarte", "contacto", "correo", "teléfono", "número"],
      answer:
        "Puedes contactarme al (+52) 33-2046-8328 o al correo isaialef20@gmail.com.",
    },
  ];

  const getBotResponse = (userInput) => {
    const normalizedInput = userInput.toLowerCase();
    const found = knowledgeBase.find((item) =>
      item.keywords.some((keyword) => normalizedInput.includes(keyword))
    );
    return found
      ? found.answer
      : "Lo siento, no entiendo tu pregunta. ¿Puedes intentarlo de nuevo?";
  };

  const handleSend = () => {
    if (input.trim()) {
      const userMessage = { text: input, sender: "user" };
      const botResponse = { text: getBotResponse(input), sender: "bot" };

      setMessages((prevMessages) => [
        ...prevMessages,
        userMessage,
        botResponse,
      ]);
      setInput("");
    }
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]); // Desplaza automáticamente cuando los mensajes cambian

  return (
    <div className="fixed bottom-5 right-5">
      {!isOpen && (
        <div
        onClick={toggleChatbot}
        className="bg-teal-500 text-white p-3 rounded-full shadow-lg cursor-pointer flex items-center justify-center animate-bounce"
        style={{
          animation: 'moveUpDown 2s infinite',
        }}
      >
          <img
            src={chatbots}
            alt="Chatbot"
            style={{
              height: "70px",
              width: "70px",
              filter: "invert(1) brightness(2)",
            }}
          />
        </div>
      )}

      {isOpen && (
        <div className="bg-white w-80 h-96 rounded-lg shadow-lg flex flex-col">
          <div className="bg-teal-500 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h2 className="text-lg font-bold">Chatbot</h2>
            <button onClick={toggleChatbot} className="text-white">
              ✕
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-2 my-1 rounded-lg ${
                  message.sender === "user"
                    ? "bg-teal-100 self-end"
                    : "bg-gray-100 self-start"
                }`}
              >
                {message.text} 
              </div>
            ))}  
            <div ref={messagesEndRef} />{" "}            
          </div>

          <div className="p-4 border-t border-gray-200 flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Hazme una pregunta..."
              className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none"
            />
            <button
              onClick={handleSend}
              className="bg-teal-500 text-white p-2 rounded-r-lg"
            >
              Enviar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

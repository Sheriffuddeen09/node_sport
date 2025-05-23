import React, { useState, useEffect } from "react";
import axios from "axios";
import SidebarDetails from "@/components/Details";
import logo from './softsell.png';
import {
  ChevronDown, Plus, Users, UserCircle,
  ChevronUp, TrainIcon, Ticket, ArrowUp
} from "lucide-react";
import { sections } from "@/data/mockData";

const AVATARS = {
  user: "https://i.pravatar.cc/32?img=5",
  fin: logo,
};

export default function ChatSidebarMobile({handleAddToComposer}) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [view, setView] = useState(1);
  const [openSections, setOpenSections] = useState({});
  const [openSourceIndex, setOpenSourceIndex] = useState(null);
  const [ tip, setTip ] = useState(false)

  const handleTip = () =>{
    setTip(!tip)
  }

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleSend = async () => {
  if (!input.trim()) return;
  const userMsg = { text: input, sender: "user" };
  setMessages((prev) => [...prev, userMsg]);
  setInput("");
  setLoading(true);

  setTimeout(() => {
    const aiMsg = {
      text: "We understand that sometimes a purchase may not meet your expectations, and you may need to request a refund. [1] [2]",
      sender: "ai",
      sources: [
        {
          title: "Getting a refund",
          summary: "We understand that sometimes a purchase may not meet your expectations, and you may need to request a refund...",
          type: "article",
          author: "Amy Adams",
          time: "1d ago",
        },
        {
          title: "Refund for an unwanted gift",
          summary: "Unfortunately, we're only able to process refunds for orders placed within the last 60 days...",
          type: "conversation",
          author: "Theresa Eds",
          time: "3d ago",
        },
        {
      title: "Dealing with refund disputes",
      summary: "Tips for handling difficult refund disputes with customers.",
      type: "internal",
      author: "Theresa Eds",
      time: "3d ago",
    },
      ],
       usedInternal: true,
    };
    
    setMessages((prev) => [...prev, aiMsg]);
    setLoading(false);
  }, 1000);
};


useEffect(() => {
  const handler = (e) => {
    if (e.target.tagName === "SUP" && e.target.dataset.index && e.target.dataset.msgIndex) {
      const sourceIndex = Number(e.target.dataset.index);
      const msgIndex = Number(e.target.dataset.msgIndex);

      setOpenSourceIndex((prev) => {
        if (prev?.msgIndex === msgIndex && prev?.sourceIndex === sourceIndex) {
          return null; // toggle off
        }
        return { msgIndex, sourceIndex };
      });
    }
  };

  document.addEventListener("click", handler);
  return () => document.removeEventListener("click", handler);
}, []);


const Bubble = ({ msg, msgIndex, openSourceIndex, setOpenSourceIndex }) => {
  const isUser = msg.sender === "user";
  let messageHtml = msg.text;

  if (!isUser && msg.sources?.length) {
    msg.sources.forEach((_, idx) => {
      messageHtml = messageHtml.replace(
        new RegExp(`\\[${idx + 1}\\]`, 'g'),
        `<sup class="text-blue-600 cursor-pointer" data-msg-index="${msgIndex}" data-index="${idx}">[${idx + 1}]</sup>`
      );
    });
  }

  const showSource =
    openSourceIndex &&
    openSourceIndex.msgIndex === msgIndex &&
    msg.sources?.[openSourceIndex.sourceIndex];

  return (
    <div className={`flex text-black ${isUser ? "justify-start" : "justify-start"} items-start`}>
      {!isUser && (
        <img src={AVATARS.fin} alt="Fin" className="w-6 h-6 rounded-full mr-2" />
      )}
      <div className={`flex flex-col max-w-xs text-sm ${isUser ? "items-start" : "items-start"}`}>
        <span className="text-xs text-black font-bold mb-1">{isUser ? "You" : "Fin"}</span>
        
        {/* Main Message */}
        <div
  className={`rounded-md whitespace-pre-line ${
    isUser
      ? "text-gray-800 rounded-br-none"
      : "bg-gradient-to-br from-[#f1eefc] via-[#e9f1ff] to-[#f7e4ff] px-3 py-2 text-gray-800 rounded-bl-none"
  }`}
>
  {/* Render parsed message HTML */}
  <div dangerouslySetInnerHTML={{ __html: messageHtml }} />

  {/* Show internal warning */}
  {!isUser && msg.usedInternal && (
    <div className={`bg-yellow-100 text-yellow-800 text-xs p-2 rounded-md mt-2 shadow-sm border border-yellow-300 ${tip ? 'block' : 'hidden'}`}>
      <strong>This answer uses content from an internal article</strong>
      <div>Please make sure you can send this to the customer</div>
    </div>
  )}

  {/* Add to composer button inside bubble */}
  {!isUser && (
    <button onClick={() => onAdd(msg.text)}  className="text-sm mt-2 w-full mx-auto font-bold flex justify-between items-center text-blue-600  shadow-md  px-3 py-2 rounded-lg bg-white my-2 hover:bg-gray-50 transition">
      <div className=" gap-2  inline-flex items-center translate-x-8">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
      
      viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
  <path stroke-linecap="round" stroke-linejoin="round"
   d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>

      Add to composer
      </div>
       <div className="inline-flex items-center gap-2">
          <div className="w-0.5 h-4 bg-gray-200"></div>
          <svg onClick={handleTip} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      
    </button>
  )}
</div>

        {/* 🚨 New: Internal content warning + Add button + Sources List */}
        {!isUser && msg.sources?.length > 0 && (
          <>
            <div className="text-sm  mt-3">
              <p className="font-semibold text-gray-400">{msg.sources.length} relevant sources found</p>
              <ul className="mt-2 space-y-1">
                {msg.sources.map((source, idx) => (
                  <li key={idx} className="flex hover:underline cursor-pointer font-semibold my-1 items-center">
                    <svg
                      className="w-3 h-3 mr-1 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 2C6.13 2 3 5.13 3 9c0 4.97 7 11 7 11s7-6.03 7-11c0-3.87-3.13-7-7-7zm0 9.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
                    </svg>
                    {source.title}
                  </li>
                ))}
              </ul>
              <button className="text-black hover:underline cursor-pointer mt-1 text-sm font-semibold mt-2">See all →</button>
            </div>
          </>
        )}
      </div>

      {isUser && (
        <img src={AVATARS.user} alt="You" className="w-6 h-6 rounded-full ml-2" />
      )}
    </div>
  );
};

  const handleView = (id) => {
    setView(id);
  };

  return (
    <div className="w-full z-50 lg:hidden block md:w-full bg-mix bg-white flex flex-col pt- borde lg:rounded-tr-xl lg:rounded-br-xl">
          <header className="px-3 py-1 translate-y-1 flex justify-between items-center border-b-2">
           <SidebarDetails handleView={handleView} view={view} setView={setView} />
          </header>

      <div className={`${view === 1 ? 'block' : 'hidden'}`}>
        <main className="flex-1 overflow-y-auto p-4 heig space-y-4">
          {messages.length === 0 && !loading && (
            <div className="h-full flex flex-col items-center justify-center text-center text-gray-500">
              <img src={AVATARS.fin} alt="fin" className="w-10 h-10 mb-2" />
              <p className="font-medium">Hi, I'm Fin AI Copilot</p>
              <p className="text-sm text-gray-400">Ask me anything about this conversation.</p>
            </div>
          )}

          {messages.map((msg, i) => (
            <React.Fragment key={i}>
              <Bubble
              key={i}
              msg={msg}
              msgIndex={i}
              openSourceIndex={openSourceIndex}
              setOpenSourceIndex={setOpenSourceIndex}
              onAdd={handleAddToComposer}
            />
            </React.Fragment>
          ))}

          {loading && <p className="text-sm text-gray-400">Fin is typing…</p>}
        </main>

        <div className="px-4 pb-2">
          <div className="text-xs mt-6 translate-y-2 font-medium bg-white shadow border rounded-lg px-3 py-1 inline-flex gap-1 items-center">
            <span>Suggested</span> 💡 How do I get a refund?
          </div>
        </div>

        <footer className="p-4">
          <div className="flex items-center bg-white rounded-lg px-4 py-2">
            <input
              className="flex-1 bg-transparent outline-none text-sm"
              placeholder="Ask a question…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              disabled={loading}
              className="text-blue-600 disabled:opacity-40 size-6 cursor-pointer hover:bg-gray-200 hover:text-black rounded p-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
              </svg>
            </button>
          </div>
        </footer>
      </div>

       <div className={` h-screen py-3 bg-white ${view === 2 ? "block" : "hidden"}`}>
        <div className="space-y-2 mb-4 px-3">
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500 w-20 font-semibold">Assignee</span>
            <UserCircle size={18} className="text-gray-600" />
            <span className="text-sm font-bold">Brian Byrne</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500 w-20 font-semibold">Team</span>
            <Users size={18} className="text-gray-600" />
            <span className="text-sm font-bold">Unassigned</span>
          </div>
        </div>

        <div className="mb-4 mt-4">
          <div className="flex flex-row justify-between">
            <p className="uppercase px-3 text-xs text-black mb-2 font-bold">Links</p>
            <ChevronDown className="mr-4" size={16} />
          </div>
          <div className="w-full h-0.5 bg-gray-200"></div>

          <div className="px-3 mt-3 flex justify-between items-center py-1 hover:underline cursor-pointer">
            <div className="inline-flex gap-2 items-center">
              <TrainIcon size={20} />
              <span className="text-sm font-bold">Tracker ticket</span>
            </div>
            <Plus className="bg-gray-200 p-1 rounded-lg" size={20} />
          </div>

          <div className="flex px-3 justify-between mt-2 items-center py-1 hover:underline cursor-pointer">
            <div className="inline-flex gap-2 items-center">
              <Ticket size={20} />
              <span className="text-sm font-bold">Back-office tickets</span>
            </div>
            <Plus className="bg-gray-200 p-1 rounded-lg" size={20} />
          </div>

          <div className="flex px-3 justify-between mt-2 items-center py-1 hover:underline cursor-pointer">
            <div className="inline-flex gap-2 items-center">
              <ArrowUp className="rotate-45" size={20} />
              <span className="text-sm font-bold">Side conversations</span>
            </div>
            <Plus className="bg-gray-200 p-1 rounded-lg" size={20} />
          </div>
        </div>

        {sections.map((section) => (
          <div key={section} className="border-t px-3 py-2">
            <button
              className="w-full flex justify-between items-center text-left text-sm font-bold my-1"
              onClick={() => toggleSection(section)}
            >
              {section}
              {openSections[section] ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
            </button>
            {openSections[section] && (
              <div className="pl-4 text-gray-500 text-xs mt-1">
                Placeholder for {section} details…
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

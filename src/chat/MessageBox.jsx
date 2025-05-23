import { MessageCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ChatSidebarMobile from "./ChatAiMobile";


function MessageBox({ messages = [], onSend, user, newMessage, setNewMessage, editorRef }) {

  // const editorRef = useRef(null);
  // const [newMessage, setNewMessage] = useState("");
  const [showToolbar, setShowToolbar] = useState(false);
  const [toolbarPosition, setToolbarPosition] = useState({ top: 0, left: 30 });
  const [toggle, setToggle] = useState(false)
  const [chatView, setChatView] = useState(false)
  

  const handleChat = () => {
    setChatView(!chatView)
  }

  // Update state when content changes
  const handleInput = () => {
    setNewMessage(editorRef.current.innerHTML);
  };

  // Show toolbar when text is selected
 useEffect(() => {
  const handleSelection = () => {
    setTimeout(() => {
      const selection = window.getSelection();
      if (!selection || selection.rangeCount === 0) return;

      const range = selection.getRangeAt(0);
      if (range.toString().length > 0) {
        const rect = range.getBoundingClientRect();
        const editorRect = editorRef.current.getBoundingClientRect();

        setToolbarPosition({
          // Position *relative to editor*
          top: rect.top - editorRect.top - -30, // 40px above selection
          left: rect.left - editorRect.left - -30,
        });

        setShowToolbar(true);
      } else {
        setShowToolbar(false);
      }
    }, 10);
  };

  document.addEventListener("mouseup", handleSelection);
  document.addEventListener("keyup", handleSelection);

  return () => {
    document.removeEventListener("mouseup", handleSelection);
    document.removeEventListener("keyup", handleSelection);
  };
}, []);


 const handleToggle = () =>{
  setToggle(!toggle)

 }
// Format commands
  const format = (cmd) => {
    if (cmd === "copy") {
      document.execCommand("copy");
    } else if (cmd === "h1" || cmd === "h2") {
      document.execCommand("formatBlock", false, cmd.toUpperCase());
    } else {
      document.execCommand(cmd, false, null);
    }
    setShowToolbar(false);
  };

  // Send message
  const handleSend = () => {
    if (!newMessage.trim()) return;
    onSend(newMessage);
    setNewMessage("");
    editorRef.current.innerHTML = "";
  };
 

  return (
    <div className=" widlength"  >
      <div className="flex sm:justify-between justify-around items-center">
      <h3 className="text-sm mb-3 p-3">
        {user ? <> <strong>{user.name}</strong></> : <p className="text-sm font-bold translate-y-2"> No User Selected</p>}
      </h3>
      <div className="inline-flex items-center gap-2 px-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 bg-gray-200 rounded-lg p-1">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
      </svg>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6  bg-gray-200 rounded-lg p-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
</svg>

    <div className="rounded-lg text-center font-bold text-xs p-1 flex justify-center gap-1 items-center bg-black  text-white w-16">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
      <path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
      Close
    </div>
      </div>
      </div>

        <div className='h-0.5 bg-gray-100'></div>
    {user ?
      <div className="m-3" style={{ marginBottom: 10 }}>
        {messages.map((msg) => (
          <div className="flex items-end " key={msg.id} style={{ margin: '5px 0', flexDirection:`${msg.flex}` }}>
          <img src={msg.image} alt='picture' className='w-8 -translate-y-4 rounded-full h-8'/>
          <p className="rounded-lg m-4 p-2" style={{
            backgroundColor:`${msg.bg}`, fontSize:"12px"
          }}> {msg.text}
          <br/> 
          <div className=" items-center gap-2" style={{
            display:'flex',
            justifyContent:`${msg.textposition}`,
            alignItems:`${msg.textposition}`
          }}>
          <p className="w-3 rounded h-3" style={{
            backgroundColor:`${msg.icon}`
          }}></p>
          <small style={{
            display:'flex',
            justifyContent:`${msg.textposition}`,
            alignItems:`${msg.textposition}`
          }} className="text-gray-600 font-semibold">{msg.status} {msg.ts}</small>
          </div>
          </p>
          
          </div>
        ))}
      </div> 
        : 
        <p className="text-center font-bold lg:my-32 md:my-80 sm:block hidden">Select Message to Start Conversation</p>
        }
        <div className="inline-flex fixed lg:bottom-32 md:bottom-36 bottom-28 translate-y-1 md:translate-y-0 lg:translate-x-7 translate-x-11 md:translate-x-10 z-10 items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
</svg>

          <p className="text-sm font-semibold">Chat</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>

        </div>
        <div className="fixed lg:bottom-10 md:bottom-14 bottom-6 z-10 flex flex-row lg:justify-between items-center justify-around gap-16 w-96 sm:gap-20 px-4">
  <div className="inline-flex gap-2 items-center">
    {/* Icon 1 */}
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
    </svg>
    <div className="w-0.5 h-4 bg-gray-300"></div>

    {/* Icon 2 */}
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
    </svg>

    {/* Icon 3 */}
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Z" />
    </svg>
  </div>

  {/* Send Button */}
  <button disabled={!user || !newMessage.trim()} className="inline-flex items-center sm:translate-x-16 bg-gray-300 gap-1 rounded hover:bg-gray-400 py-1 px-2 border shadow-md rounded-lg disabled:opacity-30">
    <button
      onClick={handleSend}
      className="text-sm text-gray-700"
    >
      Send
    </button>
    <div className="w-0.5 h-4 bg-gray-500"></div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3">
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  </button>
</div>

        <div>
  <div
  onClick={handleToggle}
    className={`z-50 fixed w-52 bottom-64 translate-x-12 p-2 shadow-md rounded-lg bg-white transition-all duration-200 ${
      toggle ? "block pointer-events-auto" : "hidden pointer-events-none"
    }`}
  >
    {[
      "My tone of voice",
      "More friendly",
      "More formal",
      "Fix grammar & spelling",
      "Translate",
    ].map((item) => (
      <p

        key={item}
        className="my-1 hover:bg-gray-100 w-full py-1 px-3 rounded-lg cursor-pointer"
        onClick={() => alert(`Clicked: ${item}`)} // Replace with your own action
      >
        {item}
      </p>
    ))}
  </div>

  {/* Editor Area */}
  <div className="relative w-full flex flex-col items-center justify-center">
    <div
      ref={editorRef}
      contentEditable
      className={`border px-4 py-8 fixed md:bottom-12 lg:bottom-8 bottom-3 border-gray-300 shadow-md rounded-md lg:w-4/12 md:w-6/12 w-80 min-h-[120px] bg-white whitespace-pre-wrap focus:outline-none focus:ring-2 focus:ring-blue-400 ${
        !user ? "opacity-50 pointer-events-none" : ""
      }`}
      onInput={handleInput}
      suppressContentEditableWarning={true}
    >
    {newMessage === "" && (
      <span className="absolute top-7 text-sm left-4 text-xs text-gray-400 pointer-events-none select-none">
        Use JCK for shortcuts
      </span>
    )}</div>
    

  {/* Floating Toolbar */}
  {showToolbar && (
    <div
      className="absolute flex gap-3 p-2 bg-white border shadow-md rounded-md z-50"
      style={{
        top: `${toolbarPosition.top}px`,
        left: `${toolbarPosition.left}px`,
      }}
    >
      <button onClick={handleToggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>
      <button onClick={() => format("bold")}><b>B</b></button>
      <button onClick={() => format("italic")}><i>I</i></button>
      <button onClick={() => format("copy")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4 font-bold"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
          />
        </svg>
      </button>
      <button className="text-sm font-semibold" onClick={() => format("h1")}>H1</button>
      <button className="text-sm font-semibold" onClick={() => format("h2")}>H2</button>
      <button onClick={() => format("copy")}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 font-bold">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
</svg>
</button>
    </div>
  )}
  </div>
</div>
<div onClick={handleChat} className="fixed cursor-pointer bottom-40 md:bottom-48 lg:hidden  flex gap-3 justify-center left-2 md:left-80 bg-blue-600 p-2 rounded-full">
  <MessageCircle className="bg-white rounded-full"/>
  <p className="text-white font-bold">Ask Ai</p>
</div>
  <div className={`fixed z-10 bg-black top-0 left-0 h-full w-full ${chatView ? "block" : "hidden"}`}>
  <ChatSidebarMobile  />
  <button onClick={handleChat}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 fixed z-10 right-4 text-black top-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>

  </button>
  </div>
</div>
  );
}

export default MessageBox
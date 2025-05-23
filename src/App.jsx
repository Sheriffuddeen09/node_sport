import { useRef, useState } from 'react';
import ChatList   from './chat/ChatList';
import MessageBox from './chat/MessageBox';
import { folders, chats, messages as allMessages } from './data/mockData';
import ChatSidebar from './chat/ChatAi';

export default function App() {
  const [selectedFolder, setSelectedFolder] = useState('open');
  const [selectedUser,  setSelectedUser]  = useState(null);
  const [messages,      setMessages]      = useState(allMessages);
  const editorRef = useRef(null);
  const [newMessage, setNewMessage] = useState(""); 

  /* folder switch clears current chat */
  const handleSelectFolder = (folderId) => {
    setSelectedFolder(folderId);
    setSelectedUser(null);
  };

  const handleSend = (text) => {
  if (!selectedUser) return;

  const newMsg = {
    id: Date.now(),
    from: "agent",
    text,
    ts: "just now",
    bg: "#dcdafa",
    icon: "transparent",
    status: "Sent",
    image: "https://i.pravatar.cc/32?img=5",
    flex: "row-reverse",
    textposition: "end",
  };

  setMessages((prev) => ({
    ...prev,
    [selectedUser]: [...(prev[selectedUser] || []), newMsg],
  }));
};

  /* user object for name / avatar */
  const currentUser =
    (chats[selectedFolder] || []).find((u) => u.id === selectedUser) || null;

    const handleAddToComposer = (html) => {
  // 1) set state
  setNewMessage(html);
  // 2) insert HTML into the editor div
  if (editorRef.current) {
    editorRef.current.innerHTML = html;
    // 3) put cursor at end
    const range = document.createRange();
    range.selectNodeContents(editorRef.current);
    range.collapse(false);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    editorRef.current.focus();
  }
};


  return (
    <div className="bg-white w-10/12 lg:w-10/12 md:w-11/12 max-w-6xl mx-auto my-4 rounded-xl flex h-[95vh] font-sans">
      {/* ----- Chat list (always visible) ----- */}
      <ChatList
        chats={chats[selectedFolder] || []}
        onSelectUser={setSelectedUser}
        folders={folders}
        selectedFolder={selectedFolder}
        setSelectedFolder={handleSelectFolder}
        selectedUser={selectedUser}
      />

      {/* ----- Desktop message pane ----- */}
      <div className="hidden md:block flex-1 border-l">
        <MessageBox
          user={currentUser}
          messages={messages[selectedUser] || []}
          onSend={handleSend}
          newMessage={newMessage}
          setNewMessage={setNewMessage}
          editorRef={editorRef}
        />
      </div>

      {/* ----- Mobile overlay message pane ----- */}
      {selectedUser && (
        <div className="fixed inset-0 z-50 flex flex-col md:hidden bg-white">
          <MessageBox
            user={currentUser}
            selectedUser={selectedUser}
            messages={messages[selectedUser] || []}
            onSend={handleSend}
            newMessage={newMessage}
            setNewMessage={setNewMessage}
            editorRef={editorRef}
          />
          <button
            onClick={() => setSelectedUser(null)}
            className="mt-auto fixed top-0 py-3 text-sm left-2   font-bold"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>

          </button>
        </div>
      )}
       <ChatSidebar onAddToComposer={handleAddToComposer} />
    </div>
  );
}

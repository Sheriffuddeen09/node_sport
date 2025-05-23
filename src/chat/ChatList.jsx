import Sidebar from '../components/Sidebar';
import React from 'react';

function ChatList({ chats, onSelectUser, selectedUser, setSelectedFolder, selectedFolder, folders }) {
  const content = (
    <div className="flex flex-col p-2 justify-items-center text-sm mx-auto widt">
  {chats.map((user, index) => {
    const isSelected = selectedUser === user.id;

    return (
      <div
        key={index}
        className={`rounded-xl cursor-pointer p-[15px] ${
          isSelected ? 'bg-[#edf3f9]' : 'bg-white hover:bg-[#edf3f9]'
        }`}
        style={{
          fontWeight: user.fontWeight,
        }}
        onClick={() => onSelectUser(user.id)}
      >
        <div className="inline-flex gap-2 items-center">
          <img src={user.image} alt="picture" className="w-8 h-8 rounded-full" />
          <div>
            <div className="flex flex-row justify-between gap-10 items-center">
              <h2 className="text-xs">{user.name}</h2>
              <h2
                className="text-xs flex items-center justify-center h-5 w-5"
                style={{
                  backgroundColor: user.bg,
                  color: user.color,
                  borderRadius: user.rounded,
                  width: `${user.width}px`,
                }}
              >
                <p
                  className="rounded-full"
                  style={{
                    backgroundColor: user.black,
                    width: `${user.wid}px`,
                    height: `${user.hei}px`,
                    padding: `${user.padding}px`,
                  }}
                >
                  {user.dot}
                </p>
                {user.min}
              </h2>
            </div>
            <div
              className="flex flex-row justify-between items-center"
              style={{ gap: `${user.gap}px` }}
            >
              <p className="text-xs m-0">{user.last}</p>
              <p className="text-xs m-0">{user.date}</p>
            </div>
          </div>
        </div>
      </div>
    );
  })}
</div>
  );

  return(
    <div className=' rounded-tl-xl rounded-bl-xl bg-white borde'>
        <h1 className='font-bold mb-2 pt-3 pb-3 px-5'>Your Inbox</h1>
        <div className='h-0.5 bg-gray-100 w-full'></div>
       <Sidebar
          folders={folders}
          selectedFolder={selectedFolder}
          onSelect={setSelectedFolder}
          chats={chats[selectedFolder] || chats}
        />

        <div className=' -mt-2 '>
        {content}
        </div>
        <div>

        </div>
    </div>
  )
}

export default ChatList;

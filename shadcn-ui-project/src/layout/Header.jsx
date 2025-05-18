import { createContext, useState, useEffect, useContext } from "react";
import { Dashboard } from "../component/Dashboard"
import MainSchedule from "./MainSchedule"
import MainPublished from "./MainPublish"
import MainArchived from "./MainArchive"

export const LoadingCtx = createContext(true);

function Header (){

const [toggle, setToggle] = useState(1)

const handleToggle = (id) =>{

    setToggle(id)

}

const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  function LoadingConsumer() {
    const isLoading = useContext(LoadingCtx);

    if (isLoading) {
      return (
        <div className="max-w-4xl mx-auto p-10">
          <div className="animate-pulse bg-gray-300 h-10 w-64 rounded mb-4"></div>
          <div className="animate-pulse bg-gray-300 h-6 w-full rounded mb-2"></div>
          <div className="animate-pulse bg-gray-300 h-6 w-full rounded mb-2"></div>
          <div className="animate-pulse bg-gray-300 h-6 w-5/6 rounded mt-3"></div>
          <div className="animate-pulse bg-gray-300 h-6 w-full rounded mb-2"></div>
          <div className="animate-pulse bg-gray-300 h-6 w-full rounded mb-2"></div>
           <div className="animate-pulse bg-gray-300 h-6 w-5/6 rounded mt-3"></div>
          <div className="animate-pulse bg-gray-300 h-6 w-full rounded mb-2"></div>
          <div className="animate-pulse bg-gray-300 h-6 w-full rounded mb-2"></div>
           <div className="animate-pulse bg-gray-300 h-6 w-5/6 rounded mt-3"></div>
          <div className="animate-pulse bg-gray-300 h-6 w-full rounded mb-2"></div>
          <div className="animate-pulse bg-gray-300 h-6 w-full rounded mb-2"></div>
           <div className="animate-pulse bg-gray-300 h-6 w-5/6 rounded mt-3"></div>
          <div className="animate-pulse bg-gray-300 h-6 w-full rounded mb-2"></div>
          <div className="animate-pulse bg-gray-300 h-6 w-full rounded mb-2"></div>
           <div className="animate-pulse bg-gray-300 h-6 w-5/6 rounded mt-3"></div>
          <div className="animate-pulse bg-gray-300 h-6 w-full rounded mb-2"></div>
          <div className="animate-pulse bg-gray-300 h-6 w-full rounded mb-2"></div>
        </div>
      );
    }

return(

    <div className="mx-auto ">
        <h1 className="mt-10 text-2xl font-bold mb-3 text-center mx-auto">Articles</h1>
        <div className=" flex justify-start lg:justify-center lg:items-center flex w-72 mx-auto scroll-wi rounded-lg scrollb sm:scrollbar-thumb-transparent  scroll-p-0 scroll-smooth scrollbar scrollbar-thumb-blue-300  scrollbar-thin scrollbar-track-white my-2">
            <p onClick={() => handleToggle(1)} className={`border translate-x-6 border-gray-400 z-10 cursor-pointer whitespace-nowrap py-1 px-5 rounded-lg ${toggle === 1 ? 'color' : 'none'}`}>
                Generated Articles
            </p>
            <p onClick={() => handleToggle(2)} className={`border-t-1 translate-x-4 border border-b-1 border-gray-400  cursor-pointer whitespace-nowrap py-1 px-5 border border-r-1 border-l-0 hover:border-l-0 rounded-tr-lg rounded-br-lg rounded-tl-0 rounded-bl-0 ${toggle === 2 ? 'color' : 'none'}`}>
                Published Articles
            </p>
            <p onClick={() => handleToggle(3)}  className={`border-t-1 translate-x-2 border border-b-1 border-gray-400 z-10 cursor-pointer whitespace-nowrap py-1 px-5 border border-r-1 border-l-0 hover:border-l-0 rounded-tr-lg rounded-br-lg rounded-tl-0 rounded-bl-0 ${toggle === 3 ? 'color' : 'none'}`}>
                Scheduled Articles
            </p>
            <p onClick={() => handleToggle(4)} className={`border-t-1 border border-b-1 border-gray-400 cursor-pointer whitespace-nowrap py-1 px-5 border border-r-1 border-l-0 hover:border-l-0 rounded-tr-lg rounded-br-lg rounded-tl-0 rounded-bl-0 ${toggle === 4 ? 'color' : 'none'}`}>
                Archived Articles
            </p>
        </div>

        <div className="mx-auto ">
            <div className={toggle === 1 ? 'block' : 'hidden'}>
                <Dashboard />
            </div>
            <div className={toggle === 2 ? 'block' : 'hidden'}>
                <MainPublished />
            </div>
            <div className={toggle === 3 ? 'block' : 'hidden'}>
                <MainSchedule />
            </div>
            <div className={toggle === 4 ? 'block' : 'hidden'}>
                <MainArchived />
            </div>
        </div>
    </div>
)
}
return (
    <LoadingCtx.Provider value={loading}>
          <main>
            <LoadingConsumer />
          </main>
    </LoadingCtx.Provider>
  );

}

export default Header
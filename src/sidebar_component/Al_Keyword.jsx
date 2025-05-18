import { SidebarProvider } from "@/components/ui/sidebar";
import { Sidebar } from "@/layout/SideBar";
import { createContext, useState, useEffect, useContext } from "react";

export const loadingCtx = createContext(true);

function Al_Keyword() {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setloading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  function LoadingConsumer() {
    const isloading = useContext(loadingCtx);

    if (isloading) {
      return (
        <div className="max-w-4xl mx-auto p-10">
          <div className="animate-pulse bg-gray-300 h-10 w-64 rounded mb-4"></div>
          <div className="animate-pulse bg-gray-300 h-6 w-full rounded mb-2"></div>
          <div className="animate-pulse bg-gray-300 h-6 w-full rounded mb-2"></div>
          <div className="animate-pulse bg-gray-300 h-6 w-5/6 rounded"></div>
        </div>
      );
    }

    return (
      <div className="text-center mt-20 mx-auto ml-7 md:translate-x-12 lg:translate-x-60">
        <h1 className="sm:text-3xl font-bold">Welcome To Al Keyword to Article</h1>
        <div className="flex justify-center my-6 items-center gap-4 mx-auto">
          <p className="typing sm:text-xl text-xs">This Page is Coming Soon</p>
          <p className="sm:loading"></p>
        </div>
      </div>
    );
  }

  return (
    <loadingCtx.Provider value={loading}>
      <SidebarProvider>
        <div className="flex h-screen">
          <div className="sm:block hidden">
          <Sidebar />
          </div>
          <main className="flex-1">
            <LoadingConsumer />
          </main>
        </div>
      </SidebarProvider>
    </loadingCtx.Provider>
  );
}

export default Al_Keyword;

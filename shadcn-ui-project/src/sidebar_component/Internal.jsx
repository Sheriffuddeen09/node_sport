import { SidebarProvider } from "@/components/ui/sidebar";
import { Sidebar } from "@/layout/SideBar";
import { createContext, useState, useEffect, useContext } from "react";

export const LoadingCtx = createContext(true);

function Internal() {
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
          <div className="animate-pulse bg-gray-300 h-6 w-5/6 rounded"></div>
        </div>
      );
    }

    return (
      <div className="text-center mt-20 mx-auto translate-x-7 md:translate-x-12 lg:translate-x-60">
        <h1 className="sm:text-3xl font-bold">Welcome To Internal Link Page</h1>
        <div className="flex justify-center my-6 items-center gap-4 mx-auto">
          <p className="typing sm:text-xl text-xs">This Page is Coming Soon</p>
          <p className="loading"></p>
        </div>
      </div>
    );
  }

  return (
    <LoadingCtx.Provider value={loading}>
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
    </LoadingCtx.Provider>
  );
}

export default Internal;

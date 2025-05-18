import { SidebarProvider } from "@/components/ui/sidebar"; // or your SidebarProvider path
import { createContext, useState, useEffect } from "react";
import { Sidebar } from "./SideBar";
import Published from "@/component/Published";

export const LoadingCtx = createContext(true);

function MainPublished() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <LoadingCtx.Provider value={loading}>
      <SidebarProvider>
        <div className="flex h-screen">
          <div className="sm:block hidden">
          <Sidebar />
          </div>
          <main className="flex-1 flex justify-center p-6">
            <div className="w-full max-w-4xl">
              <Published />
            </div>
          </main>
        </div>
      </SidebarProvider>
    </LoadingCtx.Provider>
  );
}

export default MainPublished;

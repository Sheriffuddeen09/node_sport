import { SidebarProvider } from "@/components/ui/sidebar"; // or your SidebarProvider path
import { createContext, useState, useEffect } from "react";
import { Sidebar } from "./SideBar";
import Published from "@/component/Published";

export const loadingCtx = createContext(true);

function MainPublished() {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setloading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <loadingCtx.Provider value={loading}>
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
    </loadingCtx.Provider>
  );
}

export default MainPublished;

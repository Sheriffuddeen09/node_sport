import { SidebarProvider } from "@/components/ui/sidebar"; // or your SidebarProvider path
import { createContext, useState, useEffect } from "react";
import { Sidebar } from "./SideBar";

export const loadingCtx = createContext(true);

export function MainLayout({ children }) {
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
          <main className="flex-1 p-4 space-y-4">{children}</main>
        </div>
      </SidebarProvider>
    </loadingCtx.Provider>
  );
}

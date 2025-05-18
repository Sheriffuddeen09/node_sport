import { SidebarProvider } from "@/components/ui/sidebar"; // or your SidebarProvider path
import { createContext, useState, useEffect } from "react";
import { Sidebar } from "./SideBar";
import Scheduled from "@/component/Scheduled";

export const loadingCtx = createContext(true);

 function MainSchedule() {
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
          <Scheduled />
        </div>
      </SidebarProvider>
    </loadingCtx.Provider>
  );
}
export default MainSchedule
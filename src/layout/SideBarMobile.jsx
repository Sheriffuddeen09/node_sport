// components/SidebarMobile.tsx
import { Sidebar as ShadcnSidebar } from "@/components/ui/sidebar";
import {
  FileText,
  Settings,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Plus,
  LinkIcon,
  Zap,
  Puzzle,
  Repeat,
  User,
  RefreshCcw,
  MessageCircle,
  UserCircle,
  Globe,
  MenuIcon,
  X,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, createContext } from 'react';

export const loadingCtx = createContext(true);


export function Sidebar() {
  const location = useLocation();
  const [openArticles, setOpenArticles] = useState(false);
  const [loading, setloading] = useState(true);
  const [toggle, setToggle] = useState(false)

  const handleToggle = () =>{

    setToggle(!toggle)
  }


  
    useEffect(() => {
      const t = setTimeout(() => setloading(false), 1200);
      return () => clearTimeout(t);
    }, []);
  
  
  const content = (
    <div   className={`flex isolate rounded-none index-z height scrollba scrollbar-thumb-blue-100 rounded-lg scroll-p-0 scroll-smooth scrollbar scrollbar-thin scrollbar-track-white border-r p-4 fixed index-z top-0 bg-black w-72 p-4 h-full flex-col items-center ${toggle ? "block" : "hidden"}`}>
      
    <div className="inline-flex  items-center gap-20 p-4">
    <div className="text-2xl bg-black text-white font-bold text-center capitalize">abun</div>
     <div className="text-white" onClick={handleToggle}>
        <X />
    </div>
    </div>
    <div className="bg-black pb-4">
    <button
  className="flex items-center text-white justify-between w-44 border bg-white rounded-2xl mx-auto p-2 hover:bg-blue-400 text-white hover:text-white rounded transition">
  <div className="flex items-center text-white gap-3 text-sm">
    <Globe className="h-5 w-5 text-pink-700" />
    <span cla>Amazon.com</span>
  </div>
  <ChevronDown className="h-4 w-4" />
</button>
</div>
      <nav className="space-y-2 bg-black">

       
        <div>
          <button
            className="flex items-center text-white justify-between w-full p-2 hover:bg-blue-400 text-white hover:text-white rounded transition"
            onClick={() => setOpenArticles(!openArticles)}
          >
            <div className="flex items-center text-white gap-3 text-sm">
              <BookOpen className="h-5 w-5 text-white" />
              <span>Articles</span>
            </div>
            {openArticles ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>
          {openArticles && (
            <div className="ml-8 mt-1 space-y-2 text-xs">
                <>
                  <Link onClick={handleToggle}
                    to="/create"
                    className={cn(
                      'block px-2 py-1 rounded hover:bg-blue-400 text-white hover:text-white transition',
                      location.pathname === '/create' && 'text-blue-500 font-medium'
                    )}
                  >
                    <Plus className="inline w-4 h-4 mr-1" />
                    Create Article
                  </Link>
                  <Link onClick={handleToggle}
                    to="/generated"
                    className={cn(
                      'block px-2 py-1 rounded hover:bg-blue-400 text-white hover:text-white transition',
                      location.pathname === '/generated' && 'text-blue-500 font-medium'
                    )}
                  >
                    <FileText className="inline w-4 h-4 mr-1" />
                    Generated Articles
                  </Link>

                  <Link onClick={handleToggle}
                    to="/keyword"
                    className={cn(
                      'block px-2 py-1 rounded hover:bg-blue-400 text-white hover:text-white transition',
                      location.pathname === '/keyword' && 'text-blue-500 font-medium'
                    )}
                  >
                    <FileText className="inline w-4 h-4 mr-1" />
                    Keyword Projects
                  </Link>

                  <Link onClick={handleToggle}
                    to="/ai_keyword"
                    className={cn(
                      'block px-2 py-1 rounded hover:bg-blue-400 text-white hover:text-white transition',
                      location.pathname === '/ai_keyword' && 'text-blue-500 font-medium'
                    )}
                  >
                    <FileText className="inline w-4 h-4 mr-1" />
                    AI Keyword to Article
                  </Link>

                    <Link onClick={handleToggle}
                    to="/steal"
                    className={cn(
                      'block px-2 py-1 rounded hover:bg-blue-400 text-white hover:text-white transition',
                      location.pathname === '/steal' && 'text-blue-500 font-medium'
                    )}
                  >
                    <FileText className="inline w-4 h-4 mr-1" />
                    Steal Competitor Keyword
                  </Link>
                  
                  <Link onClick={handleToggle}
                    to="/import"
                    className={cn(
                      'block px-2 py-1 rounded hover:bg-blue-400 text-white hover:text-white transition',
                      location.pathname === '/import' && 'text-blue-500 font-medium'
                    )}
                  >
                    <FileText className="inline w-4 h-4 mr-1" />
                    Import Keyword from GSC
                  </Link>

                  <Link onClick={handleToggle}
                    to="/manual"
                    className={cn(
                      'block px-2 py-1 rounded hover:bg-blue-400 text-white hover:text-white transition',
                      location.pathname === '/manual' && 'text-blue-500 font-medium'
                    )}
                  >
                    <FileText className="inline w-4 h-4 mr-1" />
                    Manual Keyword to Article
                  </Link>

                  <Link onClick={handleToggle}
                    to="/bulk"
                    className={cn(
                      'block px-2 py-1 rounded hover:bg-blue-400 text-white hover:text-white transition',
                      location.pathname === '/bulk' && 'text-blue-500 font-medium'
                    )}
                  >
                    <FileText className="inline w-4 h-4 mr-1" />
                    Bulk Keyword to Article
                  </Link>

                  <Link onClick={handleToggle}
                    to="/longtail"
                    className={cn(
                      'block px-2 py-1 rounded hover:bg-blue-400 text-white hover:text-white transition',
                      location.pathname === '/longtail' && 'text-blue-500 font-medium'
                    )}
                  >
                    <FileText className="inline w-4 h-4 mr-1" />
                    Longtail Keyword to Article
                  </Link>

                  <Link onClick={handleToggle}
                    to="/setting"
                    className={cn(
                      'block px-2 py-1 rounded hover:bg-blue-400 text-white hover:text-white transition',
                      location.pathname === '/setting' && 'text-blue-500 font-medium'
                    )}
                  >
                    <FileText className="inline w-4 h-4 mr-1" />
                    Article Settings
                  </Link>
                </>
            </div>
          )}
        </div>

       
        <Link onClick={handleToggle}
          to="/settings"
          className={cn(
            'flex items-center text-white gap-3 text-sm p-2 rounded hover:bg-blue-400 text-white hover:text-white transition',
            location.pathname === '/settings' && 'bg-muted font-medium'
          )}
        >
          <Settings className="h-5 w-5 text-white" />
          Settings
        </Link>

       
        <Link onClick={handleToggle}
          to="/blog"
          className={cn(
            'flex items-center text-white gap-3 text-sm p-2 rounded hover:bg-blue-400 text-white hover:text-white transition',
            location.pathname === '/blog' && 'bg-muted font-medium'
          )}
        >
          <FileText className="h-5 w-5 text-white" />
          Auto Blog
        </Link>

       
        <Link onClick={handleToggle}
          to="/internal"
          className={cn(
            'flex items-center text-white gap-3 text-sm p-2 rounded hover:bg-blue-400 text-white hover:text-white transition',
            location.pathname === '/internal' && 'bg-muted font-medium'
          )}
        >
         <LinkIcon onClick={handleToggle}Icon className="h-5 w-5 text-white" />
          Internal Links
        </Link>

      
        <Link onClick={handleToggle}
          to="/backlinks"
          className={cn(
            'flex items-center text-white gap-3 text-sm p-2 rounded hover:bg-blue-400 text-white hover:text-white transition',
            location.pathname === '/backlinks' && 'bg-muted font-medium'
          )}
        >
          <Zap className="h-5 w-5 text-white" />
          Free Backlinks
        </Link>

        
        <Link onClick={handleToggle}
          to="/integrate"
          className={cn(
            'flex items-center text-white gap-3 text-sm p-2 rounded hover:bg-blue-400 text-white hover:text-white transition',
            location.pathname === '/integrate' && 'bg-muted font-medium'
          )}
        >
          <Puzzle className="h-5 w-5 text-white" />
          Integrations
        </Link>

    
        <Link onClick={handleToggle}
          to="/subscription"
          className={cn(
            'flex items-center text-white gap-3 text-sm p-2 rounded hover:bg-blue-400 text-white hover:text-white transition',
            location.pathname === '/subscription' && 'bg-muted font-medium'
          )}
        >
          <Repeat className="h-5 w-5 text-white" />
          Subscriptions
        </Link>


        <Link onClick={handleToggle}
          to="/affiliate"
          className={cn(
            'flex items-center text-white gap-3 text-sm p-2 rounded hover:bg-blue-400 text-white hover:text-white transition',
            location.pathname === '/affiliate' && 'bg-muted font-medium'
          )}
        >
          <User className="h-5 w-5 text-white" />
          Affiliate Program
        </Link>

        <Link onClick={handleToggle}
          to="/help"
          className={cn(
            'flex items-center text-white gap-3 text-sm p-2 rounded hover:bg-blue-400 text-white hover:text-white transition',
            location.pathname === '/help' && 'bg-muted font-medium'
          )}
        >
          
          <HelpCircle className="h-5 w-5 text-white" />
          Help Center
        </Link>
       
        <Link onClick={handleToggle}
          to="/update"
           className={cn(
            'flex items-center text-white gap-3 text-sm p-2 rounded hover:bg-blue-400 text-white hover:text-white transition',
            location.pathname === '/update' && 'bg-muted font-medium'
          )}
        >
          <RefreshCcw className="h-5 w-5 text-white" />
          Updates
        </Link>

     
        <Link onClick={handleToggle}
          to="/live"
          className={cn(
            'flex items-center text-white gap-3 text-sm p-2 rounded hover:bg-blue-400 text-white hover:text-white transition',
            location.pathname === '/live' && 'bg-muted font-medium'
          )}
        >
          <MessageCircle className="h-5 w-5 text-white" />
          Live Chat Support
        </Link>

       
        <Link onClick={handleToggle}
          to="/profile"
          className={cn(
            'flex items-center text-white gap-3 text-sm p-2 rounded hover:bg-blue-400 text-white hover:text-white transition',
            location.pathname === '/profile' && 'bg-muted font-medium'
          )}
        >
          <UserCircle className="h-5 w-5 text-white" />
          Profile
        </Link>
      </nav>

    </div>
  );

return (
    <loadingCtx.Provider value={loading}>
  <div className="">
    <div
         className={`
          w-full flex items-center text-white gap-2
          fixed top-0 index-z
          bg-black text-white py-4 px-6
          ${toggle ? "hidden" : ""}
        `}
        onClick={() => setToggle(true)}
      >
        <MenuIcon />
        <p className="font-bold text-2xl">Sidebar</p>
      </div>

    {content}
  </div>
</loadingCtx.Provider>

  );

}


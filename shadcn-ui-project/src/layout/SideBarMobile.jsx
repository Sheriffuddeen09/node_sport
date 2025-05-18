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

export const LoadingCtx = createContext(true);


export function Sidebar() {
  const location = useLocation();
  const [openArticles, setOpenArticles] = useState(false);
  const [loading, setLoading] = useState(true);
  const [toggle, setToggle] = useState(false)

  const handleToggle = () =>{

    setToggle(!toggle)
  }


  
    useEffect(() => {
      const t = setTimeout(() => setLoading(false), 1200);
      return () => clearTimeout(t);
    }, []);
  
  
  const content = (
    <div  onClick={handleToggle} className={`flex height scrollba scrollbar-thumb-blue-100 rounded-lg scroll-p-0 scroll-smooth scrollbar scrollbar-thin scrollbar-track-white border-r p-4 fixed index-z top-0 bg-gray-100 w-72 p-4 h-full flex-col items-center ${toggle ? "block" : "hidden"}`}>
      
    <div className="inline-flex  items-center gap-20 p-4">
    <div className="text-2xl bg-gray-100 font-bold text-center capitalize">abun</div>
     <div onClick={handleToggle}>
        <X />
    </div>
    </div>
    <div className="bg-gray-100 pb-4">
    <button
  className="flex items-center justify-between w-44 border bg-gray-100 rounded-2xl mx-auto p-2 hover:bg-blue-400 hover:text-white rounded transition">
  <div className="flex items-center gap-3 text-sm">
    <Globe className="h-5 w-5 text-pink-700" />
    <span>Amazon.com</span>
  </div>
  <ChevronDown className="h-4 w-4" />
</button>
</div>
      <nav className="space-y-2 bg-gray-100">

       
        <div>
          <button
            className="flex items-center justify-between w-full p-2 hover:bg-blue-400 hover:text-white rounded transition"
            onClick={() => setOpenArticles(!openArticles)}
          >
            <div className="flex items-center gap-3 text-sm">
              <BookOpen className="h-5 w-5 text-blue-700" />
              <span>Articles</span>
            </div>
            {openArticles ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
          </button>
          {openArticles && (
            <div className="ml-8 mt-1 space-y-2 text-xs">
                <>
                  <Link
                    to="/create"
                    className={cn(
                      'block px-2 py-1 rounded hover:bg-blue-400 hover:text-white transition',
                      location.pathname === '/create' && 'text-blue-500 font-medium'
                    )}
                  >
                    <Plus className="inline w-4 h-4 mr-1" />
                    Create Article
                  </Link>
                  <Link
                    to="/generated"
                    className={cn(
                      'block px-2 py-1 rounded hover:bg-blue-400 hover:text-white transition',
                      location.pathname === '/generated' && 'text-blue-500 font-medium'
                    )}
                  >
                    <FileText className="inline w-4 h-4 mr-1" />
                    Generated Articles
                  </Link>

                  <Link
                    to="/keyword"
                    className={cn(
                      'block px-2 py-1 rounded hover:bg-blue-400 hover:text-white transition',
                      location.pathname === '/keyword' && 'text-blue-500 font-medium'
                    )}
                  >
                    <FileText className="inline w-4 h-4 mr-1" />
                    Keyword Projects
                  </Link>

                  <Link
                    to="/ai_keyword"
                    className={cn(
                      'block px-2 py-1 rounded hover:bg-blue-400 hover:text-white transition',
                      location.pathname === '/ai_keyword' && 'text-blue-500 font-medium'
                    )}
                  >
                    <FileText className="inline w-4 h-4 mr-1" />
                    AI Keyword to Article
                  </Link>

                    <Link
                    to="/steal"
                    className={cn(
                      'block px-2 py-1 rounded hover:bg-blue-400 hover:text-white transition',
                      location.pathname === '/steal' && 'text-blue-500 font-medium'
                    )}
                  >
                    <FileText className="inline w-4 h-4 mr-1" />
                    Steal Competitor Keyword
                  </Link>
                  
                  <Link
                    to="/import"
                    className={cn(
                      'block px-2 py-1 rounded hover:bg-blue-400 hover:text-white transition',
                      location.pathname === '/import' && 'text-blue-500 font-medium'
                    )}
                  >
                    <FileText className="inline w-4 h-4 mr-1" />
                    Import Keyword from GSC
                  </Link>

                  <Link
                    to="/manual"
                    className={cn(
                      'block px-2 py-1 rounded hover:bg-blue-400 hover:text-white transition',
                      location.pathname === '/manual' && 'text-blue-500 font-medium'
                    )}
                  >
                    <FileText className="inline w-4 h-4 mr-1" />
                    Manual Keyword to Article
                  </Link>

                  <Link
                    to="/bulk"
                    className={cn(
                      'block px-2 py-1 rounded hover:bg-blue-400 hover:text-white transition',
                      location.pathname === '/bulk' && 'text-blue-500 font-medium'
                    )}
                  >
                    <FileText className="inline w-4 h-4 mr-1" />
                    Bulk Keyword to Article
                  </Link>

                  <Link
                    to="/longtail"
                    className={cn(
                      'block px-2 py-1 rounded hover:bg-blue-400 hover:text-white transition',
                      location.pathname === '/longtail' && 'text-blue-500 font-medium'
                    )}
                  >
                    <FileText className="inline w-4 h-4 mr-1" />
                    Longtail Keyword to Article
                  </Link>

                  <Link
                    to="/setting"
                    className={cn(
                      'block px-2 py-1 rounded hover:bg-blue-400 hover:text-white transition',
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

       
        <Link
          to="/settings"
          className={cn(
            'flex items-center gap-3 text-sm p-2 rounded hover:bg-blue-400 hover:text-white transition',
            location.pathname === '/settings' && 'bg-muted font-medium'
          )}
        >
          <Settings className="h-5 w-5 text-blue-700" />
          Settings
        </Link>

       
        <Link
          to="/blog"
          className={cn(
            'flex items-center gap-3 text-sm p-2 rounded hover:bg-blue-400 hover:text-white transition',
            location.pathname === '/blog' && 'bg-muted font-medium'
          )}
        >
          <FileText className="h-5 w-5 text-blue-700" />
          Auto Blog
        </Link>

       
        <Link
          to="/internal"
          className={cn(
            'flex items-center gap-3 text-sm p-2 rounded hover:bg-blue-400 hover:text-white transition',
            location.pathname === '/internal' && 'bg-muted font-medium'
          )}
        >
          <LinkIcon className="h-5 w-5 text-blue-700" />
          Internal Links
        </Link>

      
        <Link
          to="/backlinks"
          className={cn(
            'flex items-center gap-3 text-sm p-2 rounded hover:bg-blue-400 hover:text-white transition',
            location.pathname === '/backlinks' && 'bg-muted font-medium'
          )}
        >
          <Zap className="h-5 w-5 text-blue-700" />
          Free Backlinks
        </Link>

        
        <Link
          to="/integrate"
          className={cn(
            'flex items-center gap-3 text-sm p-2 rounded hover:bg-blue-400 hover:text-white transition',
            location.pathname === '/integrate' && 'bg-muted font-medium'
          )}
        >
          <Puzzle className="h-5 w-5 text-blue-700" />
          Integrations
        </Link>

    
        <Link
          to="/subscription"
          className={cn(
            'flex items-center gap-3 text-sm p-2 rounded hover:bg-blue-400 hover:text-white transition',
            location.pathname === '/subscription' && 'bg-muted font-medium'
          )}
        >
          <Repeat className="h-5 w-5 text-blue-700" />
          Subscriptions
        </Link>


        <Link
          to="/affiliate"
          className={cn(
            'flex items-center gap-3 text-sm p-2 rounded hover:bg-blue-400 hover:text-white transition',
            location.pathname === '/affiliate' && 'bg-muted font-medium'
          )}
        >
          <User className="h-5 w-5 text-blue-700" />
          Affiliate Program
        </Link>

        <Link
          to="/help"
          className={cn(
            'flex items-center gap-3 text-sm p-2 rounded hover:bg-blue-400 hover:text-white transition',
            location.pathname === '/help' && 'bg-muted font-medium'
          )}
        >
          
          <HelpCircle className="h-5 w-5 text-blue-700" />
          Help Center
        </Link>
       
        <Link
          to="/update"
           className={cn(
            'flex items-center gap-3 text-sm p-2 rounded hover:bg-blue-400 hover:text-white transition',
            location.pathname === '/update' && 'bg-muted font-medium'
          )}
        >
          <RefreshCcw className="h-5 w-5 text-blue-700" />
          Updates
        </Link>

     
        <Link
          to="/live"
          className={cn(
            'flex items-center gap-3 text-sm p-2 rounded hover:bg-blue-400 hover:text-white transition',
            location.pathname === '/live' && 'bg-muted font-medium'
          )}
        >
          <MessageCircle className="h-5 w-5 text-blue-700" />
          Live Chat Support
        </Link>

       
        <Link
          to="/profile"
          className={cn(
            'flex items-center gap-3 text-sm p-2 rounded hover:bg-blue-400 hover:text-white transition',
            location.pathname === '/profile' && 'bg-muted font-medium'
          )}
        >
          <UserCircle className="h-5 w-5 text-blue-700" />
          Profile
        </Link>
      </nav>

    </div>
  );

return (
    <LoadingCtx.Provider value={loading}>
  <div className="">
    <div
         className={`
          w-full flex items-center gap-2
          fixed top-0 left-0 z-[1000]
          bg-blue-500 text-white py-4 px-6
          ${toggle ? "hidden" : ""}
        `}
        onClick={() => setToggle(true)}
      >
        <MenuIcon />
        <p className="font-bold text-2xl">Sidebar</p>
      </div>

    {content}
  </div>
</LoadingCtx.Provider>

  );

}

